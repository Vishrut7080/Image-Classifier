import { useState } from 'react'
import './App.css'

function App() {

  const [img, setImg] = useState()

  function handleChange(e) {
    const file = e.target.files[0]
    const imgURL = URL.createObjectURL(file)
    console.log(imgURL)
    setImg(imgURL)
  }

  return (
    <div>

      <form>
        <label htmlFor="image">Image: </label>
        <input id="image" type="file" onChange={handleChange} />
      </form>

      <img src={img} alt="user selected image" />

      <div>
        <p>Result: </p>
      </div>

    </div>
  )
}

export default App
