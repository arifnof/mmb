const pelangganModel = require("../models/PelangganModel")

async function getAll(req, res) {
  try {
    const result = await pelangganModel.getAll()
    res.json({ data: result })
  } catch (error) {
    console.log("Error : ", error)
    res.status(500).json({ message: "Error saat mengambil data pelanggan" })
  }
}

module.exports = { getAll }
