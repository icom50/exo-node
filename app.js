import express from 'express';
import {json, urlencoded} from 'body-parser';
const app = express();
import {connect} from './utils/db';
import moviesRouter from './ressources/movies/movie.router';
import {search} from './ressources/search.controller';
import usersRouter from './ressources/users/user.router';

app.disable('x-powered-by');

app.use(json());
app.use(urlencoded({extended:true}));

app.use('/api/movies', moviesRouter)
app.use('/search', search)
app.use('/api/users' , usersRouter);
const start = async()=>{
    try{
        await connect()
        app.listen(8001, ()=>{
            console.log('rest api listen on port 8001');
        })
    }
    catch(err){
        throw err
    }
}


start();