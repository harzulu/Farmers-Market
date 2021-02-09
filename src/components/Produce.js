import React from "react";
import Season from './Season.js';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

const availableProduce = [
   {
      month: "January",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes",
         "Turnips"
      ],
      id: v4()
   },
   {
      month: "February",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes"
      ],
      id: v4()
   },
   {
      month: "March",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Rhubarb",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes"
      ],
      id: v4()
   },
   {
      month: "April",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Rhubarb",
         "Asparagus",
         "Garlic",
         "Lettuce",
         "Mushrooms",
         "Onions",
         "Potatoes"
      ],
      id: v4()
   },
   {
      month: "May",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Rhubarb",
         "Asparagus",
         "Cauliflower",
         "Garlic",
         "Lettuce",
         "Potatoes",
         "Radishes"
      ],
      id: v4()
   },
   {
      month: "June",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Rhubarb",
         "Blackberries",
         "Cherries",
         "Raspberries",
         "Strawberries",
         "Asparagus",
         "Broccoli",
         "Cauliflower",
         "Kohlrabi",
         "Lettuce",
         "Mushrooms",
         "Potatoes",
         "Radishes",
         "Squash"
      ],
      id: v4()
   },
   {
      month: "July",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Rhubarb",
         "Apricots",
         "Blackberries",
         "Blueberries",
         "Cherries",
         "Melons",
         "Nectarines",
         "Peaches",
         "Raspberries",
         "Strawberries",
         "Tomatoes",
         "Beets",
         "Broccoli",
         "Brussel Sprouts",
         "Cabbage",
         "Carrots",
         "Cauliflower",
         "Cucumber",
         "Eggplant",
         "Garlic",
         "Green Beans",
         "Kohlrabi",
         "Lettuce",
         "Mushrooms",
         "Potatoes",
         "Radishes",
         "Squash",
         "Turnips"
      ],
      id: v4()
   },
   {
      month: "August",
      selection: [
         "Apples",
         "Apricots",
         "Blackberries",
         "Blueberries",
         "Cherries",
         "Melons",
         "Nectarines",
         "Peaches",
         "Pears",
         "Plums",
         "Raspberries",
         "Rhubarb",
         "Strawberries",
         "Tomatoes",
         "Beets",
         "Broccoli",
         "Brussel Sprouts",
         "Cabbage",
         "Carrots",
         "Cauliflower",
         "Corn",
         "Cucumber",
         "Eggplant",
         "Garlic",
         "Green Beans",
         "Kohlrabi",
         "Lettuce",
         "Mushrooms",
         "Onions",
         "Peas",
         "Peppers",
         "Potatoes",
         "Radishes",
         "Squash",
         "Turnips"
      ],
      id: v4()
   },
   {
      month: "September",
      selection: [
         "Apples",
         "Blueberries",
         "Grapes",
         "Melons",
         "Peaches",
         "Pears",
         "Plums",
         "Raspberries",
         "Tomatoes",
         "Broccoli",
         "Brussel Sprouts",
         "Cabbage",
         "Carrots",
         "Cauliflower",
         "Corn",
         "Cucumber",
         "Eggplant",
         "Garlic",
         "Green Beans",
         "Kohlrabi",
         "Lettuce",
         "Mushrooms",
         "Onions",
         "Peas",
         "Peppers",
         "Potatoes",
         "Radishes",
         "Squash",
         "Turnips"
      ],
      id: v4()
   },
   {
      month: "October",
      selection: [
         "Apples",
         "Grapes",
         "Hazelnuts",
         "Melons",
         "Peaches",
         "Pears",
         "Tomatoes",
         "Broccoli",
         "Brussel Sprouts",
         "Cabbage",
         "Carrots",
         "Cauliflower",
         "Corn",
         "Cucumber",
         "Eggplant",
         "Garlic",
         "Green Beans",
         "Kohlrabi",
         "Lettuce",
         "Mushrooms",
         "Onions",
         "Peas",
         "Peppers",
         "Potatoes",
         "Pumpkins",
         "Radishes",
         "Squash",
         "Turnips"
      ],
      id: v4()
   },
   {
      month: "November",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Broccoli",
         "Carrots",
         "Cauliflower",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes",
         "Squash",
         "Turnips"
      ],
      id: v4()
   },
   {
      month: "December",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Broccoli",
         "Carrots",
         "Cauliflower",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes",
         "Turnips"
      ],
      id: v4()
   }
];

function Produce(props) {
   return (
      <React.Fragment>
         <hr />
         {availableProduce.map((season) =>
            <Season
               whenMonthClicked = { props.onMonthSelection } 
               month={season.month}
               selection={season.selection}
               id={season.id}
               key={season.id} />
         )}
      </React.Fragment>
   );
}

Produce.propTypes = {
   onMonthSelection: PropTypes.func
}

export default Produce;
export {availableProduce};