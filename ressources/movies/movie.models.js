import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    fields : {
        directors : {type: Array},
        release_date : {type : String},
        rating : {type : Number},
        genres : {type : Array},
        image_url : {type : String},
        plot : {type : String},
        title : {type : String},
        rank : {type : Number},
        running_time_secs : {type : Number},
        actors : {type : Array},
        year : {type : Number}
        },
        id: {type: String},
        type: {type: String}
})

export const Movie = mongoose.model('movie', movieSchema);