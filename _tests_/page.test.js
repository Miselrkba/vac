import { render, screen } from '@testing-library/react'
import Page from '../app/page'

describe('Page Component', () => {
  it('renders the Page component with the main content', () => {
    render(<Page />)

    expect(screen.getByText('Vacation')).toBeInTheDocument()
  })
})
