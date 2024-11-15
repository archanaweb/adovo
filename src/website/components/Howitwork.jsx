import cardImg from '../assest/images/dungeon-hunter.jpg'

const Howitwork = ()=> {

    return (
        <>
        <div class="how-it-works pt-5">
        <div class="sec-heading">
            <h5>How to earn within minutes?</h5>
            <p>Follow these steps</p>
        </div>
        <div class="steps-sec">
            <div class="items">
                <div class="img">
                    <img src={cardImg} alt='gameImg' />
                    <span>01</span>
                </div>
                <div>
                    <h5>Choose an offer</h5>
                    <p>Take your pick from the tasks on the earn page. We list the best offers from companies who want to advertise their apps,
                    surveys, and products.</p>
                </div>
            </div>
            <div class="items">
                <div class="img">
                    <img src={cardImg} alt='gameImg' />
                    <span>02</span>
                </div>
                <div>
                    <h5>Complete the offer</h5>
                    <p>Most offers are very simple and have already earned money for thousands of people. Most offers take around 5-10 minutes
                    to complete.</p>
                </div>
            </div>
            <div class="items">
                <div class="img">
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
        <div class="explore-btn">
            <button>Start earning now</button>
        </div>
   </div>
        </>
    )
}

export default Howitwork