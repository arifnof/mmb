const supplierModel = require("../models/SupplierModel")

async function getAll(req, res) {
  try {
    const result = await supplierModel.getAll()
    res.json({ data: result })
  } catch (error) {
    console.log("Error : ", error)
    res.status(500).json({ message: "Error saat mengambil data supplier" })
  }
}

module.exports = { getAll }
