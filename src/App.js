import Header from './component/Header'
import ResearchCards from './component/ResearchCards'
import DemoCarousel from './component/DemoCarousel'
import TextCarousel from './component/TextCarousel'
import Footer from './component/Footer'

import './App.css'

const App = () => (
  <div className="app-container">
    <Header />
    <ResearchCards />
    <DemoCarousel />

    <TextCarousel />
    <Footer />
  </div>
)

export default App
