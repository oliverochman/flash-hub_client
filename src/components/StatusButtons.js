import React from 'react';
import '../styling/status-buttons.css'

const StatusButtons = () => {

  return (
    <div className='button-group'>
      <div className='button' id='red' onClick={e => this.setState}>Repeat, please</div>
      <div className='button' id='yellow'>Needs more practice</div>
      <div className='button' id='green'>I got this!</div>
    </div>
  )
};

export default StatusButtons;