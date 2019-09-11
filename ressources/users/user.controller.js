import {User} from './user.models';

export const listUsers = async(req, res)=>{
    try{
        const users = await User.find();
        if(!users) return res.status(400).end();
        res.status(200).json({user:users})
    }
    catch(err){
        console.log(err);
        res.status(400).end();
    }
}

export const createUser = async(req,res)=>{
    let user;
    if(user){
        console.log('user already exist');
        res.status(400).end();
    }
    try{
        let newUser = new User();
        newUser.email = req.body.email;
        newUser.password = newUser.generateHash(req.body.password);
        const user = await User.create(newUser)
        res.status(201).json({user})

    }
    catch(err){
        console.error(err);
        res.status(400).end();
    }
}

export const getOne = async(req,res)=>{
    try{
        const user = await User.findById({_id:req.params.id});
        if(!user)return res.status(400).end();
        res.status(200).json({user:user})
    }
    catch(err){
        console.log(err)
        res.status(400).end();
    }
}

export const updateOne = async(req,res)=>{
    try{
        const userUpdated = await User.findByIdAndUpdate({
            _id:req.params.id
        },
            req.body,
            {new:true}
        )
        if(!userUpdated) return res.status(400).end()
        res.status(200).json({movie:userUpdated})
    }
    catch(err){
        console.log(err);
        res.status(400).end();
    }
}


export const deleteOne = async(req,res)=>{
    try{
        const userDeleted = await User.findByIdAndDelete({
            _id:req.params.id
        }
        )
        if(!userDeleted) return res.status(400).end()
        res.status(200).json({movie:userDeleted})
    }
    catch(err){
        console.error(err);
        res.status(400).end();
    }
}

