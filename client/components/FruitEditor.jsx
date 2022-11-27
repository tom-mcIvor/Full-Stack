import React, { useState } from 'react'
import { createFruit } from '../services/fruits-api'

export default function FruitEditor(props) {
  // Ready up React state
  const [fruit, setFruit] = useState({ name: "", description: "" })

  const handleSubmit = e => {
    e.preventDefault();
    createFruit(fruit);
    props.fruitCreated(fruit);
    console.log('submitting fruit', fruit)
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <p>Create Editor:</p>
          <ul>
            <li>
              Name:
              <input
                value={fruit.name}
                onChange={e => setFruit({
                  ...fruit,
                  name: e.target.value
                })}
              ></input>
            </li>
            <li>
              Description:
              <input
                value={fruit.description}
                onChange={e => setFruit({
                  ...fruit,
                  description: e.target.value
                })}
              ></input>
            </li>
          </ul>
          <button type="submit" >Save</button>
        </form>
      </div>
    </>
  )

}



