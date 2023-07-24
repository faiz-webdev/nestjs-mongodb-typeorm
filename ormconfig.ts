import * as dotenv from 'dotenv';
dotenv.config();

module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.MYSQL_DB_HOST,
  port: process.env.MYSQL_DB_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  logging: true,
  entities: ['src/entities/*.ts'],
  //   entities: [UserEntity, PostEntity, CommentEntity],
  synchronize: true,
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/app/models',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
