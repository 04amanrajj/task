const Package = require("../models/package.model");
const { mockPackages } = require("../constants");

const getTopSellingPackages = async (req, res) => {
  try {
    
      await Package.insertMany(mockPackages);
      const packages = mockPackages;
    
    res.json(packages);
  } catch (error) {
    console.error("Package fetch error:", error.message);
    res.status(500).json({ error: "Failed to fetch packages" });
  }
};

module.exports = { getTopSellingPackages };
