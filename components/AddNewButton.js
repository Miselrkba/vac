import { useState } from 'react'
import Modal from './Modal'
import AddNewForm from './AddNewForm'
import data from '../data/vacations.json'

const AddNewButton = ({ onAddVacation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="add-new-button">
      <button onClick={handleOpenModal}>Add New</button>
      {isModalOpen && (
        <Modal title="Add New Vacation" onClose={handleCloseModal}>
          <AddNewForm
            onAddVacation={onAddVacation}
            onClose={handleCloseModal}
            users={data.users}
          />
        </Modal>
      )}
    </div>
  )
}

export default AddNewButton
