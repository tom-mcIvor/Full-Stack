import React, { useEffect, useState } from 'react'
import { AdviceGiver } from '../services/advice-api'



export default function Advice({children}) {

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
        {children}
      </div>
    </>
  )

}


