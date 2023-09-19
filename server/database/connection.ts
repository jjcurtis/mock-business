import { config } from 'dotenv';
config();

const connection: string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qgbauck.mongodb.net/music-business?retryWrites=true&w=majority`

export default connection