const Package = require("../models/package.model");
const { mockPackages } = require("../constants");

const getTopSellingPackages = async (req, res) => {
  try {
    let packages = await Package.find().sort({ rating: -1 });
    if (packages.length === 0) {
      await Package.insertMany(mockPackages);
      packages = mockPackages;
    }

    res.json(packages);
  } catch (error) {
    console.error("Package fetch error:", error.message);
    res.status(500).json({ error: "Failed to fetch packages" });
  }
};

module.exports = { getTopSellingPackages };
