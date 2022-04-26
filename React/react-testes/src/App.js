import React from 'react';
import Button from './components/Button';
import ReactDOM from 'react-dom';

const buttonA = <button>HISTORICO DE CLIENTES</button> 

const hasCostumer = false

const App = () => {
  return (
    <div>
      <p>CLIENTES</p>

      <div>
        
      </div>
    </div>
  )
}


export default App;


const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)