import React from "react";
import Header from './Header.js';
import Produce from './Produce.js';
import Schedule from './Schedule.js';

function App(){
  return (
    <React.Fragment>
      <Header/>
      <Schedule/>
      <Produce/>
    </React.Fragment>
  );
}

export default App;