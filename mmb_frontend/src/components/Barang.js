import React, { useEffect, useState } from "react"
import axios from "axios"
import "../assets/css/table.css"
import BarangForm from "./BarangForm"
import Modal from "./Modal"

const Barang = (props) => {
  const [data, setData] = useState([])

  const [showBarangForm, setShowBarangForm] = useState(false)
  const [modeUbah, setModeUbah] = useState(false)
  const [dataBarang, setDataBarang] = useState(null)

  const getSemuaBarang = () => {
    axios.get("http://localhost:5005/api/barang").then((response) => {
      // set state berdasarkan data azios
      setData(response.data.data)
    })
  }

  const simpanBarangBaru = (dataBaru) => {
    // simpan ke DB
    axios
      .post("http://localhost:5005/api/barang", dataBaru)
      .then((response) => {
        console.log(response.data)
        // close modal
        setShowBarangForm(false)
        // refresh table barang
        getSemuaBarang()
      })
  }

  const simpanBarangUbah = (idBarang, dataUbah) => {
    // simpan ke DB untuk PUT
    axios
      .put(`http://localhost:5005/api/barang/${idBarang}`, dataUbah)
      .then((response) => {
        console.log(response.data)
        // close modal
        setShowBarangForm(false)
        // refresh table barang
        getSemuaBarang()
      })
  }

  useEffect(() => {
    getSemuaBarang()
  }, [])

  const closeModalBarangHandler = () => {
    setShowBarangForm(false) // tidak tampil
  }

  const showModalBarangHandler = () => {
    setShowBarangForm(true) // tampil
    setModeUbah(false) // mode tambah barang
  }

  const btnUbahBarangHandler = (idBarang) => {
    // ambil data sesuai ID barang
    axios
      .get(`http://localhost:5005/api/barang/${idBarang}`)
      .then((response) => {
        console.log(response.data.data[0])
        setDataBarang(response.data.data[0])
        // tampilkan form barang, dengan data tersebut
        setShowBarangForm(true)
        setModeUbah(true) // mode edit barang
      })
  }

  const btnHapusBarangHandler = (idBarang) => {
    console.log(idBarang)
  }

  return (
    <>
      {showBarangForm && (
        <Modal onBackdropClick={closeModalBarangHandler}>
          <BarangForm
            onCancelClick={closeModalBarangHandler}
            onSimpanClick={simpanBarangBaru}
            modeUbah={modeUbah}
            dataBarang={dataBarang}
            onSimpanPerubahanClick={simpanBarangUbah}
          />
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
            <th>Actions</th>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Satuan</th>
            <th>Harga</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>
                  <button
                    className="button button-small"
                    onClick={() => {
                      btnUbahBarangHandler(item.id)
                    }}
                  >
                    <i className="bx bx-edit-alt"></i> Ubah
                  </button>
                  <button
                    className="button button-small button-delete"
                    onClick={() => {
                      btnHapusBarangHandler(item.id)
                    }}
                  >
                    <i className="bx bx-message-square-x"></i> Hapus
                  </button>
                </td>
                <td>{index + 1}</td>
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
