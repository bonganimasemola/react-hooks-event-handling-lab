
import React from "react";

function Keypad() {
    function handleChange() {
        console.log('Entering password...');
      }
    
  return (
    <div>
      <label htmlFor="password" >Password: </label>
      <input
        type="password"
        id="password"
        onChange={handleChange}
        placeholder="enter password"
      />
    </div>
  );
}

export default Keypad;
