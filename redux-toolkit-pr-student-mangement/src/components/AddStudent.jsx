import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addstudent } from "../features/students/studentSlice"

const AddStudent = () => {
    const [input, setInput] = useState({
        name:"",
        age:"",
        course:""
    })

    const naviget = useNavigate()
    const dispatch = useDispatch()

    const handlechange = (e)=>{
        setInput({...input, [e.target.id]: e.target.value})
        console.log(input);
    }

    const handlesubmit = (e)=>{
       e.preventDefault()
        dispatch(addstudent(input));
        naviget("/")
    }

    return (
        <div className="container mx-auto h-screen flex items-center justify-center">
            <form className="max-w-sm w-full dark:bg-gray-900 p-10 rounded-lg shadow-md" onSubmit={handlesubmit}>
                <h1 className="text-3xl text-center text-white pb-8">Student Management</h1>

                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your Name
                    </label>
                    <input
                    value={input.name}
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com" onChange={handlechange}
                        required
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your Age
                    </label>
                    <input
                        type="number"
                        id="age"
                        value={input.age}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   onChange={handlechange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select id="course" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" value={input.course} onChange={handlechange}>
                        <option value="">Choose a Course</option>
                        <option value="1">Full Stack</option>
                        <option value="2">UI/UX</option>
                        <option value="3">AI/ML</option>
                        <option value="4">Game</option>
                    </select>
                </div>


                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                               focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                               text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                               dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddStudent
