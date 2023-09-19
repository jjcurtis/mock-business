import { Elysia } from 'elysia';
import authenticateUser from '../middleware/authenticateUser';
import verifyUser from '../middleware/verifyUser';

const admin = new Elysia({ prefix: '/admin' })
.use(authenticateUser)
.use(verifyUser)

export default admin;
