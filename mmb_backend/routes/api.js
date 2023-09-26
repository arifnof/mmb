const express = require('express')
const router = express.Router()
const pegawaiController = require('../controllers/PegawaiController')
const barangController = require('../controllers/BarangController')
const supplierController = require('../controllers/SupplierController')
const pelangganController = require('../controllers/PelangganController')

router.get('/pegawai', pegawaiController.getAll)
router.get('/pegawai/:id', pegawaiController.getById)
router.post('/pegawai', pegawaiController.create)
router.put('/pegawai/:id', pegawaiController.update)
router.delete('/pegawai/:id', pegawaiController.destroy)

router.get('/barang', barangController.getAll)
router.get('/barang/:id', barangController.getById)
router.post('/barang', barangController.create)
router.put('/barang/:id', barangController.update)
router.delete('/barang/:id', barangController.destroy)

router.get('/supplier', supplierController.getAll)
router.get('/supplier/:id', supplierController.getById)
router.post('/supplier', supplierController.create)
router.put('/supplier/:id', supplierController.update)
router.delete('/supplier/:id', supplierController.destroy)

router.get('/pelanggan', pelangganController.getAll)
router.get('/pelanggan/:id', pelangganController.getById)
router.post('/pelanggan', pelangganController.create)
router.put('/pelanggan/:id', pelangganController.update)
router.delete('/pelanggan/:id', pelangganController.destroy)

module.exports = router
