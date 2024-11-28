const ResetPassword = () => {
    return (
        <>
    <div className="bg-slate-800">
    <div className="py-10 md:px-10 px-4 container mx-auto">
    <div className="verify-otp text-center">
                <h2 className="font-bold md:text-4xl text-2xl text-gray-200 gradient-text">Verification</h2>
                <p className="text-gray-200">Please enter the OTP sent to your email address</p>
            </div>
    <div className="md:w-2/4 w-full mx-auto pt-4">
    <div className="registration-form py-8 px-8 mx-auto bg-slate-700 rounded shadow text-left">
      <form onSubmit={handleOtp} className="mb-3">
        <div className="form-group">
        <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#252837] border-gray-700 text-white"
          type="number"
          placeholder="otp" 
          onChange={(e) =>
            setFormData({ ...formData, otp: e.target.value })
          }
        />
        </div>
        <div className="forgetPass flex justify-center pt-4">
          <button className="btn btn-primary bg-[#d13d5e] p-3 rounded-md text-white w-1/5" type="submit">Verify OTP</button>
       </div>
        <div className="forgetPass flex justify-center pt-2 items-center">
        <p className="text-gray-200 text-center">Did't receive the verification OTP? <span onClick={handleResend} className="text-[#d13d5e] hover:underline cursor-pointer">Resend again</span></p>
        {/* <button type="button" className="btn btn-outline-secondary" ><i className="fa-solid fa-rotate-right"></i> </button> */}
       </div>
      </form>
      </div>
    </div>
    </div>
    </div>
        </>
    )
}
export default ResetPassword;