import React from 'react'
import '../src/reset.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Transactions from './components/Transactions/Transactions';



function App() {
  return (
    <div className="container">
      <Header />
      <Transactions />
      <Footer footerUrl="https://github.com/giuliabriao"/>
    </div>
  )
}

export default App;
