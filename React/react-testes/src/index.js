import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const activateLaser = () => {
    alert('oi')
}

const App = () => {

  const handleChange = (e) => {
    const { value } = e.target
    console.log(value)
  } 

  return (
    <div> 
      <p>WILL INC</p>
      <br />
      <button onClick={activateLaser}>activateLaser</button>
      <input onChange={handleChange} />
    </div>
  )
}
export default App

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
