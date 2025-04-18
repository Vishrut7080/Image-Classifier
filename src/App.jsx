import { useState } from 'react'
import './App.css'

function App() {

  function onChange(e) {
    console.log(e)
  }

  return (
    <div>

      <form>
        <label htmlFor="image">Image: </label>
        <input id="image" type="file" onChange={onChange} />
      </form>

      <div>
        <p>Result: </p>
      </div>

    </div>
  )
}

export default App
