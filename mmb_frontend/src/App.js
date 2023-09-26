import React from 'react'
import foto_pp from './assets/img/Untitled.png'
import './assets/css/style.css'

function App() {
  return (
    <React.Fragment>
      <nav className="sidebar">
        <header>
          <div className="image-text">
            <span className="image">
              <img src={foto_pp} alt="foto profil" />
            </span>

            <div className="text logo-text">
              <span className="name"> Arif Nofyan </span>
              <span className="profession">Administrator</span>
            </div>
          </div>

          <i className="bx bx-chevron-right toggle"></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li>

            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-home-alt icon" title="Dashboard"></i>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>

              <li className="nav-link active">
                <a href="#">
                  <i className="bx bx-cube-alt icon" title="List Barang"></i>
                  <span className="text nav-text">List Barang</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i
                    className="bx bxs-user-badge icon"
                    title="List Pegawai"
                  ></i>
                  <span className="text nav-text">List Pegawai</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i
                    className="bx bxs-user-detail icon"
                    title="List Pelanggan"
                  ></i>
                  <span className="text nav-text">List Customer</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bxs-factory icon" title="List Supplier"></i>
                  <span className="text nav-text">List Supplier</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-file icon" title="Laporan Penjualan"></i>
                  <span className="text nav-text">Laporan Penjualan</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="#">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>

            <li className="mode">
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">Dark mode</span>

              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>

      <section className="home">
        <div className="title">Judul Halaman</div>

        <div className="content">
          <p id="paragraf1">Isi / Konten</p>
          <p id="paragraf2">Paragraf ke 2</p>
          <p id="paragraf3">Paragraf ke 3</p>
        </div>
      </section>
    </React.Fragment>
  )
}

export default App
