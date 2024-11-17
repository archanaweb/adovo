import img from "../assest/images/cashoutImg.png"

const Usercashedout = ()=> {
    return (
        <>
        <div className="user-cashedout pb-14 pt-2">
            <div className="container mx-auto">
            <div className="box-wrapper">
                    <h5 className="p-4">This month users <span> cashed out </span></h5>
                <div className="flex md:flex-row flex-col md:p-4 md:pt-4 pb-6 gap-2">
                    <div className="md:w-1/2 w-full">
                    <div className="flex justify-center items-center cashout-img">
                        <img src={img} alt="cashoutimg" />
                    </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                    <div className="flex justify-center items-center gap-3 flex-col">
                        <div className="user-item">
                            <div className="flex justify-start items-center md:gap-4 gap-2">
                                <div className="user-icon">A</div>
                                <p className="user-name">Monlix</p>
                            </div>
                            <span className="earn-points">Earned 0.036 points</span>
                            <span className="cashout-time">12 minutes ago</span>
                        </div>
                        <div className="user-item">
                            <div className="flex justify-start items-center md:gap-4 gap-2">
                            <div className="user-icon">A</div>
                            <p className="user-name">Monlix</p>
                            </div>
                            <span className="earn-points">Earned 0.036 points</span>
                            <span className="cashout-time">12 minutes ago</span>
                        </div>
                        <div className="user-item">
                            <div className="flex justify-start items-center md:gap-4 gap-2">
                            <div className="user-icon">A</div>
                            <p className="user-name">Monlix</p>
                            </div>
                            <span className="earn-points">Earned 0.036 points</span>
                            <span className="cashout-time">12 minutes ago</span>
                        </div>
                        <div className="user-item">
                            <div className="flex justify-start items-center md:gap-4 gap-2">
                            <div className="user-icon">A</div>
                            <p className="user-name">Monlix</p>
                            </div>
                            <span className="earn-points">Earned 0.036 points</span>
                            <span className="cashout-time">12 minutes ago</span>
                        </div>
                        <div className="user-item">
                            <div className="flex justify-start items-center md:gap-4 gap-2">
                            <div className="user-icon">A</div>
                            <p className="user-name">Monlix</p>
                            </div>
                            <span className="earn-points">Earned 0.036 points</span>
                            <span className="cashout-time">12 minutes ago</span>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Usercashedout