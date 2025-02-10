import cardImg from '../assest/images/dungeon-hunter.jpg'

const Howitwork = ()=> {

    return (
        <>
        <div className="how-it-works py-5 md:pt-14 px-2">
        <div className="container mx-auto">
        <div className="sec-heading">
            <h5>How to earn within minutes?</h5>
            <p>Follow these steps</p>
        </div>
        <div className="steps-sec">
            <div className="items">
                <div className="img">
                    <img src={cardImg} alt='gameImg' />
                    <span>01</span>
                </div>
                <div>
                    <h5>Choose an offer</h5>
                    <p>Take your pick from the tasks on the earn page. We list the best offers from companies who want to advertise their apps,
                    surveys, and products.</p>
                </div>
            </div>
            <div className="items">
                <div className="img">
                    <img src={cardImg} alt='gameImg' />
                    <span>02</span>
                </div>
                <div>
                    <h5>Complete the offer</h5>
                    <p>Most offers are very simple and have already earned money for thousands of people. Most offers take around 5-10 minutes
                    to complete.</p>
                </div>
            </div>
            <div className="items">
                <div className="img">
                    <img src={cardImg} alt='gameImg' />
                    <span>03</span>
                </div>
                <div>
                    <h5>Get paid</h5>
                    <p>For each task you complete, you’ll be rewarded with coins: 1000 coins = $1,00. Cashout the coins and get your hands on
                    your free cash!</p>
                </div>
            </div>
        </div>
        <div className="explore-btn">
            <button>Start earning now</button>
        </div>
        </div>
   </div>
        </>
    )
}

export default Howitwork