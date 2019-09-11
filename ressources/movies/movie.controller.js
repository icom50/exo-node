import {Movie} from './movie.models';

export const list = async(req, res)=>{
    try{
        const movies = await Movie.find();
        if(!movies) return res.status(400).end();
        res.status(200).json({movie:movies})
    }
    catch(err){
        console.log(err);
        res.status(400).end();
    }
}

export const create = async(req,res)=>{
    try{
        const movie = await Movie.create({...req.body})
        res.status(201).json({movie})
    }
    catch(err){
        console.error(err);
        res.status(400).end();
    }
}

export const getOne = async(req,res)=>{
    try{
        const movie = await Movie.findById({_id:req.params.id});
        if(!movie)return res.status(400).end();
        res.status(200).json({movie:movie})
    }
    catch(err){
        console.log(err)
        res.status(400).end();
    }
}

export const updateOne = async(req,res)=>{
    try{
        const movieUpdated = await Movie.findByIdAndUpdate({
            _id:req.params.id
        },
            req.body,
            {new:true}
        )
        if(!movieUpdated) return res.status(400).end()
        res.status(200).json({movie:movieUpdated})
    }
    catch(err){
        console.log(err);
        res.status(400).end();
    }
}

export const deleteOne = async(req,res)=>{
    try{
        const movieDeleted = await Movie.findByIdAndDelete({
            _id:req.params.id
        }
        )
        if(!movieDeleted) return res.status(400).end()
        res.status(200).json({movie:movieDeleted})
    }
    catch(err){
        console.error(err);
        res.status(400).end();
    }
}

