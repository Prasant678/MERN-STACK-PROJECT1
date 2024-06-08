import express from 'express';
import { sendMassage } from '../controller/MassageController.js';

const Router = express.Router();

Router.post("/send", sendMassage);

export default Router;