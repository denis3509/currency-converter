import React from 'react';
import './App.css';


import Currency from './currency/containers'
import AppBar from './header'

function App() {

  return (

      <div className="App">
        <AppBar
          title={'Currency Converter'}
        />
        <Currency/>
      </div>

  );
}

export default App;
