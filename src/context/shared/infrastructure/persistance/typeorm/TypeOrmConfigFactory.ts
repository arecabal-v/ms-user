import { TypeOrmConfig } from './TypeOrmConfig';

export class TypeOrmConfigFactory {
  static createConfig(): TypeOrmConfig {
    return {
      host: process.env.DB_HOST || process.env.DATABASE_HOST || 'localhost',
      port: Number(process.env.DB_PORT || process.env.DATABASE_PORT) || 5432,
      username: process.env.DB_USER || process.env.DATABASE_USER || 'postgres',
      password: process.env.DB_PASSWORD || process.env.DATABASE_PASSWORD || 'postgres',
      database: process.env.DB_NAME || process.env.DATABASE_NAME || 'ms_user'
    };
  }
} 