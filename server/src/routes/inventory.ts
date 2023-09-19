import Elysia from 'elysia';
import getItems from '../../database/queries/getItems';

const inventory = new Elysia({ prefix: '/inventory' });

inventory.get('/', async () => await getItems());

inventory.post('/', ({}) => {

} )

export default inventory;
