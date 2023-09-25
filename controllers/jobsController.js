const Job = require('../models/jobs')


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

