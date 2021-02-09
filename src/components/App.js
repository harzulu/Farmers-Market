import React from "react";
import Header from './Header.js';
import MarketControl from './MarketControl.js';
// import Produce from './Produce.js';
// import Schedule from './Schedule.js';

function App(){
  return (
    <React.Fragment>
      <Header/>
      <MarketControl/>
      {/* <div class="row">
        <div class="col-5">
          <Schedule/>
        </div>
        <div class="col-5">
          <Produce/>
        </div>
      </div> */}
    </React.Fragment>
  );
}

export default App;