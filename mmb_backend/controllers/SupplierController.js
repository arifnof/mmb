const supplierModel = require('../models/SupplierModel')

async function getAll(req, res) {
  try {
    const result = await supplierModel.ambilSemua()
    res.json({ data: result })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat mengambil data supplier' })
  }
}

async function getById(req, res) {
  try {
    const id = req.params.id
    const result = await supplierModel.ambilBerasarkanId(id)
    res.json({ data: result })
  } catch (error) {
    console.log('Error : ', error)
    res
      .status(500)
      .json({ message: 'Error saat mengambil data supplier berdasarkan ID ' })
  }
}

async function create(req, res) {
  try {
    const dataBaru = req.body
    const result = await supplierModel.tambah(dataBaru)
    res.json({ message: 'Berhasil menambahkan data supplier' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat menambahkan data supplier ' })
  }
}

async function update(req, res) {
  try {
    const id = req.params.id
    const dataUpdate = req.body
    const result = await supplierModel.ubah(id, dataUpdate)
    res.json({ message: 'Berhasil mengubah data supplier' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat mengubah data supplier ' })
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id
    const result = await supplierModel.hapus(id)
    res.json({ message: 'Berhasil menghapus data supplier ' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat menghapus data supplier ' })
  }
}

module.exports = { getAll, getById, create, update, destroy }
