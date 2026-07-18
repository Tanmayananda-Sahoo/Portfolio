import React from 'react'
import CardScatter from "./CardScatter.jsx";

const dates = [
  { id: 1, src:"https://images.unsplash.com/photo-1616002411355-49593fd89721?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  { id: 2, src:"https://images.unsplash.com/photo-1616002411355-49593fd89721?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  { id: 3, src:"https://images.unsplash.com/photo-1616002411355-49593fd89721?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  { id: 4, src:"https://images.unsplash.com/photo-1616002411355-49593fd89721?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  { id: 5, src:"https://images.unsplash.com/photo-1616002411355-49593fd89721?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
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
