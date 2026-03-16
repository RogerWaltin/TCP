import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import ScrollToTopButton from './components/ScrollButton'
import Home from './pages/Home';
import Services from "./pages/Services";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Footer from './components/footer'


function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}


export default App
