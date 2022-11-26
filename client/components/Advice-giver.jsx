import React, { useEffect, useState } from 'react'
import { AdviceGiver, fruit } from '../apis/advice-api'



export default function Advice() {

  const [advice, setAdvice] = useState(null)


  useEffect(() => {
    const doStuff = async () => {
      fruit()
      setAdvice(await AdviceGiver())
    }
    doStuff()
  }, [])

  return (
    <>
      <div>
        hello
      </div>
      <div>
        {advice}
      </div>
    </>
  )

}


