const HapusBarang = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <div>{props.message}</div>
      <div className="actions">
        <button
          className="button-secondary"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button
          className="button button-delete"
          onClick={props.onDelete}
        >
          Hapus
        </button>
      </div>
    </>
  )
}

export default HapusBarang
