import { BrowserRouter, Route, Routes } from "react-router-dom"
import StudentTable from "./components/StudentTable"
import AddStudent from "./components/AddStudent"


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StudentTable />} />
                    <Route path="/add-student" element={<AddStudent />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App