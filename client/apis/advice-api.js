import request from 'superagent'

export function AdviceGiver() {
  // const hello = JSON.parse('{something: "I am a string"}')
  // console.log(hello.something)
  return request
    .get('https://api.adviceslip.com/advice')

    .then((res) => {
      // console.log('character api', res.body)
      const data = JSON.parse(res.text)
      console.log(data.slip.advice)
      return res.body
    })
}
