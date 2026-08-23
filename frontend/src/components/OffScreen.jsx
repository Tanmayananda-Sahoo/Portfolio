import React from 'react'
import CardScatter from "./CardScatter.jsx";

const dates = [
  { id: 1, src:"https://res.cloudinary.com/dl7crwyee/image/upload/v1787504312/me_xa6qfi.jpg"},
  { id: 2, src:"https://res.cloudinary.com/dl7crwyee/image/upload/v1787504695/aesthetic_rn6bhb.jpg"},
  { id: 3, src:"https://res.cloudinary.com/dl7crwyee/image/upload/v1787504312/me_xa6qfi.jpg"},
  { id: 4, src:"https://res.cloudinary.com/dl7crwyee/image/upload/v1787504695/aesthetic_rn6bhb.jpg"},
  { id: 5, src:"https://res.cloudinary.com/dl7crwyee/image/upload/v1787504312/me_xa6qfi.jpg"},
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
