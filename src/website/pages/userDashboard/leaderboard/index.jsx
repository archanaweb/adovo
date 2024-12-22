import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTopUserEarned } from "../../../../redux/user/walletSlice"

const LeaderBoard = () => {
    const dispatch = useDispatch()
    const earnedUser = useSelector((state)=> state.wallet.topUserEarnedList)

    useEffect(()=> {
        dispatch(fetchTopUserEarned())
        console.log('earnedUser', earnedUser)
    },[])
    return (
        <>
            <div className="cashoutsec text-left">
                <div className="flex gap-6">
                    <div className="w-full">
                        <h5 className='text-2xl text-white text-left pb-6 font-bold'>Leaderboard</h5>
                        <div className="px-4 sm:px-8">
                                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                                        <table className="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                        Rank
                                                    </th>
                                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                        User
                                                    </th>
                                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                       Earning
                                                    </th>
                                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                        Price
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className="flex">
                                                            <div className="flex-shrink-0 w-10 h-10">
                                                                <img
                                                                    className="w-full h-full rounded-full"
                                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="ml-3">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    Molly Sanders
                                                                </p>
                                                                <p className="text-gray-600 whitespace-no-wrap">000004</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">$20,000</p>
                                                        <p className="text-gray-600 whitespace-no-wrap">USD</p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                                                        <p className="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                            <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                            <span className="relative">Paid</span>
                                                        </span>
                                                    </td>
                                                </tr>
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