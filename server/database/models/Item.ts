import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['Guitars', 'Bass', 'Drums', 'Piano', 'Audio', 'Sheet Music'],
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
