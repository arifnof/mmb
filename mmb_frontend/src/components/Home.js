import Barang from "./Barang"
import Counter from "./Counter"

const Home = () => {
  return (
    <section className="home">
      <div className="title">Judul Halaman</div>

      <div className="content">
        {/* <Counter /> */}
        <Barang namaData="Daftar Barang" />
      </div>
    </section>
  )
}

export default Home
