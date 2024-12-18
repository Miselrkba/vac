import { VacationTable } from '@/components/VacationTable'
import { render, screen } from '@testing-library/react'

const mockVacations = [
  {
    submitted: '20.04.2016',
    state: 'APPROVED_BY_MANAGER',
    firstDay: '16.06.2016',
    lastDay: '26.06.2016',
    days: 7,
    approvedByM: 'Jan',
    approvedByD: '-',
  },
]

describe('VacationTable Component', () => {
  it('renders the table headers', () => {
    render(<VacationTable vacations={mockVacations} />)

    expect(screen.getByText('Submitted')).toBeInTheDocument()
    expect(screen.getByText('State')).toBeInTheDocument()
    expect(screen.getByText('First Day')).toBeInTheDocument()
  })

  it('renders rows for vacations data', () => {
    render(<VacationTable vacations={mockVacations} />)

    expect(screen.getByText('20.04.2016')).toBeInTheDocument()
    expect(screen.getByText('APPROVED_BY_MANAGER')).toBeInTheDocument()
    expect(screen.getByText('Jan')).toBeInTheDocument()
  })
})
