import React, { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        Toggle
      </button>
      
      <h1>
        {isOn ? 'On' : 'Off'}
      </h1>
    </div>
  );
}

export default ToggleSwitch;