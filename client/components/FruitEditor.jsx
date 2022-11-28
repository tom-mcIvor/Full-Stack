import React, { useState } from 'react'

export default function FruitEditor(props) {
  // Ready up React state
  const [fruit, setFruit] = useState({ name: "", description: "" })

  const handleSubmit = e => {
    e.preventDefault();
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
            {/* <Seeds>
             <h2>Im a child</h2>
            </Seeds>
            <Seeds> */}
              {/* <h2>THis is a second seed</h2>
            </Seeds> */}

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

/* // const PrimaryButton = ({children}) => {
//   return (
//     < button style='color:red; background-color:'>
//      {children}
//     </ button>
//   )
// } */


