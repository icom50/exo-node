import mongoose from 'mongoose';
export const connect = (url='mongodb://@localhost:27017/technocite', opt={})=>{
    return mongoose.connect(
        url,
        {...opt, useNewUrlParser:true}
    )
};