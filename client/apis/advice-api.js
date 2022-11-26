import request from 'superagent'

export function AdviceGiver() {
  // const hello = JSON.parse('{something: "I am a string"}')
  // console.log(hello.something)
  return request
    .get('https://api.adviceslip.com/advice')

    .then((res) => {
      // console.log('character api', res.body)
      const data = JSON.parse(res.text)
      return data.slip.advice
    })
}
export function fruit() {
  // const hello = JSON.parse('{something: "I am a string"}')
  // console.log(hello.something)
  return request
    .post('http://localhost:3000/api/v1/fruits/banana')

    .then((res) => {
      // console.log('character api', res.body)
      console.log(res.body)
      // const data = JSON.parse(res.text)
      // return data.slip.advice
    })
}
