import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

describe('Header Component', () => {
  it('renders the header with the correct title', () => {
    render(<Header title="Vacation" />)
    expect(screen.getByText('Vacation')).toBeInTheDocument()
  })
})
