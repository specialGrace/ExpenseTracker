import React from 'react';
import Form from './components/ExpenseTracker/Form';
// import { GlobalContext } from './Context';
import './App.css';
import Header from './components/ExpenseTracker/Header';
import Balance from './components/ExpenseTracker/Balance';
import HistoryList from './components/ExpenseTracker/HistoryList';


function App() {
  
  return (
    <div className="app">
      <div className='appcontainer'>
        <Header />
        <Balance />
        <HistoryList />
        <Form />
      </div>
    </div>
  );
}

export default App;
