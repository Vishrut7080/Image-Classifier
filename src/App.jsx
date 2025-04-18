// all of them are hooks
import { useState, useEffect, useRef } from 'react'
import './App.css'

let classifier = window.ml5.imageClassifier("MobileNet");

function App() {

  const [img, setImg] = useState()
  const [result, setResult] = useState([])

  const imgRef = useRef()

  function handleChange(e) {
    const file = e.target.files[0]
    // to access url of the uploaded image that is stored in browser
    const imgURL = URL.createObjectURL(file)
    setImg(imgURL)
  }

  // hook in react for side effects(successive function calling)
  useEffect(() => {
    // if there is an imnage tag and it has non empty source
    if (imgRef.current && imgRef.current.src !== "") {
      classifier.classify(imgRef.current, (result) => {
        if (result) {
          setResult(result)
        }
      })
    }
  }, [img])

  return (
    <div className='flex flex-col'>

      <form id='image-upload-form'>
        <label htmlFor="image">Image: </label>
        <input id="image" type="file" onChange={handleChange} />
      </form>
      {/* reference(acts similar to id in html) in react */}
      <img ref={imgRef} src={img} alt="user selected image" />

      <div>
        <p>Result: </p>
        {result.map((r, idx) => {
          return (
            <p key={idx}>{r.label} ({(r.confidence * 100).toFixed(2)}%)</p>
          )
        })}
      </div>

    </div>
  )
}

export default App
