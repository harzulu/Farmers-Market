import React from "react";
import PropTypes from "prop-types";

function Season(props){
  return (
    <React.Fragment>
      <div onClick ={() => props.whenMonthClicked(props.id)}>
        <h2>{props.month}</h2>
        {/* {props.selection.map((produce) => 
        <h4>{produce}</h4>
        )} */}
        <hr/>
      </div>
    </React.Fragment>
  );
}

Season.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array,
  id: PropTypes.string,
  whenMonthClicked: PropTypes.func
};

export default Season;