import { useEffect, useState } from "react"

const App = () => {
    const [users, setUser] = useState([]);

    const URL = "http://localhost:5500/users"
    useEffect(()=>{
        const featchuser = async ()=>{
            const res = await fetch(URL)
            const data = await res.json()
            setUser(data)
        }
        featchuser()
    }, [])


  return (
    <div>
        {
            users.map((user)=>{
                return(
                    <div>
                        <h1>{user.name}</h1>
                        <h3>age :- {user.age}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}

export default App