import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const listCustomer = [
  {
    id: 1,
    name: 'Willer Almeida'
  },
  {
    id: 2,
    name: 'Ingrid Araujo'
  },
  {
    id: 3,
    name: 'Pedrita Almeida'
  },
  {
    id: 4,
    name: 'Jon Snow'
  },
]

//const hasCostumer = true




const App = () => {

  const renderCustomers = (costumer, index) => {
    return(
      <li key={`costumer - ${costumer.id}`}> {costumer.name} </li>
    )
  }
 
  return (
    <div> 
      <p>WILL INC</p>
      {/*{hasCostumer ? renderShowHistory : renderCreateCostumer}*/}    
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>   
    </div>
  )
}
export default App

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
