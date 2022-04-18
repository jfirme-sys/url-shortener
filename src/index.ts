import express, { Application } from 'express'
import router from './api/routes/app.routes';
import 'dotenv/config'
import { connection } from './api/db';

const app: Application = express();
const PORT = process.env.PORT || 3000;
 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connection()

app.use("/", router)

app.listen(PORT, () => {
  console.log(`:::App is listening on port ${PORT}!`)
})

