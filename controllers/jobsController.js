const Job = require('../models/jobs')
const geocoder = require('../utils/geocoder')


// exporting get jobs; getting all jobs => /api/v1/jobs
exports.getJobs = async (req,res,next)=>{
   const jobs = await Job.find()
    res.status(200).json({ 
        success:true,
        results: jobs.length,
        data:jobs
    }
    )
}

// creating a new job => /api/v1/job/new

exports.newJob= async (req,res,next)=>{
    try{
    const job = await Job.create(req.body);
    res.status(200).json({
        success:true,
        message: 'job created',
        data : job
    })
}catch (err){
    console.log('error', err)
}
}

// search job with radius => /api/v1/jobs/:zipcode/:distance
exports.getJobsInRadius = async (req,res,next)=>{
    const {zipcode,distance} = req.params;
    //getting latitude and longitude from geocoder with zipcode
    const loc = await geocoder.geocode(zipcode);
    console.log(loc)
    const latitude = loc[0].latitude;
    const longitude = loc[0].longitude;
    const radius = distance / 3663;
    //some error in finding jobs
    const jobs = await Job.find({
        location: {$geoWithin: {$centerSphere: [[longitude,latitude],radius]}}
    })
    // const jobs = await Job.find({
    //     location: {
    //         $nearSphere: {
    //             $geometry: {
    //                 type: "Point",
    //                 coordinates: [longitude, latitude]
    //             },
    //             $maxDistance: radius
    //         }
    //     }
    // });
    res.status(200).json({
        success:true,
        results:jobs.length,
        data:jobs
        })

}