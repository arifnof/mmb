import MenuItem from "./MenuItem"

const Menu = (props) => {
  const menuList = [
    {
      id: "dashboard",
      text: "Dashboard",
      classIcon: "bx bx-home-alt",
      isActive: false,
    },
    {
      id: "barang",
      text: "List Barang",
      classIcon: "bx bx-cube-alt",
      isActive: true,
    },
    {
      id: "pegawai",
      text: "List Pegawai",
      classIcon: "bx bxs-user-badge",
      isActive: false,
    },
    {
      id: "customer",
      text: "List Customers",
      classIcon: "bx bxs-user-detail",
      isActive: false,
    },
    {
      id: "supplier",
      text: "List Suppliers",
      classIcon: "bx bxs-factory",
      isActive: false,
    },
    {
      id: "laporan_penjualan",
      text: "Laporan Penjualan",
      classIcon: "bx bx-file",
      isActive: false,
    },
  ]

  return (
    <div className="menu">
      <li className="search-box">
        <i
          className="bx bx-search icon"
          onClick={props.onSearchBoxClick}
        ></i>
        <input
          type="text"
          placeholder="Search..."
        />
      </li>

      <ul className="menu-links">
        {menuList.map((item) => {
          return (
            <MenuItem
              key={item.id}
              {...item}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Menu
