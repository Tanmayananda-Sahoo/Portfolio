import React from 'react'
import CardScatter from "./CardScatter.jsx";

const dates = [
  { id: 1, src:"../src/assets/me.jpg"},
  { id: 2, src:"../src/assets/aesthetic.jpeg"},
  { id: 3, src:"../src/assets/me.jpg"},
  { id: 4, src:"../src/assets/me.jpg"},
  { id: 5, src:"../src/assets/me.jpg"},
];

const OffScreen = () => {
  return (
    <div className='off-screen'>
        <div className="off-screen-header">
            Off screen
        </div>
        <div className='off-screen-img-section'>
            <CardScatter cards={dates} />
        </div>
    </div>
  )
}

export default OffScreen
