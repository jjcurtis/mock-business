import { Elysia, t } from 'elysia';
import jwt from '@elysiajs/jwt';
import { cookie } from '@elysiajs/cookie'
import { connect, disconnect } from 'mongoose';
import connection from '../../database/connection';
import { compare } from 'bcryptjs';
import Admin from '../../database/models/Admin';

const authenticateUser = (app: Elysia) =>
  app
    .use(cookie())
    .use(
      jwt({
        secret: `${process.env.ACCESS_TOKEN_SECRET}`,
        exp: '5m',
      })
    )
    .schema({
      body: t.Object({
        username: t.String(),
        password: t.String(),
      }),      
    })
    .guard(
      {
        body: t.Object({
          username: t.String(),
          password: t.String(),
        }),
      }
    )
    .derive(async ({ body, jwt, set, setCookie}) => {
      if (!body) return 
      const { username, password } = body;
      if (username === '' || password === '') {
        set.status = 401;
        throw new Error(
          'Username and password are required'
        );
      }
      await connect(connection);
      const user = await Admin.findOne({ username });

      if (!user) {
        await disconnect();
        set.redirect = 'http://localhost:3000/admin'
        throw new Error('User not found');
      }

      const admin = await compare(password, user.password);

      if (admin) {
        await disconnect();
        const token = await jwt.sign({id: user.id, username: user.username});
        ;
        setCookie('token', token, {
          maxAge: 600,
        })
        set.redirect = 'http://localhost:3000/profile';
        set.headers['authorization'] = `Bearer ${token}`
        return ({
          token,
        });
      } else {
        await disconnect();
        set.redirect = 'http://localhost:3000/admin';
      }
    })
    .post('/', ({ token }) => ({
      token,
    }));

export default authenticateUser;
