import { useState } from 'react'

const AddNewForm = ({ onAddVacation, onClose, users }) => {
  const [formData, setFormData] = useState({
    submitted: '',
    state: 'SCHVÁLENÉ_MANAŽÉROM',
    firstDay: '',
    lastDay: '',
    days: '',
    approvedByM: '',
    approvedByD: '-',
    userId: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddVacation(formData)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="add-new-form">
      <label>
        Submitted:
        <input
          type="date"
          name="submitted"
          value={formData.submitted}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        First Day:
        <input
          type="date"
          name="firstDay"
          value={formData.firstDay}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Last Day:
        <input
          type="date"
          name="lastDay"
          value={formData.lastDay}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Days:
        <input
          type="number"
          name="days"
          value={formData.days}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Approved By (Manager):
        <input
          type="text"
          name="approvedByM"
          value={formData.approvedByM}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        User:
        <select name="userId" value={formData.userId} onChange={handleChange} required>
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </label>
      <div className="form-buttons">
        <button type="submit">Add Vacation</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </form>
  )
}

export default AddNewForm
