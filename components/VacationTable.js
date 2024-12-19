import VacationTableHeader from './VacationTableHeader'
import VacationTableRow from './VacationTableRow'

const VacationTable = ({ vacations, onDelete }) => (
  <div className="table-container">
    <table className="table">
      <VacationTableHeader />
      <tbody>
        {vacations.length > 0 ? (
          vacations.map((vacation) => (
            <VacationTableRow key={vacation.id} vacation={vacation} onDelete={onDelete} />
          ))
        ) : (
          <tr>
            <td colSpan="8">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)

export default VacationTable
