const mongoose = require('mongoose');
const validator = require('validator');

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'pls enter a job title'],
        trim:true,
        maxLength: [100, 'job title cant exceed 100 char'],

    },
    slug: String, //url search, user friendly
    description:{
        type:String,
        required: [true, 'pls enter job descr'],
        maxLength: [1000, 'cant exceed 1000 char'],

    },
    email:{
        type:String,
        validate: [validator.isEmail, 'enter valid email'],

    },
    address:{
        type:String,
        required: [true, 'pls provide address']
    },
    location:{
        type: {
            type:String,
            enum : ['Point']
        },
        coordinates:{
            type: [Number],
            index: '2dsphere',
        },
        formattedAddress: String,
        city: String,
        state:String,
        zipcode:String,
        country: String
    },
    company:{
        type: String,
        required: [true, 'pls add company name']
    },
    industry:{
        type: [String],
        required: [true, 'pls enter industry for this job'],
        enum : {
            values : [
                'Business',
                'IT',
                'Banking',
                'telecom',
                'others'
            ],
            message: 'pls select crct value fot job type'
        },
        jobType: {
            type: String,
            required : [true, 'pls enter a job type'],
            enum: {
                values: [
                    'permanent',
                    'internship',
                    'temporary'
                ],
                message: 'pls select correct option for job type'
            }
        },
        minEducation: {
            type: String,
            required: [true, 'pls enter min edc for this job'],
            enum:{
                values:[
                    'bachelors',
                    'masters',
                    'phd'
                ],
                message : 'pls select correct option for education'
            }
        },
        positions:{
            type: Number,
            default: 1
        },
        experiences:{
            type: String,
            required: [true, 'pls enter req expr'],
            enum:{
                values:[
                    'no expre',
                    '1 year',
                    '2-5 yrs',
                    '10+ yr'
                ],
                message: 'pls select correct option for education'
            }
        },
        salary:{
            type: Number,
            required: [true, 'pls enter expected salary']
        },
        postingDate:{
            type:Date,
            default: Date.now()
        },
        lastDate:{
            type:Date,
            default: new Date().setDate(new Date().getDate() + 7)
        },
        applicantsApplied:{
            type:[Object],
            // select: false: When select is set to false, it means that by default, the applicantsApplied field will be excluded from the query results. In other words, when you query the database for documents of this schema, the applicantsApplied field will not be part of the returned document unless you explicitly request it to be included in the query by specifying .select('applicantsApplied').
            select: false,
        },
        //connection with other mongoose model
        user:{
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required:true
        }

    }
})

module.exports = mongoose.model('Jobs',jobSchema)