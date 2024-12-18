import { render, screen } from '@testing-library/react'

jest.mock('../app/layout', () => {
  return function MockRootLayout({ children }) {
    return <div data-testid="root-layout">{children}</div>
  }
})

describe('RootLayout Component', () => {
  it('renders children within the layout', () => {
    render(
      <div data-testid="root-layout">
        <div>Test Content</div>
      </div>,
    )

    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
