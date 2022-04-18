import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import Button from './components/Button/index'

let sum = (a, b) => {
  return a + b
}

function primeiroJSX(){
  return(
    <div>
      TESTES EM REACT
    </div>
  )
}

const App = () => {
  return(
    <div className="App">
      {primeiroJSX()}
      {sum(5, 5)}
      <Button />
    </div>
    
  )

}

const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)