import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Signup from "./components/Signup"

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Signup/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App