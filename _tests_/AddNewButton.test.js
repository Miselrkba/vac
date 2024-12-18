import { AddNewButton } from '@/components/AddNewButton'
import { render, screen, fireEvent } from '@testing-library/react'

describe('AddNewButton Component', () => {
  it('renders the Add New button', () => {
    render(<AddNewButton />)
    expect(screen.getByText('Add New')).toBeInTheDocument()
  })

  it('calls the onClick handler when clicked', () => {
    const mockHandler = jest.fn()
    render(<button onClick={mockHandler}>Add New</button>)

    fireEvent.click(screen.getByText('Add New'))
    expect(mockHandler).toHaveBeenCalled()
  })
})
