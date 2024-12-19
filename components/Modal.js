const Modal = ({ title, children }) => (
  <div className="modal-backdrop">
    <div className="modal">
      <h2>{title}</h2>
      <div className="modal-content">{children}</div>
    </div>
  </div>
)

export default Modal
