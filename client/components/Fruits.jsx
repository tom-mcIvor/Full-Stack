import React, { useEffect, useState } from 'react'
import { getFruits, deleteFruit, updateFruit } from '../services/fruits-api'

export default function Fruits() {
  // Ready up React state
  const [fruits, setFruits] = useState(null)

  // Hydrate React State
  useEffect(() => {
    const setup = async () => {

      // setAdvice(await AdviceGiver())
      setFruits(await getFruits())
    }

    setup()
  }, [])

  const deleteAnRefresh = (fruit) => {
    deleteFruit(fruit)
    getFruits()
      .then((fruits) => setFruits(fruits))
      .catch(console.error)
  }

  const updateAndRefresh = (fruit) => {
    updateFruit(fruit)
    getFruits()
      .then((fruits) => setFruits(fruits))
      .catch(console.error)
  }

  const updateFruits = (fruit) => {
    setFruits([
      ...fruits.filter(f => f.id !== fruit.id),
      fruit
    ])
  }

  const fruitElements = this.props.fruits && this.props.fruits.map(fruit => {
    return <li key={fruit.id}>
      {fruit.id}:
      <input value={fruit.name} onChange={e => updateFruits({
        ...fruit,
        name: e.target.value
      })}></input>
      <button onClick={() => updateAndRefresh(fruit)}>save</button>
      <button onClick={() => deleteAnRefresh(fruit)}>delete</button>
    </li>
  })
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


