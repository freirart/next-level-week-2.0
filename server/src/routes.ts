import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();


routes.post('/classes', classControllers.create);
routes.get('/classes', classControllers.index);

routes.post('/connections', connectionsControllers.create);
routes.get('/connections', connectionsControllers.index);

export default routes;