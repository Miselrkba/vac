const VacationTableRow = ({ vacation, onDelete }) => {
  const handleDelete = (e) => {
    e.preventDefault()
    onDelete(vacation.id)
  }

  return (
    <tr>
      <td>{vacation.submitted || '-'}</td>
      <td>{vacation.state || '-'}</td>
      <td>{vacation.firstDay || '-'}</td>
      <td>{vacation.lastDay || '-'}</td>
      <td>{vacation.days || '-'}</td>
      <td>{vacation.approvedByM ? vacation.approvedByM.split(' ')[0] : '-'}</td>
      <td>{vacation.approvedByD || '-'}</td>
      <td>
        <a href="#" className="cancel-link" onClick={handleDelete}>
          Cancel
        </a>
      </td>
    </tr>
  )
}

export default VacationTableRow
