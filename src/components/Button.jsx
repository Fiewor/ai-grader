import React, { useState } from 'react'
import axios from "axios"

// this button is meant to enable users view text extracted from images uploaded
// also display key phrases
// after grading logic is done, display result of grading

const Button = () => {
    const [text, setText] = useState([])
    
    const getText = async () => {
        // useEffect(() => {
            try{
                let res = await axios.get(`http://localhost:3001/upload/mark`)
                console.log(res)
                setText(res)
            }
            catch(err){
                console.log(err)
            }
            // }, [])
    }

    return(
        // perform a get request to get read result from backend
        <button onClick={getText} className="view-button">View uploads</button>
    )   
}

export default Button