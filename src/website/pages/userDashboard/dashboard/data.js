
const auth  =  JSON.parse(localStorage.getItem('opinionUser'))

const partnersData = {
    "partners": [
      {
        "id": 1,
        "name": "Opinion Universe",
        "image": "https://opinionuniverse.com/s_assets/img/opinionuniverse_logo.png",
        "rating": "$300",
        "iframeUrl": `https://opinionuniverse.com/offerwall.php?pubid=3&sid=${auth?.id}&app_id=ID_666aaea5254cd1.79214671&apikey=[apikey]`
      },
      {                                                                                                                                                                                                                                                                                                                                                                                           
        "id": 2,
        "name": "Lootably",
        "image": "/offerwall/lootably-black.png",
        "rating": "$300",
        "iframeUrl": `https://wall.lootably.com/?placementID=clf9hx9950tyb011f5hh313k3&sid=${auth?.id}`
      },
      {
        "id": 3,
        "name": "Adgate",
        "image": "/offerwall/timewall-logo.png",
        "rating": "$300",
        "iframeUrl": `https://wall.adgaterewards.com/nquTqmk/${auth?.id}`
      },
      {
        "id": 4,
        "name": "Hang My Ads",
        "image": "/offerwall/torox.png",
        "rating": "$300",
        "iframeUrl": `https://opinionuniverse.com/offerwall.php?pubid=3&sid=${auth?.id}&app_id=ID_666aaea5254cd1.79214671&apikey=[apikey]`
      },
      {
        "id": 5,
        "name": "Notik",
        "image": "/offerwall/hangmyads.png",
        "rating": "$300",
        "iframeUrl": `https://opinionuniverse.com/offerwall.php?pubid=3&sid=${auth?.id}&app_id=ID_666aaea5254cd1.79214671&apikey=[apikey]`
      },
      {
        "id": 6,
        "name": "Adgem",
        "image": "/offerwall/AdGemGlow.jpg",
        "rating": "$300",
        "iframeUrl": `https://opinionuniverse.com/offerwall.php?pubid=3&sid=${auth?.id}&app_id=ID_666aaea5254cd1.79214671&apikey=[apikey]`
      },
      {
        "id": 7,
        "name": "Kiwi-wall",
        "image": "/offerwall/timewall-logo.png",
        "rating": "$300",
        "iframeUrl": `https://opinionuniverse.com/offerwall.php?pubid=3&sid=${auth?.id}&app_id=ID_666aaea5254cd1.79214671&apikey=[apikey]`
      },
      {
        "id": 8,
        "name": "Pollfish",
        "image": "https://opiniontrue.com/templates/53/img/offerwalls/pollfish.png",
        "rating": "$300",
        "iframeUrl": `https://opinionuniverse.com/offerwall.php?pubid=3&sid=${auth?.id}&app_id=ID_666aaea5254cd1.79214671&apikey=[apikey]`
      }
    ]
  }

  export default partnersData
  