/* eslint-disable complexity */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export default () => ({
  database: {
    // host: process.env.DB_HOST || 'localhost',
    // username: process.env.DB_USER || 'root',
    // database: process.env.DB_DATABASE || 'auth',
    // dialect: process.env.DB_DIALECT || 'mysql',
    url:
      process.env.DB_MONGO ||
      'mongodb+srv://SALEH:5u1AuUyKCKNmlzlL@saleh.ctojf.mongodb.net/?retryWrites=true&w=majority',
    driver: process.env.TYPE,
  },
  jwt: {
    secret: process.env.APP_SECRET_KEY || 'secret',
  },
});
