import { Router } from 'express';
import authorize from "../middlewares/auth.middleware.js";
import { addNewsletter, getAllNewsletters, getNewsletterByEmail, getNewsletterById } from '../controllers/newsLetter.controller.js';






const newsletterRouter = Router();


newsletterRouter.post("/", addNewsletter);

newsletterRouter.get('/user/:id', authorize, getNewsletterByEmail);

newsletterRouter.get('/getAllNewsletters',authorize, getAllNewsletters);

newsletterRouter.get('/:id', authorize, getNewsletterById);



export default newsletterRouter;