import { Link, useParams } from "react-router-dom";

const Usredetail = () => {
    const useparam = useParams()

    const fullDetail = JSON.parse(localStorage.getItem("usersinfo"))
    console.log(fullDetail);

    const Currentuser = fullDetail.find((user) => {
        return useparam.id == user.id
    })

    console.log(Currentuser);
    return (
        <div>Usredetail - {useparam.id}
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div class="p-5">
                    <p>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Currentuser.name}</h5>
                    </p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{Currentuser.role}</p>
                    <button href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Usredetail