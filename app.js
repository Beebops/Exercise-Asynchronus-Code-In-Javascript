const baseURL = 'http://numbersapi.com/'

let trivia42 = axios
  .get(`${baseURL}42/trivia?json`)
  .then((response) => {
    const randomFact = document.querySelector('#random-fact')
    randomFact.textContent = response.data.text
  })
  .catch((e) => console.log(e))

axios
  .get(`${baseURL}7,11,13`)
  .then((response) => {
    const seven = document.querySelector('#seven')
    const eleven = document.querySelector('#eleven')
    const thirteen = document.querySelector('#thirteen')

    seven.textContent = response.data['7']
    eleven.textContent = response.data['11']
    thirteen.textContent = response.data['13']
  })
  .catch((e) => console.log(e))

let fourNumberFactsPromises = []
const num9Facts = document.querySelector('#number9-facts')

for (let i = 1; i < 5; i++) {
  fourNumberFactsPromises.push(axios.get(`${baseURL}9/trivia?json`))
}

Promise.all(fourNumberFactsPromises)
  .then((numArr) => {
    for (let i = 0; i < numArr.length; i++) {
      const li = document.createElement('li')
      li.textContent = numArr[i].data.text
      num9Facts.appendChild(li)
    }
  })
  .catch((e) => console.log(e))
