const Backdrop = (props) => {
  return (
    <div
      className="backdrop"
      onClick={props.onBackdropClick}
    ></div>
  )
}

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">{props.children}</div>
    </div>
  )
}

const Modal = (props) => {
  return (
    <>
      <Backdrop onBackdropClick={props.onBackdropClick} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  )
}

export default Modal
