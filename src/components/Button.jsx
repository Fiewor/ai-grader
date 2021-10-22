import React, { useState } from 'react'

// this button is meant to enable users view images uploaded
const Button = () => {
    const [upload, setUpload] = useState([])
    const getUpload = (event) => {
        setUpload(Array.from(event.target))
        console.log(upload)
    }

    return(
        // perform a get request to get read result from backend
        <button onClick={getUpload} className="view-button">View uploads</button>
    )   
}

export default Button