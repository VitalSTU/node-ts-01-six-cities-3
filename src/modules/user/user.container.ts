import { Container } from 'inversify';

import UserService from './user.service.js';
import { UserServiceInterface } from './user-service.interface.js';
import { Component } from '../../types/component.types.js';

const userContainer = new Container();

userContainer.bind<UserServiceInterface>(Component.UserServiceInterface).to(UserService).inSingletonScope();

export { userContainer };