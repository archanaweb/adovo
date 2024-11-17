import cardIcon from '../assest/images/paying.png'

const Feature = ()=> {
    return (
        <div class="why-choose-us md:pb-10 pb-4">
            <div class="container mx-auto">
            <div class="sec-heading">
                <h5>Features for making <span>money</span></h5>
            </div>
            <div class="choose-items">
                <div class="item">
                    <div class="choose-icon">
                        <img src={cardIcon} alt='feature icon' />
                    </div>
                    <h5>Highest payouts</h5>
                    <p>Earn way more than on other sites. It’s our goal to help you make as much money as possible.</p>
                </div>
                <div class="item">
                    <div class="choose-icon">
                        <img src={cardIcon} alt='feature icon' />
                    </div>
                    <h5>Instant cashouts</h5>
                    <p>Need your earnings now? No problem. You can withdraw them almost instantly starting at $2,00.</p>
                </div>
                <div class="item">
                    <div class="choose-icon">
                        <img src={cardIcon} alt='feature icon' />
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