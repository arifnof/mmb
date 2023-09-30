import React, { useState } from "react"
import "../assets/css/table.css"
import BarangForm from "./BarangForm"
import Modal from "./Modal"

const Barang = (props) => {
  const data = [
    {
      id: 1,
      nama: "Jeruk",
      satuan: "KG",
      harga: 20000,
      supplier_id: 1,
      supplier_nama: "Indoguna",
    },
    {
      id: 2,
      nama: "Semangka",
      satuan: "KG",
      harga: 10000,
      supplier_id: 1,
      supplier_nama: "Indoguna",
    },
    {
      id: 3,
      nama: "Susu UHT 500ml",
      satuan: "Pcs",
      harga: 6000,
      supplier_id: 2,
      supplier_nama: "Megantara",
    },
    {
      id: 4,
      nama: "Air Mineral 600ml",
      satuan: "Botol",
      harga: 40000,
      supplier_id: 2,
      supplier_nama: "Megantara",
    },
  ]

  const [showBarangForm, setShowBarangForm] = useState(true)

  const closeModalBarangHandler = () => {
    setShowBarangForm(false) // tidak tampil
  }

  const showModalBarangHandler = () => {
    setShowBarangForm(true) // tampil
  }

  return (
    <>
      {showBarangForm && (
        <Modal onBackdropClick={closeModalBarangHandler}>
          <BarangForm onCancelClick={closeModalBarangHandler} />
        </Modal>
      )}
      <button
        className="button"
        onClick={showModalBarangHandler}
      >
        + Tambah Barang
      </button>
      <h3>{props.namaData}</h3>
      <table className="custom-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Satuan</th>
            <th>Harga</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>{item.satuan}</td>
                <td>{item.harga}</td>
                <td>{item.supplier_nama}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Barang
