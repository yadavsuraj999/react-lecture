import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { deletestudent } from "../features/students/studentSlice"

const StudentTable = () => {

    const students = useSelector((store) => store.students.list)
    const naviget = useNavigate()
    const dispatch = useDispatch()

    const handleclick = () => {
        naviget("/add-student")
    }
    const handledelete = (id)=>{
        dispatch(deletestudent(id))
    }

    const getcourse = (course)=>{
        switch(course){
            case 1:
                return "Full Stack Development"
            case 2:
                return "ui/ux"
            case 3:
                return "ai/ml"
            case 4:
                return "game"
        }
    }


    return (
        <div>
            <div className="flex container mx-auto justify-between my-10 text-center">
                <h1>Add Student....</h1>
                <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={() => { handleclick() }}> + Add Student</button>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto my-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Your Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Age
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((std) => {
                            return (<tr key={std.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {std.name}
                                </th>
                                <td className="px-6 py-4">
                                    {std.age}
                                </td>
                                <td className="px-6 py-4">
                                    {getcourse(Number(std.course))}
                                </td>
                                <td className="px-6 py-4 text-right flex gap-4">
                                    <Link to={`/edit-student/${std.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={()=>{
                                        handledelete(std.id)
                                    }}>delete</a>
                                </td>
                            </tr>)
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentTable