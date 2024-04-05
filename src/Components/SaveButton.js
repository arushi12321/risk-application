import React from 'react';

const SaveButton = ({ onClicks }) => {
  return (
    <button className="save-button" onClick={onClicks} >
      Save and Continue
    </button>
  );
};

export default SaveButton;
