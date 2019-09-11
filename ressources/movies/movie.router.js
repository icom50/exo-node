import {Router} from 'express';
const router = Router();
import {list, create, getOne, updateOne, deleteOne} from './movie.controller';

router
    .route('/')
    .get(list)
    .post(create);

router
    .route('/:id')
    .get(getOne)
    .put(updateOne)
    .delete(deleteOne);


export default router;    