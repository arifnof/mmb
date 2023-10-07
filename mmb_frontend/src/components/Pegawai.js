import { useEffect, useState } from "react"
import Modal from "./Modal"
import PegawaiForm from "./PegawaiForm"
import axios from "axios"

const Pegawai = () => {
  const [data, setData] = useState([])

  const [showPegawaiForm, setShowPegawaiForm] = useState(false)

  const getSemuaPegawai = () => {
    axios.get("http://localhost:5005/api/pegawai/").then((response) => {
      setData(response.data.data)
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
