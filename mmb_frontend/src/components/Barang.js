import React, { useEffect, useState } from "react"
import axios from "axios"
import "../assets/css/table.css"
import BarangForm from "./BarangForm"
import HapusForm from "./HapusForm"
import Modal from "./Modal"

const Barang = (props) => {
  const [data, setData] = useState([])

  const [showBarangForm, setShowBarangForm] = useState(false)
  const [showBarangHapus, setShowBarangHapus] = useState(false)
  const [modeUbah, setModeUbah] = useState(false)
  const [dataBarang, setDataBarang] = useState(null)

  const [errorStatus, setErrorStatus] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const getSemuaBarang = () => {
    axios
      .get("http://localhost:5005/api/barang")
      .then((response) => {
        // set state berdasarkan data axios
        const body = response.data
        setData(body.data)
      })
      .catch((error) => {
        setErrorStatus(true)
        setErrorMessage(
          "Error saat mengambil data dari Backend : " +
            error.response.data.message
        )
        // console.log(error.response.data.message)
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
      .catch((error) => {
        console.log(error.response.data)
      })
  }

  const simpanBarangUbah = (idBarang, dataUbah) => {
    // simpan ke DB untuk PUT
    // const url = 'http://localhost:5005/api/barang/' + idBarang
    const url = `http://localhost:5005/api/barang/${idBarang}`
    axios.put(url, dataUbah).then((response) => {
      console.log(response.data)

      // showNotif(response.data.message)

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
        // console.log(response.data.data[0])
        setDataBarang(response.data.data[0])
        // tampilkan form barang, dengan data tersebut
        setShowBarangForm(true)
        setModeUbah(true) // mode edit barang
      })
  }

  const btnHapusBarangHandler = (idBarang, namaBarang) => {
    // console.log(idBarang, namaBarang)
    setDataBarang({ id: idBarang, nama: namaBarang })
    setShowBarangHapus(true)
  }

  const btnCancelHapusHandler = () => {
    setDataBarang(null)
    setShowBarangHapus(false)
  }

  const btnHapusHandler = (idBarang) => {
    axios
      .delete(`http://localhost:5005/api/barang/${idBarang}`)
      .then((response) => {
        btnCancelHapusHandler()
        getSemuaBarang()
      })
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
      {showBarangHapus && (
        <Modal onBackdropClick={btnCancelHapusHandler}>
          <HapusForm
            title={`Hapus Barang "${dataBarang.nama}" ?`}
            message=""
            onDelete={() => {
              btnHapusHandler(dataBarang.id)
            }}
            onCancel={btnCancelHapusHandler}
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
          {errorStatus && (
            <tr>
              <td colSpan={6}>{errorMessage}</td>
            </tr>
          )}
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
                      btnHapusBarangHandler(item.id, item.nama)
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
