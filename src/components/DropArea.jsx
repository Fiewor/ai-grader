import React, {useState} from "react"
import PublishIcon from '@material-ui/icons/Publish'
import Button from "@material-ui/core/Button"
import axios from "axios"

const DropArea = () => {
    const [files, setFiles] = useState('')
    
    function fileUpload(event){
        setFiles(Array.from(event.target.files))
        console.log(files)
        // setFiles(Array(event.target.files))
    }
    
    function sendFiles(event){
        event.preventDefault()

        // attempt to upload file using FormData() and fetch() per the docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        const formData = new FormData()

        files.forEach((fileItem, i) => {
            console.log(fileItem)
            formData.append(i, fileItem)
        })

        // const requestOptions = {
            // mode: "no-cors",
        //     method: "POST",
        //     body: formData
        // }
        
        // fetch("http://localhost:3001/upload", requestOptions)
        // .then(response => response.json())
        // .then(data => console.log(data))

        axios.post("http://localhost:3001/upload", formData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <form className="upload-area">
                <textarea readOnly="yes" name="content" id="" cols="20" rows="3" placeholder="Upload images here"/>
                <input onChange={fileUpload} type="file" name="file" multiple/>
                <Button type="submit" onClick={sendFiles} className="upload-icon-container"><PublishIcon className="upload-icon"/></Button>
            </form>
        </div>
    )
}

export default DropArea;