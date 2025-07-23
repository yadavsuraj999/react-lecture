import { useEffect, useState } from "react";

const App = () => {
    const [users, setUsers] = useState([]);
    const [input, setInput] = useState({ name: "", age: "" });

    const URL = "http://localhost:5000/users";

    const fetchUser = async () => {
        const res = await fetch(URL);
        const data = await res.json();
        setUsers(data);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const handlechange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(input)
        });
        setInput({ name: "", age: "" });
       fetchUser();
    };

    const handledelete = async (id) => {
        await fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        });
        fetchUser();
    };

    const handleedit = async (id) => {
        
        await fetch(`http://localhost:5000/users/${id}`, {
            method: "PUT"
        })
        fetchUser()
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input
                    id="name"
                    type="text"
                    placeholder="Enter Your Name"
                    value={input.name}
                    onChange={handlechange}
                />
                <input
                    id="age"
                    type="text"
                    placeholder="Enter Your age"
                    value={input.age}
                    onChange={handlechange}
                />
                <button>submit</button>
            </form>

            {users.map((user) => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <h3>age :- {user.age}</h3>
                    <button onClick={() => handledelete(user.id)}>❌</button>
                    <button onClick={()=> handleedit(user.id)}>✏️</button>
                </div>
            ))}
        </div>
    );
};

export default App;
