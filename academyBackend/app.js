import express from 'express';
import {PORT} from './config/env.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import courseRouter from './routes/course.routes.js';
import connectToDatabase from "./database/mongodb.js";
import cookieParser  from "cookie-parser";
import errorMiddleware from "./middlewares/erro.middleware.js";
import cors from 'cors';
import newsletterRouter from './routes/newsletter.js';



const app = express();

app.use(cors())


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(errorMiddleware);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/courses', courseRouter);
app.use('/api/newsletter', newsletterRouter);
app.use("/uploads", express.static("public/uploads"));






app.listen(PORT,  async() => {
    console.log(`Express server listening on ${PORT}`);
    await connectToDatabase();

});



export default app;