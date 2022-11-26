import request from 'superagent'

const advice_api = 'https://api.adviceslip.com/'

export function AdviceGiver() {
  // const hello = JSON.parse('{something: "I am a string"}')
  // console.log(hello.something)
  return request
    .get(`${advice_api}advice`)

    .then((res) => {
      // console.log('character api', res.body)
      const data = JSON.parse(res.text)
      return data.slip.advice
    })
}
