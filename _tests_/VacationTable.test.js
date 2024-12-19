import VacationTable from '@/components/VacationTable'
import { render, screen, fireEvent } from '@testing-library/react'

const mockVacations = [
  {
    id: 1,
    submitted: '20.04.2016',
    state: 'SCHVÁLENÉ_MANAŽÉROM',
    firstDay: '16.06.2016',
    lastDay: '26.06.2016',
    days: 7,
    approvedByM: 'Jan',
    approvedByD: '-',
  },
  {
    id: 2,
    submitted: '15.07.2022',
    state: 'SCHVÁLENÉ_MANAŽÉROM',
    firstDay: '20.07.2022',
    lastDay: '25.07.2022',
    days: 6,
    approvedByM: 'Maria',
    approvedByD: '-',
  },
]

describe('VacationTable Component', () => {
  it('renders the table headers', () => {
    render(<VacationTable vacations={mockVacations} onDelete={() => {}} />)

    expect(screen.getByText('Submitted')).toBeInTheDocument()
    expect(screen.getByText('State')).toBeInTheDocument()
    expect(screen.getByText('First Day')).toBeInTheDocument()
  })

  it('renders rows for vacations data', () => {
    render(<VacationTable vacations={mockVacations} onDelete={() => {}} />)

    expect(screen.getByText('20.04.2016')).toBeInTheDocument()
    expect(screen.getAllByText('SCHVÁLENÉ_MANAŽÉROM').length).toBe(2) // Verify both rows
    expect(screen.getByText('Jan')).toBeInTheDocument()
  })

  it('calls onDelete with the correct ID when Cancel is clicked', () => {
    const onDeleteMock = jest.fn()

    render(<VacationTable vacations={mockVacations} onDelete={onDeleteMock} />)

    const cancelLinks = screen.getAllByText('Cancel')
    fireEvent.click(cancelLinks[0])

    expect(onDeleteMock).toHaveBeenCalledTimes(1)
    expect(onDeleteMock).toHaveBeenCalledWith(1)
  })

  it('does not render deleted vacation rows', () => {
    let updatedVacations = [...mockVacations]

    const handleDeleteMock = jest.fn((id) => {
      updatedVacations = updatedVacations.filter(
        (vacation) => vacation.id !== id,
      )
    })

    const { rerender } = render(
      <VacationTable
        vacations={updatedVacations}
        onDelete={handleDeleteMock}
      />,
    )

    expect(screen.getByText('20.04.2016')).toBeInTheDocument()
    expect(screen.getByText('15.07.2022')).toBeInTheDocument()

    const cancelLinks = screen.getAllByText('Cancel')
    fireEvent.click(cancelLinks[0])

    expect(handleDeleteMock).toHaveBeenCalledWith(1)

    rerender(
      <VacationTable
        vacations={updatedVacations}
        onDelete={handleDeleteMock}
      />,
    )

    expect(screen.queryByText('20.04.2016')).not.toBeInTheDocument()

    expect(screen.getByText('15.07.2022')).toBeInTheDocument()
  })
})
