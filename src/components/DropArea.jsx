import React, {useState} from "react"
import PublishIcon from '@material-ui/icons/Publish';
import Button from "@material-ui/core/Button";

const DropArea = () => {
    const [file, setFile] = useState('')
    
    function fileUpload(event){
        setFile(event.target.value)
        // console.log(event.target.files[0])
        // setFile(event.target.files[0])
        console.log(file)
    }

    
    function sendFiles(event){
        event.preventDefault()

        console.log("upload button was clicked")
        // const image = URL.createObjectURL(file)

        // attempt to upload file using FormData() and fetch() per the docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        const formData = new FormData()
        formData.append('content', file)
        
        const requestOptions = {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
            body: formData
        }
        
        fetch("http://localhost:8080/upload", requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))

    }
    

    return (
        <div>
            {/* <form method="post" action="http://localhost:8080/upload" className="upload-area" id="uploadForm" enctype="multipart/form-data"> */}
            <form className="upload-area">
                <textarea readonly="yes" name="content" id="" cols="20" rows="3" placeholder="Upload images here"/>
                {/* <input onChange={fileUpload} type="file" name="upload_file" value={file} multiple/> */}
                <input onChange={fileUpload} type="file" value={file} multiple/>
                <Button type="submit" onClick={sendFiles} className="upload-icon-container"><PublishIcon className="upload-icon"/></Button>
            </form>
        </div>
    )
}

export default DropArea;