import { VacationTableRow } from '@/components/VacationTableRow'
import { render, screen } from '@testing-library/react'

const vacation = {
  submitted: '20.04.2016',
  state: 'APPROVED_BY_MANAGER',
  firstDay: '16.06.2016',
  lastDay: '26.06.2016',
  days: 7,
  approvedByM: 'Jan',
  approvedByD: '-',
}

describe('VacationTableRow Component', () => {
  it('renders a vacation row with all data', () => {
    render(
      <table>
        <tbody>
          <VacationTableRow vacation={vacation} />
        </tbody>
      </table>,
    )

    expect(screen.getByText('20.04.2016')).toBeInTheDocument()
    expect(screen.getByText('APPROVED_BY_MANAGER')).toBeInTheDocument()
    expect(screen.getByText('Jan')).toBeInTheDocument()
    expect(screen.getByText('-')).toBeInTheDocument()
  })

  it('renders fallback for missing fields', () => {
    const incompleteVacation = {
      submitted: '', // Missing
      state: '', // Missing
      firstDay: '', // Missing
      lastDay: '', // Missing
      days: 0, // Missing (0 interpreted as falsy)
      approvedByM: undefined, // Missing
      approvedByD: null, // Missing
    }

    render(
      <table>
        <tbody>
          <VacationTableRow vacation={incompleteVacation} />
        </tbody>
      </table>,
    )

    // Check for multiple fallback '-' elements
    const fallbackElements = screen.getAllByText('-')
    expect(fallbackElements.length).toBe(7) // Expect 6 fallbacks (including 'days')
  })
})
