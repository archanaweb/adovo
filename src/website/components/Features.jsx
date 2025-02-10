import cardIcon from '../assest/images/income-investing.png'
import cardIcon1 from '../assest/images/money.png'
import cardIcon2 from '../assest/images/budgeting.png'

const Feature = ()=> {
    return (
        <div className="why-choose-us md:pb-10 pb-4">
            <div className="container mx-auto">
            <div className="sec-heading">
                <h5>Features for making money<span></span></h5>
            </div>
            <div className="choose-items">
                <div className="item">
                    <div className="choose-icon">
                        <img src={cardIcon} alt='feature icon' />
                    </div>
                    <h5>Highest payouts</h5>
                    <p>Earn way more than on other sites. It’s our goal to help you make as much money as possible.</p>
                </div>
                <div className="item">
                    <div className="choose-icon">
                        <img src={cardIcon1} alt='feature icon' />
                    </div>
                    <h5>Instant cashouts</h5>
                    <p>Need your earnings now? No problem. You can withdraw them almost instantly starting at $2,00.</p>
                </div>
                <div className="item">
                    <div className="choose-icon">
                        <img src={cardIcon2} alt='feature icon' />
                    </div>
                    <h5>Daily bonuses</h5>
                    <p>Climb the daily bonus ladder, reach the leaderboard, or start a streak to earn extra rewards, for free.</p>
                </div>
            </div>
    </div>
</div>
    )
}
export default Feature