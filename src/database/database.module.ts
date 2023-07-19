import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigDBData } from 'src/config/config.interface';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';

@Module({})
export class DatabaseModule {
  public static forRoot() {
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => {
            return DatabaseModule.getConnection(configService);
          },
        }),
      ],
    };
  }

  static getConnection(configService: ConfigService) {
    const dbData = configService.get().db;
    let connectionOpn: TypeOrmModuleOptions;

    if (dbData) {
      return this.getMysqlDBConfig(dbData);
    }
  }

  static getMysqlDBConfig(dbData: ConfigDBData): TypeOrmModuleOptions {
    return {
      type: dbData.type,
      port: dbData.port,
      host: dbData.host,
    };
  }
}
