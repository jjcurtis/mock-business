import { Elysia } from 'elysia';

const about = new Elysia({ prefix: '/about' }).get(
  '/',
  ({}) => ({
    title: 'A Little More About Us...',
  })
);

export default about;
