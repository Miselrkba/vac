import { render, screen } from '@testing-library/react'
import RootLayout from '../app/layout'

describe('RootLayout Component', () => {
  it('renders children within the layout', () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    )

    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
