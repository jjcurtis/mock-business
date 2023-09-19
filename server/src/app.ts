import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { cors } from '@elysiajs/cors';
import inventory from './routes/inventory';
import home from './routes/home';
import about from './routes/about';
import admin from './routes/admin';
import jwt from '@elysiajs/jwt';

const app = new Elysia()
  .onStart(() => console.log('Server Started'))
  .use(swagger())
  .use(cors({
    origin: /http:\/\/localhost:3000$/
  }))
  .use(jwt({
    secret: `${process.env.ACCESS_TOKEN_SECRET}`
  }))
  .use(home)
  .use(inventory)
  .use(about)
  .use(admin)
  .onError(({ error }) => ({ error }))
  .listen(process.env.PORT || 5000);
