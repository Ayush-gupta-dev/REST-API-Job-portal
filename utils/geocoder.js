//In this line, the code imports the 'node-geocoder' library. 'node-geocoder' is a Node.js library that provides geocoding and reverse geocoding capabilities, which means it can convert addresses into geographical coordinates (latitude and longitude) and vice versa.

const nodeGeocoder = require('node-geocoder')

const options = {
    provider: process.env.GEOCODER_PROVIDER,
    httpAdapter: 'https',
    apiKey : process.env.GEOCODER_API_KEY,
    formatter: null
}

const geocoder = nodeGeocoder(options);
module.exports = geocoder;