import { Express } from 'express';
import usersController from './controllers/users';
import indexController from './controllers/index';

export function setupRoutes(app: Express) {
    app.use('/', indexController);
    app.use('/users', usersController);
}