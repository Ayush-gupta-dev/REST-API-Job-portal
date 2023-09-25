const express = require('express')
const router = express.Router();

//Importing jobs controller method
const {getJobs, newJob} = require('../controllers/jobsController')

router.route('/jobs').get(getJobs)

router.route('/job/new').post(newJob)


module.exports = router;