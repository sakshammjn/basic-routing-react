import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
    const navigate = useNavigate();

    function clickHandler() {
        // mpve to about page
        navigate('/about');
    }
  return (
    <div>
        <div>
            This is Labs Page
        </div> 

        <button onClick={clickHandler}>Move to About Page</button>
    </div>
    
  )
}

export default Labs
