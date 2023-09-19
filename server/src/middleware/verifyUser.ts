import jwt from '@elysiajs/jwt';
import Elysia from 'elysia';
import { cookie } from '@elysiajs/cookie';

const verifyUser = (app: Elysia) =>
  app
    .use(cookie())
    .use(
      jwt({
        secret: `${process.env.ACCESS_TOKEN_SECRET}`,
      })
    )
    .get('/', async ({ jwt, cookie: { token }, set }) => {
      const user = await jwt.verify(token);
      set.headers['Access-Control-Allow-Credentials'] = 'true'
      return { user };
    });

export default verifyUser;
