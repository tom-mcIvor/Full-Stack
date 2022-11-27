import React, { useEffect, useState } from 'react'
import { getFruits, createFruit, deleteFruit, updateFruit } from '../services/fruits-api'

import Advice from './Advice-giver'
import Fruits from './Fruits'
import FruitEditor from './FruitEditor'
import Files from './Files'

function App() {
  const [fruits, setFruits] = useState(null)

  // Hydrate React State
  useEffect(() => {
    const setup = async () => {
      setFruits(await getFruits())
    }

    setup()
  }, [])

  const refreshFruits = () => {
    getFruits()
      .then((fruits) => setFruits(fruits))
      .catch(console.error)
  }

  const deleteAnRefresh = (fruit) => {
    deleteFruit(fruit)
    refreshFruits()
  }

  const updateAndRefresh = (fruit) => {
    updateFruit(fruit)
    refreshFruits()
  }

  const fruitCreated = (fruit) => {
    createFruit(fruit)
    refreshFruits()
  }

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <Fruits fruits={fruits} update={updateAndRefresh} delete={deleteAnRefresh} />
        <hr />
        <FruitEditor fruitCreated={fruitCreated} />
        <hr />
        <Advice />
        <hr />
        <Files />
      </div>
    </>
  )
}

export default App
