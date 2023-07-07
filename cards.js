const deckURL = 'https://www.deckofcardsapi.com/api/'

axios
  .get(`${deckURL}deck/new/draw/?count=1`)
  .then((response) => {
    console.log(
      `${response.data.cards[0].value} of ${response.data.cards[0].suit}`
    )
  })
  .catch((e) => console.log(e))

let cards = []

axios
  .get(`${deckURL}deck/new/`)
  .then((response) => {
    // get a new deck with a deck_id
    deckId = response.data.deck_id
    return axios.get(`${deckURL}deck/${deckId}/draw/?count=1`)
  })
  .then((response) => {
    // draw first card from the deck
    const card1 = `${response.data.cards[0].value} of ${response.data.cards[0].suit}`
    cards.push(card1)
    return axios.get(`${deckURL}deck/${deckId}/draw/?count=1`)
  })
  .then((response) => {
    const card2 = `${response.data.cards[0].value} of ${response.data.cards[0].suit}`
    cards.push(card2)
    for (let card of cards) {
      console.log(card)
    }
  })
  .catch((e) => console.log(e))
