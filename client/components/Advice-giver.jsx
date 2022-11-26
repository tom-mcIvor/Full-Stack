import React, { useEffect } from 'react'
import { AdviceGiver } from '../apis/advice-api'


export default function Advice() {
  useEffect(() => {
    AdviceGiver()
  }, [])

  return (
    <div>
       hello
    </div>
  )

}