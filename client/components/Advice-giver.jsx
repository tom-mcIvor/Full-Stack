import React, { useEffect, useState } from 'react'
import { AdviceGiver } from '../services/advice-api'



export default function Advice() {

  const [advice, setAdvice] = useState(null)


  useEffect(() => {
    const setup = async () => {
      setAdvice(await AdviceGiver())
    }
    setup()
  }, [])

  return (
    <>
      <p>
        Advice
      </p>
      <div>
        {advice}
      </div>
    </>
  )

}


