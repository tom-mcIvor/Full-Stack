import React, { useState, useEffect } from 'react'

export default function Fruits(props) {
  const [fruits, setFruits] = useState(props.fruits)

  useEffect(() => {
    setFruits(props.fruits)
  }, [props.fruits])

  const updateFruitName = (fruitId, newName) => {
    setFruits((prevState) => {
      return prevState.map((fruit) => {
        if (fruit.id == fruitId) {
          return { ...fruit, name: newName }
        }

        return fruit
      })
    })
  }

  const fruitElements = (fruits &&
    fruits.map((fruit) => {
      return (
        <li key={fruit.id}>
          {fruit.id}:<input value={fruit.name} onChange={(e) => { updateFruitName(fruit.id, e.target.value) }}></input>
          <button onClick={() => props.update(fruit)}>save</button>
          <button onClick={() => props.delete(fruit)}>delete</button>
        </li>
      )
    })) || <p>Loading...</p>

  return (
    <>
      <div>
        <p>Fruit:</p>
        <ul>{fruitElements}</ul>
      </div>
    </>
  )
}
