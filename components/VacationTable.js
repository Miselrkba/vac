import { VacationTableHeader } from './VacationTableHeader'
import { VacationTableRow } from './VacationTableRow'

export const VacationTable = ({ vacations }) => {
  return (
    <div className="table-container">
      <table className="table">
        <VacationTableHeader />
        <tbody>
          {vacations.map((vacation, index) => (
            <VacationTableRow key={index} vacation={vacation} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
