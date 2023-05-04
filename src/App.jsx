import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Shapes from './components/Shapes/Shapes.jsx'
import Residencies from './components/Residencies/Resicencies.jsx'
import Value from './components/Value/Value.jsx'
import Contact from './components/Contact/Contact.jsx'
import GetStarted from './components/GetStarted/GetStarted.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Shapes />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App
