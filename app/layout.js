import './globals.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="intranet-background">
          <header className="top-bar">
            <span className="logged-in-user">Matej Mazánik (mmazanik)</span>
            <button className="go-home-button">GO HOME</button>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
