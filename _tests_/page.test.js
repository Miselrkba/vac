import { render, screen, fireEvent } from '@testing-library/react'
import Page from '../app/page'

describe('Page Component', () => {
  it('renders the Page component with the main content', () => {
    render(<Page />)
    expect(screen.getByText('Vacation')).toBeInTheDocument()
  })

  it('renders the initial vacation table', () => {
    render(<Page />)

    const rows = screen.getAllByRole('row')
    expect(rows.length).toBeGreaterThan(1)
    expect(screen.getAllByText('SCHVÁLENÉ_MANAŽÉROM').length).toBe(6)
    expect(screen.getByText('20.04.2016')).toBeInTheDocument()
  })

  it('filters vacations based on selected user', async () => {
    render(<Page />)

    fireEvent.change(screen.getByLabelText('Users:'), {
      target: { value: 'Matej Mazánik' },
    })
    fireEvent.click(screen.getByText('Change'))

    const matejElements = await screen.findAllByText('Matej Mazánik')
    expect(matejElements[1]).toBeInTheDocument()
  })

  it('adds a new vacation', () => {
    render(<Page />)

    fireEvent.click(screen.getByText('Add New'))

    fireEvent.change(screen.getByLabelText('Submitted:'), {
      target: { value: '2024-01-01' },
    })
    fireEvent.change(screen.getByLabelText('First Day:'), {
      target: { value: '2024-01-02' },
    })
    fireEvent.change(screen.getByLabelText('Last Day:'), {
      target: { value: '2024-01-05' },
    })
    fireEvent.change(screen.getByLabelText('Days:'), {
      target: { value: '4' },
    })
    fireEvent.change(screen.getByLabelText('Approved By (Manager):'), {
      target: { value: 'Ján Novák' },
    })
    fireEvent.change(screen.getByLabelText('User:'), {
      target: { value: '1' },
    })
    fireEvent.click(screen.getByText('Add Vacation'))

    expect(screen.getByText('2024-01-01')).toBeInTheDocument()
    expect(screen.getByText('Ján Novák')).toBeInTheDocument()
  })

  it('deletes a vacation', () => {
    render(<Page />)

    const cancelButtons = screen.getAllByText('Cancel')
    fireEvent.click(cancelButtons[0])

    expect(screen.queryByText('20.04.2016')).not.toBeInTheDocument()
  })
})
