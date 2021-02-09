import React from 'react';
import Schedule from './Schedule.js';
import Produce from './Produce.js';
import {availableProduce} from './Produce.js';
import {marketSchedule} from './Schedule.js';
import SeasonDetail from './SeasonDetail.js';
import LocationDetail from './LocationDetail.js';

class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      produceOnPage: false,
      selectedMonth: null,
      masterProduce: availableProduce,
      selectedLocation: null,
      masterSchedule: marketSchedule
    };
  }

  handleClick = () => {
    if (this.state.selectedMonth != null) {
      this.setState({
        produceOnPage: false,
        selectedMonth: null
      });
    } else if (this.state.selectedLocation != null) {
      this.setState({
        produceOnPage: false,
        selectedLocation: null
      });
    } else {
      this.setState(prevState => ({
        produceOnPage: !prevState.produceOnPage
      }));
    }
  }

  handleChangingSelectedMonth = (id) => {
    const selectedMonth = this.state.masterProduce.filter(season => season.id === id)[0];
    this.setState({selectedMonth: selectedMonth});
  }

  handleChangingSelectedLocation = (id) => {
    const selectedLocation = this.state.masterSchedule.filter(location => location.id === id)[0];
    this.setState({selectedLocation: selectedLocation});
  }

  render(){
    let currentlyVisableState = null;
    let buttonText = null;

    if (this.state.selectedMonth != null) {
      currentlyVisableState = <SeasonDetail season={this.state.selectedMonth} />
      buttonText = "Return to Month List";
    } else if (this.state.selectedLocation != null) {
      currentlyVisableState = <LocationDetail location={this.state.selectedLocation} />
      buttonText = "Return to Schedule List";
    } else if (this.state.produceOnPage) {
      currentlyVisableState = <Produce onMonthSelection={this.handleChangingSelectedMonth} />
      buttonText = "View Schedule";
    } else {
      currentlyVisableState = <Schedule onLocationSelection={this.handleChangingSelectedLocation} />
      buttonText = "Seasonal Produce";
    }
    return(
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisableState}
      </React.Fragment>
    );
  }

}

export default MarketControl;