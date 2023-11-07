import Barang from "./Barang"
import ErrorBoundary from "./ErrorBoundary"
import MyComponentWithError from "./MyComponentWithError"
// import Counter from "./Counter"
import Pegawai from "./Pegawai"

const Home = (props) => {
  let title = "Judul Halaman"
  let content = <></>

  if (props.content === "dashboard") {
    title = "Dashboard"
    content = <>Halaman Dashboard</>
  } else if (props.content === "barang") {
    title = "List Barang"
    content = <Barang namaData="Daftar Barang" />
  } else if (props.content === "pegawai") {
    title = "List Pegawai"
    content = <Pegawai namaData="Daftar Pegawai" />
  } else if (props.content === "customer") {
    title = "List Pelanggan"
    content = <>Halaman List Pelanggan</>
  } else if (props.content === "supplier") {
    title = "List Supplier"
    content = <>Halaman List Supplier</>
  } else if (props.content === "error_boundary") {
    title = "Example Error Boundary"
    content = <ErrorBoundary>
                <MyComponentWithError />
              </ErrorBoundary>
  } else {
    title = "Not Found"
    content = <>404. Page Not Found</>
  }

  return (
    <section className="home">
      <div className="title">{title}</div>

      <div className="content">
        {/* <Counter /> */}
        {content}
      </div>
    </section>
  )
}

export default Home
