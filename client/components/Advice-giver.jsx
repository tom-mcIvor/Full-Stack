import React, { useEffect, useState } from 'react'
import { AdviceGiver } from '../apis/advice-api'


export default function Advice() {

  const [advice, setAdvice] = useState(null)

  useEffect(() => {

    setAdvice(AdviceGiver())
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