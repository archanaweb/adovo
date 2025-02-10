import cardImg from '../assest/images/lite-game-bg.jpg'
import cardImg2 from '../assest/images/lite-apps-bg-2.jpg'
import cardImg3 from '../assest/images/lite-withdraw-bg.jpg'

const Waystoearn = ()=> {
    return (
        <div className="ways-to-earn">
        <div className="sec-heading">
            <h5>Best ways to earn<span></span></h5>
        </div>
        <div className="ways-items">
            <div className="item">
                <img src={cardImg} alt='cardImg'/>
                <h5>Play games</h5>
                <p>In order to attract more players, gaming companies want to pay you to play their games. Let’s play!</p>
                <div className="d-flex">
                    <p>Earn per game</p>
                    <span>$0.50 - $120</span>
                </div>
            </div>
            <div className="item">
                <img src={cardImg2} alt='cardImg'/>
                <h5>Complete offers</h5>
                <p>Get to know new companies by trying their apps while you earn money. It’s time to get paid for using apps!</p>
                <div className="d-flex">
                    <p>Earn per app</p>
                    <span>$1.00 - $75</span>
                </div>
            </div>
            <div className="item">
                <img src={cardImg3} alt='cardImg'/>
                <h5>Join surveys</h5>
                <p>Companies need your opinion to create better products and services. That’s why they pay for your feedback.</p>
                <div className="d-flex">
                    <p>Earn per 5-10 min survey</p>
                    <span>$1.00</span>
                </div>
            </div>
        </div>
   </div>
    )
}

export default Waystoearn