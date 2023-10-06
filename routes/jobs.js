const express = require('express')
const router = express.Router();

//Importing jobs controller method
const {getJobs, newJob, getJobsInRadius, updateJob, deleteJob, get_single_job} = require('../controllers/jobsController')

router.route('/jobs').get(getJobs)

router.route('/job/:id/:slug').get(get_single_job)

router.route('/job/new').post(newJob)

router.route('/jobs/:zipcode/:distance').get(getJobsInRadius)

router.route('/job/:id')
    .put(updateJob)
    .delete(deleteJob);

module.exports = router;