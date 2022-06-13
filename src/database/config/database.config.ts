import { registerAs } from '@nestjs/config';

export default registerAs('DBConfig', () => ({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [],
  synchronize: Boolean(process.env.DB_SYNC),
}));
