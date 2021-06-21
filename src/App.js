import React from 'react'
import '../src/reset.css'
import Header from './components/Header/Header';
import Transactions from './components/Transactions/Transactions';



function App() {
  return (
    <div className="container">
    <Header />
    <Transactions />
    
    </div>
  )
}

export default App;
