/* eslint-disable complexity */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export default () => ({
  database: {
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'root',
    database: process.env.DB_TEST_DATABASE || 'test-auth',
    dialect: process.env.DB_DIALECT || 'mysql',
  },
  jwt: {
    secret: process.env.APP_SECRET_KEY || 'secret',
  },
});
