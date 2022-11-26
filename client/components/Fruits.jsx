import React, { useEffect, useState } from 'react'
import { getFruits } from '../services/fruits-api'



export default function Fruits() {
  // Ready up React state
  const [fruits, setFruit] = useState(null)

  // Hydrate React State
  useEffect(() => {
    const setup = async () => {

      // setAdvice(await AdviceGiver())
      setFruit(await getFruits())
    }

    setup()
  }, [])

  const fruitElements = fruits && fruits.map(fruit => <li key={fruit.id}>Fruit: {fruit.name}</li>)
    || <p>Loading...</p>

  return (

    <>
      <div>
        <p>Fruit:</p>
        <ul>
          {fruitElements}
        </ul>
      </div>
    </>
  )

}


