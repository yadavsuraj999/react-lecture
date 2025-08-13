import { BrowserRouter, Route, Routes } from "react-router-dom"
import StudentTable from "./components/StudentTable"
import AddStudent from "./components/AddStudent"
// import Editstudent from "./components/Editstudent"


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StudentTable />} />
                    <Route path="/add-student" element={<AddStudent />} />
                    {/* <Route path="/edit-student/:id" element={<Editstudent />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App