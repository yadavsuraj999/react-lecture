import { useCallback, useState } from "react"
import List from "./components/List";

const App = () => {

    const [count, setCount] = useState(0);

    const handleclick = () => {
        setCount(count + 1)
    }


    const [users, setUsers] = useState([
        { id: 1, name: "suraj" },
        { id: 2, name: "Kaushal" },
        { id: 3, name: "Dev" }
    ])

    const handledelete = useCallback((id) => {
        const newuser = users.filter((user) => {
            return user.id != id;
        })
        setUsers(newuser)
    }, [users])


    return (
        <div>
            <h1>Count: {count}</h1>
            <button className="btn btn-primary" onClick={handleclick}>Increment</button>

            <List users={users} handledelete={handledelete} />
        </div>
    )
}

export default App