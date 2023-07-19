import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import * as dotenv from 'dotenv';

const configFactory = {
  provide: ConfigService,
  useFactory: () => {
    dotenv.config();
    const config = new ConfigService();
    config.loadFromDotEnv();
    return config;
  },
};

@Module({
  imports: [],
  providers: [configFactory],
  exports: [configFactory],
})
export class ConfigModule {}
