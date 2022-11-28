import React, { useEffect, useState } from 'react'
import { getFruits, createFruit, deleteFruit, updateFruit } from '../services/fruits-api'

import { useDispatch, useSelector } from 'react-redux'

import { fetchFruit, pushFruit } from '../actions'

import Advice from './Advice-giver'
import Fruits from './Fruits'
import FruitEditor from './FruitEditor'
import Files from './Files'

function App() {

  const fruits = useSelector((state) => state.fruits)
  const dispatch = useDispatch()
  console.log(fruits);

  useEffect(() => {
    dispatch(fetchFruit())

  }, [])

  const refreshFruits = () => {
    dispatch(fetchFruit())
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
        <Advice />
        <hr />
        <Files />
      </div>
    </>
  )
}

export default App
