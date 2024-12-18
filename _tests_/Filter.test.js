import { Filter } from '@/components/Filter'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Filter Component', () => {
  const mockOnFilterChange = jest.fn()

  it('renders dropdowns and button', () => {
    render(<Filter onFilterChange={mockOnFilterChange} />)

    expect(screen.getByLabelText(/Teams:/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Users:/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /change/i })).toBeInTheDocument()
  })

  it('triggers onFilterChange when dropdown values change', () => {
    render(<Filter onFilterChange={mockOnFilterChange} />)

    fireEvent.change(screen.getByLabelText(/Teams:/i), { target: { value: 'Všetci používatelia' } })
    fireEvent.change(screen.getByLabelText(/Users:/i), { target: { value: 'Matej Mazánik' } })

    fireEvent.click(screen.getByRole('button', { name: /change/i }))

    expect(mockOnFilterChange).toHaveBeenCalledWith({ team: 'Všetci používatelia', user: 'Matej Mazánik' })
  })
})
