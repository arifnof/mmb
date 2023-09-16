const express = require("express")
const router = express.Router()
const pegawaiController = require("../controllers/PegawaiController")
const barangController = require("../controllers/BarangController")
const supplierController = require("../controllers/SupplierController")
const pelangganController = require("../controllers/PegawaiController")

router.get("/pegawai", pegawaiController.getAll)
router.get("/pegawai/:id", pegawaiController.getById)
router.post("/pegawai", pegawaiController.create)
router.put("/pegawai/:id", pegawaiController.update)
router.delete("/pegawai/:id", pegawaiController.destroy)

router.get("/barang", barangController.getAll)

router.get("/supplier", supplierController.getAll)

router.get("/pelanggan", pelangganController.getAll)

module.exports = router
