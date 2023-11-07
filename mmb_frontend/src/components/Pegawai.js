import React, { useEffect, useState } from "react"
import axios from "axios"
import "../assets/css/table.css"
import PegawaiForm from "./PegawaiForm"
import HapusForm from "./HapusForm"
import Modal from "./Modal"

const Pegawai = (props) => {
  const [data, setData] = useState([])

  const [showPegawaiForm, setShowPegawaiForm] = useState(false)
  const [showPegawaiHapus, setShowPegawaiHapus] = useState(false)
  const [modeUbah, setModeUbah] = useState(false)
  const [dataPegawai, setDataPegawai] = useState(null)

  const [errorStatus, setErrorStatus] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const getSemuaPegawai = () => {
    axios
      .get(process.env.REACT_APP_BE_URL + "/api/pegawai")
      .then((response) => {
        // set state berdasarkan data axios
        const body = response.data
        setData(body.data)
      })
      .catch((error) => {
        setErrorStatus(true)
        setErrorMessage(
          "Error saat mengambil data dari Backend : " +
            error
        )
        console.log(error)
      })
  }

  const simpanPegawaiBaru = (dataBaru) => {
    // simpan ke DB
    axios
      .post(process.env.REACT_APP_BE_URL + "/api/pegawai", dataBaru)
      .then((response) => {
        console.log(response.data)
        // close modal
        setShowPegawaiForm(false)
        // refresh table pegawai
        getSemuaPegawai()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const simpanPegawaiUbah = (nrp, dataUbah) => {
    // simpan ke DB untuk PUT
    // const url = 'http://localhost:5005/api/pegawai/' + nrp
    const url = process.env.REACT_APP_BE_URL + `/api/pegawai/${nrp}`
    axios.put(url, dataUbah).then((response) => {
      console.log(response.data)

      // showNotif(response.data.message)

      // close modal
      setShowPegawaiForm(false)
      // refresh table pegawai
      getSemuaPegawai()
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getSemuaPegawai()
  }, [])

  const closeModalPegawaiHandler = () => {
    setShowPegawaiForm(false) // tidak tampil
  }

  const showModalPegawaiHandler = () => {
    setShowPegawaiForm(true) // tampil
    setModeUbah(false) // mode tambah pegawai
  }

  const btnUbahPegawaiHandler = (nrp) => {
    // ambil data sesuai ID pegawai
    axios
      .get(process.env.REACT_APP_BE_URL + `/api/pegawai/${nrp}`)
      .then((response) => {
        // console.log(response.data.data[0])
        setDataPegawai(response.data.data[0])
        // tampilkan form pegawai, dengan data tersebut
        setShowPegawaiForm(true)
        setModeUbah(true) // mode edit pegawai
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const btnHapusPegawaiHandler = (nrp, namaPegawai) => {
    // console.log(nrp, namaPegawai)
    setDataPegawai({ id: nrp, nama: namaPegawai })
    setShowPegawaiHapus(true)
  }

  const btnCancelHapusHandler = () => {
    setDataPegawai(null)
    setShowPegawaiHapus(false)
  }

  const btnHapusHandler = (nrp) => {
    axios
      .delete(process.env.REACT_APP_BE_URL + `/api/pegawai/${nrp}`)
      .then((response) => {
        btnCancelHapusHandler()
        getSemuaPegawai()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      {showPegawaiForm && (
        <Modal onBackdropClick={closeModalPegawaiHandler}>
          <PegawaiForm
            onCancelClick={closeModalPegawaiHandler}
            onSimpanClick={simpanPegawaiBaru}
            modeUbah={modeUbah}
            dataPegawai={dataPegawai}
            onSimpanPerubahanClick={simpanPegawaiUbah}
          />
        </Modal>
      )}
      {showPegawaiHapus && (
        <Modal onBackdropClick={btnCancelHapusHandler}>
          <HapusForm
            title={`Hapus Pegawai "${dataPegawai.nama}" ?`}
            message=""
            onDelete={() => {
              btnHapusHandler(dataPegawai.nrp)
            }}
            onCancel={btnCancelHapusHandler}
          />
        </Modal>
      )}
      <button
        className="button"
        onClick={showModalPegawaiHandler}
      >
        + Tambah Pegawai
      </button>
      <h3>{props.namaData}</h3>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Actions</th>
            <th>NRP</th>
            <th>Nama</th>
            <th>Tgl Lahir</th>
            <th>JK</th>
            <th>Tempat Tinggal</th>
            <th>Gaji</th>
          </tr>
        </thead>
        <tbody>
          {errorStatus && (
            <tr>
              <td colSpan={7}>{errorMessage}</td>
            </tr>
          )}
          {data.map((item, index) => {
            return (
              <tr key={item.nrp}>
                <td className="text-center">
                  <button
                    className="button button-small"
                    onClick={() => {
                      btnUbahPegawaiHandler(item.nrp)
                    }}
                  >
                    <i className="bx bx-edit-alt"></i> Ubah
                  </button>
                  <button
                    className="button button-small button-delete"
                    onClick={() => {
                      btnHapusPegawaiHandler(item.nrp, item.nama)
                    }}
                  >
                    <i className="bx bx-message-square-x"></i> Hapus
                  </button>
                </td>
                <td>{item.nrp}</td>
                <td>{item.nama}</td>
                <td>
                  {new Date(item.tanggal_lahir).toLocaleDateString("ID", {
                    dateStyle: "medium",
                  })}
                </td>
                <td className="text-center">
                  {item.jenis_kelamin === "L" ? "Laki-laki" : "Perempuan"}
                </td>
                <td>{item.tempat_tinggal}</td>
                <td className="rupiah">{item.gaji.toLocaleString("ID")}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Pegawai
