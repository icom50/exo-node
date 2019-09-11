import {Router} from 'express';
const routerUser = Router();
import {listUsers, createUser, getOne, updateOne, deleteOne} from './user.controller';


routerUser
    .route('/')
    .get(listUsers)
    .post(createUser);

routerUser
    .route("/:id")
    .get(getOne)
    .put(updateOne)
    .delete(deleteOne)

export default routerUser;