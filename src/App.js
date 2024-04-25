import React from 'react'
import { Navbar, Footer } from './components'
import { Home, About, Services, Portfolio, Testimonials, Contact } from './pages'

const App = () => {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
