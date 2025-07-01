import { Link, useParams } from "react-router-dom"

const Users = () => {
    const UserDetail = [
        { id: 1, name: "suraj", role: "desi-devloper" },
        { id: 2, name: "Kaushal", role: "videsi-devloper" },
        { id: 3, name: "Dev", role: "Korean-devloper" },
    ]


    localStorage.setItem("usersinfo", JSON.stringify(UserDetail))

    return (
        <div>
            <div className=" my-5 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            UserDetail.map((user) => {
                                return <tr key={user.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {user.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.role}
                                    </td>

                                    <td className="px-6 py-4">
                                        <Link to={`/user/${user.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit
                                        </Link>
                                    </td>
                                </tr>
                            }) 
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users