import {Movie} from './movies/movie.models';

export const search = async(req, res)=>{
    try{
        const movie = await Movie.find(req.query)
        console.dir(movie);
        if(!movie) return res.status(400).end();
        res.status(200).json({movie:movie})
    }
    catch(err){
        console.log(err);
        res.status(400).end();
    }
}