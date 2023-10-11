import express from "express";
import morgan from "morgan";
import helmet from 'helmet';
import router from './routes/task_api.js';

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));

app.use('/task', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});