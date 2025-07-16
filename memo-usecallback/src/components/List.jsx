import { memo } from "react";

const List = ({ users, handledelete }) => {
    console.log(users);
    return (
        <div>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <div>
                            <button onClick={()=>{
                                handledelete(user.id)
                            }}>delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default memo(List)