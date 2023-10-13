import Barang from "./Barang"
// import Counter from "./Counter"
import Pegawai from "./Pegawai"

const Home = () => {
  return (
    <section className="home">
      <div className="title">Judul Halaman</div>

      <div className="content">
        {/* <Counter /> */}
        <Barang namaData="Daftar Barang" />
        <br />
        <Pegawai />
      </div>
    </section>
  )
}

export default Home
