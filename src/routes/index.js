import { Router } from 'express';

import PipedriveController from '../app/controllers/PipedriveController';
import BlingController from '../app/controllers/BlingController';

const routes = Router();

routes.get('/deals', PipedriveController.index);

routes.get('/bling/deals', BlingController.index);

export default routes;
