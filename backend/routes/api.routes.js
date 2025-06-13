const express = require('express');
const router = express.Router();
const { getDestinations } = require('../controllers/destinationController');
const { getTopSellingPackages } = require('../controllers/packageController');
const { getTestimonials } = require('../controllers/testimonialController');

router.get('/destinations', getDestinations);
router.get('/packages/top-selling', getTopSellingPackages);
router.get('/testimonials',getTestimonials)

module.exports = router;