import cardImg from '../assest/images/lite-game-bg.jpg'

const Waystoearn = ()=> {
    return (
        <div class="bg-slate-800 ways-to-earn">
        <div class="sec-heading">
            <h5>Best ways to <span>earn</span></h5>
        </div>
        <div class="ways-items">
            <div class="item">
                <img src={cardImg} alt='cardImg'/>
                <h5>Play games</h5>
                <p>In order to attract more players, gaming companies want to pay you to play their games. Let’s play!</p>
                <div class="d-flex">
                    <p>Earn per game</p>
                    <span>$0.50 - $120</span>
                </div>
            </div>
            <div class="item">
                <img src={cardImg} alt='cardImg'/>
                <h5>Play games</h5>
                <p>In order to attract more players, gaming companies want to pay you to play their games. Let’s play!</p>
                <div class="d-flex">
                    <p>Earn per game</p>
                    <span>$0.50 - $120</span>
                </div>
            </div>
            <div class="item">
                <img src={cardImg} alt='cardImg'/>
                <h5>Play games</h5>
                <p>In order to attract more players, gaming companies want to pay you to play their games. Let’s play!</p>
                <div class="d-flex">
                    <p>Earn per game</p>
                    <span>$0.50 - $120</span>
                </div>
            </div>
        </div>
   </div>
    )
}

export default Waystoearn