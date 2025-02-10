import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTopUserEarned } from "../../../../redux/user/walletSlice"
import { use } from "react"

const LeaderBoard = () => {
    const dispatch = useDispatch()
    const earnedUser = useSelector((state)=> state.wallet.topUserEarnedList)

    useEffect(()=> {
        dispatch(fetchTopUserEarned())
        console.log('earnedUser', earnedUser)
    },[])
    return (
        <>
            <div className="cashoutsec text-left md:p-6 p-4">
                <div className="flex gap-6">
                    <div className="w-full">
                        <h5 className='text-2xl text-white text-left pb-6 font-bold'>Leaderboard</h5>
                        <div className="px-2 sm:px-8">
                                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto bg-[#111827]">
                                    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden leaderboard-table">
                                        <table className="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                    User
                                                    </th>
                                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                        Amount
                                                    </th>
                                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                       Earning
                                                    </th>
                                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                        Point
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {earnedUser?.map((user, index)=> <tr key={user?.userId}>
                                                    <td className="md:px-5 md:py-5 px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                        <div className="flex">
                                                            <div className="flex-shrink-0 w-5 h-5">
                                                                <span>{index + 1}</span>
                                                            </div>
                                                            <div className="ml-1">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                   {user?.userName}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="md:px-5 md:py-5 px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">${user?.totalAmount}</p>
                                                    </td>
                                                    <td className="md:px-5 md:py-5 px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">${user?.totalEarnings}</p>
                                                    </td>
                                                    <td className="md:px-5 md:py-5 px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{user?.totalPoint}</p>
                                                    </td>
                                                </tr> )}
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
        </div >
        </>
    )
}

export default LeaderBoard