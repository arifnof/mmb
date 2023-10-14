import Barang from "./Barang"
// import Counter from "./Counter"
import Pegawai from "./Pegawai"

const Home = (props) => {
  let content = <></>

  if (props.content === "barang") {
    content = <Barang namaData="Daftar Barang" />
  } else if (props.content === "pegawai") {
    content = <Pegawai />
  }

  return (
    <section className="home">
      <div className="title">Judul Halaman</div>

      <div className="content">
        {/* <Counter /> */}
        {content}
      </div>
    </section>
  )
}

export default Home
