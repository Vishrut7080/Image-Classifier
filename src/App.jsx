// all of them are hooks
import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [img, setImg] = useState()

  const imgRef = useRef()

  function handleChange(e) {
    const file = e.target.files[0]
    // to access url of the uploaded image that is stored in browser
    const imgURL = URL.createObjectURL(file)
    console.log(imgURL)
    setImg(imgURL)
  }

  // hook in react
  useEffect(() => {
    console.log(imgRef)
  }, [img])

  return (
    <div>

      <form>
        <label htmlFor="image">Image: </label>
        <input id="image" type="file" onChange={handleChange} />
      </form>
      {/* reference(acts similar to id in html) in react */}
      <img ref={imgRef} src={img} alt="user selected image" />

      <div>
        <p>Result: </p>
      </div>

    </div>
  )
}

export default App
