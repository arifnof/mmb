import { useEffect, useState } from "react"
import Modal from "./Modal"
import PegawaiForm from "./PegawaiForm"
import axios from "axios"

const Pegawai = () => {
  const [data, setData] = useState([])

  const [showPegawaiForm, setShowPegawaiForm] = useState(false)

  const [errorStatus, setErrorStatus] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const getSemuaPegawai = () => {
    axios
      .get("http://localhost:5005/api/pegawai/")
      .then((response) => {
        setData(response.data.data)
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

  useEffect(() => {
    getSemuaPegawai()
  }, [])

  const showPegawaiFormHandler = () => {
    setShowPegawaiForm(true)
  }

  const closePegawaiFormHandler = () => {
    setShowPegawaiForm(false)
  }

  return (
    <>
      {showPegawaiForm && (
        <Modal onBackdropClick={closePegawaiFormHandler}>
          <PegawaiForm onCancelClick={closePegawaiFormHandler} />
        </Modal>
      )}
      <button
        className="button"
        onClick={showPegawaiFormHandler}
      >
        + Tambah Pegawai
      </button>
      <h3>Daftar Pegawai</h3>
      <table className="custom-table">
        <thead>
          <tr>
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
              <td colSpan={6}>{errorMessage}</td>
            </tr>
          )}
          {data.map((item) => {
            return (
              <tr key={item.nrp}>
                <td>{item.nrp}</td>
                <td>{item.nama}</td>
                <td>{item.tanggal_lahir}</td>
                <td>{item.jenis_kelamin}</td>
                <td>{item.tempat_tinggal}</td>
                <td>{item.gaji}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Pegawai
