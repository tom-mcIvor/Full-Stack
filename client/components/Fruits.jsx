import React from 'react'

export default function Fruits(props) {
  const fruitElements = props.fruits && props.fruits.map(fruit => {
    return <li key={fruit.id}>
      {fruit.id}:
      <input value={fruit.name} onChange={e => props.updateFruitName({
        ...fruit,
        name: e.target.value
      })}></input>
      <button onClick={() => props.update(fruit)}>save</button>
      <button onClick={() => props.delete(fruit)}>delete</button>
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


