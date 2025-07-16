import { useReducer } from "react"

let initialState = {
    users: [
        { id: 1, name: "suraj" },
        { id: 2, name: "Kaushal" },
        { id: 3, name: "Dev" }
    ]
}
let reducer = (state, action) => {
    switch (action.type) {
        case "CLEAR_USERS":
            return { users: [] }
        case "DELETE" :
            let {id} = action.payload
            let newUser =  state.users.filter((user) => {
                return user.id !== id
            })

            return {users : newUser}
    }
}



const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state);


    const handleClear = () => {
        dispatch({ type: "CLEAR_USERS" })
    }
    const handleDelete = (id) => {
        dispatch({type: "DELETE" , payload : {id}})
    }


    return (
        <div>

            {
                state.users.map((user) => {
                    return <div key={user.id}>
                        <p>{user.name}</p>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </div>
                })
            }
            <button  onClick={handleClear}>Clear All</button>
        </div>
    )
}

export default App