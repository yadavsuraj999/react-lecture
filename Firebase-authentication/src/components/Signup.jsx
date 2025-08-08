import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useState } from "react"
import { app } from "../config/firebase"

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const Signup = () => {

    const [input, setInput] = useState({
        email: "", password: ""
    })

    const handlechange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }
    console.log(input);

    const handlesubmit = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, input.email, input.password)
        .then((user)=>{
            console.log(user);
        }).catch((err) => {
            console.log(alert(err.code));
        })

        setInput({
            email: "", password: ""
        })
    }

    const handlegoogle = ()=>{
        signInWithPopup(auth, googleProvider)
        .then((user)=>{
            console.log(user)
        }).catch((err)=>{
            console.log(alert(err.code));
        })
    }


    return (
        <div className="flex h-screen items-center bg-black">
            <form className="max-w-sm border px-10 py-8 bg-teal-800 rounded-3xl mx-auto" onSubmit={handlesubmit}>
                <div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" value={input.email} className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required onChange={handlechange} />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" value={input.password} className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-200dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handlechange} />
                    </div>
                    <div className="flex gap-3">
                        <button type="submit" className="text-white bg-black hover:bg-black-700  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-700 ">Sign Up</button>
                        <button type="submit" className="text-white bg-black hover:bg-black-700  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-700 "
                         onClick={handlegoogle}>Sign Up with google</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup