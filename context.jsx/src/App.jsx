import { createContext, useState } from "react"
import Navlogo from "./components/Navlogo"

export const AppContext = createContext()

const App = () => {

    const [user, setUser] = useState({name: "suraj"})

    const handlelogout = ()=>{
        setUser({})
    }

    return (
        <div>
            <AppContext.Provider value={{user, handlelogout}}>
                <Navlogo />
            </AppContext.Provider>
        </div>
    )
}

export default App