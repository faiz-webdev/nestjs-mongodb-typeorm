import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import ContactEntity from './entities/contact';
@Module({
  imports: [DatabaseModule.forRoot({ entities: [ContactEntity] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
