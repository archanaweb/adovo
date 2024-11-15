import img from "../assest/images/cashoutImg.png"

const Usercashedout = ()=> {
    return (
        <>
        <div className="bg-slate-800 user-cashedout">
            <div className="box-wrapper">
                    <h5 className="p-4">This month users <span> cashed out </span></h5>
                <div className="flex p-4 pt-4 pb-6">
                    <div className="w-1/2">
                    <div className="flex justify-center items-center cashout-img">
                        <img src={img} alt="cashoutimg" />
                    </div>
                    </div>
                    <div className="w-1/2">
                    <div className="flex justify-center items-center gap-3 flex-col">
                        <div className="user-item">
                            <div className="flex justify-start items-center gap-4">
                            <div className="user-icon">A</div>
                            <p className="user-name">Monlix</p>
                            </div>
                            <span className="earn-points">Earned 0.036 points</span>
                            <span className="cashout-time">12 minutes ago</span>
                        </div>
                        <div className="user-item">
                            <div className="flex justify-start items-center gap-4">
                            <div className="user-icon">A</div>
                            <p className="user-name">Monlix</p>
                            </div>
                            <span className="earn-points">Earned 0.036 points</span>
                            <span className="cashout-time">12 minutes ago</span>
                        </div>
                        <div className="user-item">
                            <div className="flex justify-start items-center gap-4">
                            <div className="user-icon">A</div>
                            <p className="user-name">Monlix</p>
                            </div>
                            <span className="earn-points">Earned 0.036 points</span>
                            <span className="cashout-time">12 minutes ago</span>
                        </div>
                        <div className="user-item">
                            <div className="flex justify-start items-center gap-4">
                            <div className="user-icon">A</div>
                            <p className="user-name">Monlix</p>
                            </div>
                            <span className="earn-points">Earned 0.036 points</span>
                            <span className="cashout-time">12 minutes ago</span>
                        </div>
                        <div className="user-item">
                            <div className="flex justify-start items-center gap-4">
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
        </>
    )
}

export default Usercashedout