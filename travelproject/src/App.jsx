import './App.css'
import { Destinations } from './Components/Destinations/Destinations'
import { Footer } from './Components/Footer/Footer'
import { Home } from './Components/Home/Home'
import { Middle } from './Components/Middle/Middle'
import { Navbar } from './Components/Navbar/Navbar'
import { Portifolio } from './Components/Portifolio/Portifolio'
import { Question } from './Components/Question/Question'
import { Reviews } from './Components/Reviews/Reviews'
import { Subscribe } from './Components/Subscribe/Subscribe'

function App() {


  return (
    <div>
      <Navbar />
      <Home />
      <Middle />
      <Destinations />
      <Portifolio />
      <Reviews />
      <Question />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
