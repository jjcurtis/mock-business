import { Elysia } from 'elysia';

const home = new Elysia()
  .get('/', ({}) => ({
    title: 'Welcome to our Mock Music Business'
  }))

export default home;