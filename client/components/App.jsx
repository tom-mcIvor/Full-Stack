import React, { useEffect, useState } from 'react'
import { getFruits, createFruit, deleteFruit, updateFruit } from '../services/fruits-api'

import { useDispatch, useSelector } from 'react-redux'

import { fetchFruit, pushFruit, delFruit } from '../actions'

import Advice from './Advice-giver'
import Fruits from './Fruits'
import FruitEditor from './FruitEditor'
import Files from './Files'

function App() {

  const fruits = useSelector((state) => state.fruits)
  const dispatch = useDispatch()
  console.log('I run every time');
  const [weatherData, setWeatherData] = useState()
  const [number, setNumber] = useState(0)

  useEffect(() => {
    //setWeatherData({'tomorrow' : 'Sunny'})
    console.log('i run once')
  }, [])


  useEffect(() => {
    dispatch(fetchFruit())
  }, [])

  useEffect(() => {
    console.log('Number has changed to' + number)
  }, [number])

  const refreshFruits = () => {
    dispatch(fetchFruit())
  }

  const deleteAnRefresh = (fruit) => {

    dispatch(delFruit(fruit))
    // refreshFruits()
  }

  const updateAndRefresh = (fruit) => {
    updateFruit(fruit)
    refreshFruits()
  }

  const fruitCreated = (fruit) => {
    dispatch(pushFruit(fruit))
    // refreshFruits()
  }

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <Fruits fruits={fruits} update={updateAndRefresh} delete={deleteAnRefresh} />
        <hr />
        <FruitEditor fruitCreated={fruitCreated} />
        <hr />
        <div>
        </div>
        <button onClick={() => setNumber((intialState) => intialState + 1)}>
          Click me to add to number
        </button>
        <Advice>
          <h1>{weatherData?.tomorrow}</h1>
        </Advice>
        <hr />
        <Files />
      </div>
    </>
  )
}

export default App
