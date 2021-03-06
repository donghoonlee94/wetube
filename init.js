import dotenv from 'dotenv';
import './db';
import app from './app';
dotenv.config();
import './models/Video'; // import하면 mongoose에서 모델을 인식하게됨.
import './models/Comment';
import './models/User';

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`✅ Listening on: http://localhost:${PORT}`);

// 4000 포트와 연결
app.listen(PORT, handleListening);
