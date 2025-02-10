import { IoCloseSharp } from "react-icons/io5";
const ChangePasswordModal = ({isOpenModal,setIsOpenModal})=> {
    const auth = JSON.parse(localStorage.getItem('opinionUser'))

    const haldleCloseModal = (e)=> {
        setIsOpenModal(false)
    }
    return (
        <>
        <div className={`offermodal modal ${isOpenModal ? 'show-modal' : ''}`}>
            <div className="chnagepass-modal modal-content">
            <div className='flex justify-between items-center border-b border-[#28354c] pb-3'>
                <h5 className='text-2xl text-white'>Change Password</h5>
                    <span className="close-button" onClick={haldleCloseModal}><IoCloseSharp /></span>
                </div>
        <div className="w-full p-2">
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div className='text-left'>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-200">Password</label>
                  <input type="password" name="password" id="password" className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required="" />
              </div>
              <div className='text-left'>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-200">New Password</label>
                  <input type="password" name="newPassword" id="newPassword" placeholder="••••••••" className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div className='text-left'>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-200">Confirm password</label>
                  <input type="confirm-password" name="confirm_password" id="confirm_password" placeholder="••••••••" className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div className="forgetPass flex justify-center pt-4">
          <button className="btn btn-primary bg-[#d13d5e] p-3 rounded-md text-white w-full" type="submit">Change Password </button>
       </div>
          </form>
      </div>
            </div>
        </div>
        </>
    )
}
export default ChangePasswordModal