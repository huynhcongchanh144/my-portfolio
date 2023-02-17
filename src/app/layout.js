import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/main.scss'
import Header from './components/Header'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className='container'>
            <Header />
            {children}
            <Footer />
        </div>
      </body>
    </html>
  )
}
