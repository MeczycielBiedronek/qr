import { useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [userInput, setUserInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    setImageUrl(`http://api.qrserver.com/v1/create-qr-code/?data=${userInput}&size=200x300`)
  }
  return (
    <>
    {
      userInput.length > 1
      ?
<img src={imageUrl} alt="your qr code" />
:
<img src="http://szparowanie.nazwa.pl/strony/react-qr-cra/default.jpg" alt="your qr code" />
    }
    
    <h1>Generate your QR code</h1>
      <div>
          <form onSubmit={submitHandler}>
            <button className="clear-button" onClick={() => {
              setUserInput('') 
              
              }}><FaTrash/> clear</button>
            <input value={userInput} 
            onChange={(event) => {setUserInput(event.target.value)
              submitHandler(event)} }
            // onKeyDown={(e) => { e.key === 'Enter' && submitHandler(e); }}
            />
            {/* <button className="submit-button" type='submit'>get QR code</button> */}
            
          </form>
          <h4>Type text to generate QR code</h4>
        </div>
    </>
  )
}

export default App
