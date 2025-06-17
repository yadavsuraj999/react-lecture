import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Services from "./pages/Services"
import Header from "./components/Header"
import Users from "./pages/Users"
import Usredetail from "./pages/Usredetail"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/user" element={<Users />} />
          <Route path="/user/:id" element={<Usredetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App