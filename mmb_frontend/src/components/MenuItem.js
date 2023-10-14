import { useNavigate } from "react-router-dom"

const MenuItem = (props) => {
  const classIcon = `${props.classIcon} icon`
  const classActive = `nav-link ${props.isActive ? "active" : ""}` // "nav-link active"

  const navigate = useNavigate()

  return (
    <li
      className={classActive}
      key={props.id}
    >
      <a
        href="#"
        onClick={() => {
          navigate("/" + props.id)
        }}
      >
        <i
          className={classIcon}
          title={props.text}
        ></i>
        <span className="text nav-text">{props.text}</span>
      </a>
    </li>
  )
}

export default MenuItem
