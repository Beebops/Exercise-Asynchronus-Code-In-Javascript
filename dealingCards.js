const deckURL = 'https://www.deckofcardsapi.com/api/'
const cardDiv = document.querySelector('#card-table')
const drawBtn = document.querySelector('#draw-btn')
let deckId = null

axios.get(`${deckURL}deck/new/shuffle/`).then((response) => {
  deckId = response.data.deck_id
})

function draw() {
  axios
    .get(`${deckURL}deck/${deckId}/draw/`)
    .then((response) => {
      let cardURL = response.data.cards[0].image
      const cardImg = document.createElement('img')
      cardImg.src = cardURL
      cardDiv.appendChild(cardImg)
      if (response.data.remaining === 0) {
        drawBtn.removeEventListener('click', draw)
      }
    })
    .catch((err) => console.log(err))
}

drawBtn.addEventListener('click', draw)
