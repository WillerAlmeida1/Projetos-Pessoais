import React from 'react';
import Button from './components/Button';
import ReactDOM from 'react-dom';

function App(){
  return (
    <div>
        <Button>Salvar</Button>
    </div>
  );
}

export default App;


const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)