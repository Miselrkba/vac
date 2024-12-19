import AddNewButton from '@/components/AddNewButton'
import { render, screen, fireEvent } from '@testing-library/react'

describe('AddNewButton Component', () => {
  it('renders the Add New button', () => {
    render(<AddNewButton onAddVacation={jest.fn()} />)
    expect(screen.getByText('Add New')).toBeInTheDocument()
  })

  it('opens the modal when clicked', () => {
    render(<AddNewButton onAddVacation={jest.fn()} />)

    fireEvent.click(screen.getByText('Add New'))
    expect(screen.getByText('Add New Vacation')).toBeInTheDocument()
  })

  it('renders the modal with form fields', () => {
    render(<AddNewButton onAddVacation={jest.fn()} />)

    fireEvent.click(screen.getByText('Add New'))

    expect(screen.getByLabelText('Submitted:')).toBeInTheDocument()
    expect(screen.getByLabelText('First Day:')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Day:')).toBeInTheDocument()
    expect(screen.getByLabelText('Days:')).toBeInTheDocument()
    expect(screen.getByLabelText('Approved By (Manager):')).toBeInTheDocument()
    expect(screen.getByLabelText('User:')).toBeInTheDocument()
  })

  it('calls onAddVacation when the form is submitted', () => {
    const mockAddVacation = jest.fn()
    render(<AddNewButton onAddVacation={mockAddVacation} />)

    fireEvent.click(screen.getByText('Add New'))

    fireEvent.change(screen.getByLabelText('Submitted:'), {
      target: { value: '2023-12-19' },
    })
    fireEvent.change(screen.getByLabelText('First Day:'), {
      target: { value: '2023-12-20' },
    })
    fireEvent.change(screen.getByLabelText('Last Day:'), {
      target: { value: '2023-12-25' },
    })
    fireEvent.change(screen.getByLabelText('Days:'), {
      target: { value: '5' },
    })
    fireEvent.change(screen.getByLabelText('Approved By (Manager):'), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByLabelText('User:'), {
      target: { value: '1' },
    })

    fireEvent.click(screen.getByText('Add Vacation'))
    expect(mockAddVacation).toHaveBeenCalledWith({
      submitted: '2023-12-19',
      firstDay: '2023-12-20',
      lastDay: '2023-12-25',
      days: '5',
      approvedByM: 'John Doe',
      approvedByD: '-',
      userId: '1',
      state: 'SCHVÁLENÉ_MANAŽÉROM',
    })
  })

  it('closes the modal when Close is clicked', () => {
    render(<AddNewButton onAddVacation={jest.fn()} />)

    fireEvent.click(screen.getByText('Add New'))

    fireEvent.click(screen.getByText('Close'))
    expect(screen.queryByText('Add New Vacation')).not.toBeInTheDocument()
  })
})
