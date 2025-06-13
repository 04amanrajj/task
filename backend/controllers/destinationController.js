const Destination = require("../models/destination.model");
const { mockDestinations } = require("../constants");

const getDestinations = async (req, res) => {
  try {
    await Destination.insertMany(mockDestinations);
    const destinations = mockDestinations;

    res.json(destinations);
  } catch (error) {
    console.error("Destination fetch error:", error.message);
    res.status(500).json({ error: "Failed to fetch destinations" });
  }
};

module.exports = { getDestinations };
