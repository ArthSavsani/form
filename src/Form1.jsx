import React, { useState } from "react";

import hotels from "./hotels";

import "./styles.css";

function Form1() {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = hotels;
  const [days, setDays] = useState(1);

  const handleDays = (event) => {
    setDays(event.target.value);
  };
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }

    setChecked(updatedList);
  };

  // Return classes based on whether item is checked
  const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="app">
      No. of Days: <input value={days} type="number" onChange={handleDays} />
      <div className="checkList">
        <div className="title">Your CheckList:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item.id} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item.name)}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>{`Items checked are:`}</div>
      <div>
        {checked.length > 0
          ? checked.map((checkedItemId) => {
              const checkedItem = hotels.find(
                (hotel) => hotel.id === checkedItemId
              );

              return (
                <div key={checkedItem.id}>
                  {checkedItem.name}, {checkedItem.price * days}
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Form1;
