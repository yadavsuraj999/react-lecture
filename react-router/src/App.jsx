import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Services from "./pages/Services"
import Header from "./components/Header"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App