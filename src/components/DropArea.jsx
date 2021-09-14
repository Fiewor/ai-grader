import React, {useState} from "react"
import PublishIcon from '@material-ui/icons/Publish';
import Button from "@material-ui/core/Button";

const DropArea = () => {
    const [file, setFile] = useState('')
    
    function fileUpload(event){
        setFile(event.target.value)
        console.log("working")
    }

    function sendFiles(){
        console.log("upload button was clicked")
    }

    return (
        <div>
            <form action="post" className="upload-area" id="uploadForm">
                <textarea readonly="yes" name="content" id="" cols="20" rows="3" placeholder="Upload images here"/>
                <input onChange={fileUpload} type="file" name="uploadfile" value={file} multiple/>
                <Button onClick={sendFiles} className="upload-icon-container"><PublishIcon className="upload-icon"/></Button>
            </form>
        </div>
    )
}

export default DropArea;