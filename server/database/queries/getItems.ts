import connection from '../connection';
import { connect, disconnect } from 'mongoose';
import Item from '../models/Item';

async function getItems() {
  await connect(connection);
  const items = await Item.find().exec();
  await disconnect();
  return items;
}

export default getItems