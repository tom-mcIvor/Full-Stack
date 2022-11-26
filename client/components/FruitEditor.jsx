import React, { useEffect, useState } from 'react'

export default function FruitEditor() {
  // Ready up React state
  const [fruit, setFruit] = useState({ name: "" })
  const [isSaving, setIsSaving] = useState(null)

  // Hydrate React State
  useEffect(() => {
    setIsSaving(false)
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitting fruit', fruit)
  };

  return (

    <>
      <div {...isSaving ? 'disabled' : ''}>
        <form onSubmit={handleSubmit}>
          <p>Create Fruit:</p>
          <ul>
            <li>
              Name:
              <input
                value={fruit.name}
                onChange={e => setFruit(e.target.value)}
              ></input>
            </li>
          </ul>
          <button type="submit" >Save</button>
        </form>
      </div>
    </>
  )

}



