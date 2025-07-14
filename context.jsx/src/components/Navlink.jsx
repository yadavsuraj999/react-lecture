import { useContext } from "react"
import { AppContext } from "../App"

const Navlink = () => {
    const {user, handlelogout} = useContext(AppContext)
    console.log(user, handlelogout);
  return (
    <div className="d-flex gap-5 justify-content-center align-content-center py-2">
        <ul className="d-flex list-unstyled gap-5 mb-0 ">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>{user.name}</li>
        </ul>
        <div>
            <button onClick={handlelogout} className="btn btn-danger">Logout</button>
        </div>
    </div>
  )
}

export default Navlink