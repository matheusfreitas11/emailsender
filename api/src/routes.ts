import { Router } from 'express';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { userController } from "./controllers/userController";

const router = Router();

const UserController = new userController();
const surveysController = new SurveysController();

const sendMailController = new SendMailController();

const answerController = new AnswerController();

const npsController = new NpsController();

router.post("/users", UserController.create);
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/sendMail", sendMailController.execute);

router.get("/answers/:value", answerController.execute);

router.get("/nps/:survey_id",npsController.execute);

export { router };