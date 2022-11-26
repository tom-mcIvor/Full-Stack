import request from 'superagent'

export function AdviceGiver() {
  return request
    .get('https://api.adviceslip.com/advice')

    .then((res) => {
      // console.log('character api', res.body)
      const data = JSON.parse(res.text)
      console.log(data)
      return res.body
    })
}
