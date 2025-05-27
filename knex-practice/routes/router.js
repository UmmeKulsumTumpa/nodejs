import express from 'express';
import personController from '../person/person.controller.js';

const router = express.Router();

router.post('/person', personController);

export default router;