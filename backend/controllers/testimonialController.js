const Testimonial = require("../models/testimonial.model");
const { mockTestimonials } = require("../constants");

const getTestimonials = async (req, res) => {
  try {
    await Testimonial.insertMany(mockTestimonials);
    const testimonials = mockTestimonials;

    res.json(testimonials);
  } catch (error) {
    console.error("Testimonial fetch error:", error.message);
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
};

module.exports = { getTestimonials };
