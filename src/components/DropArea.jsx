import React, {useState} from "react"
import PublishIcon from '@material-ui/icons/Publish'
import Button from "@material-ui/core/Button"
import axios from "axios"

const DropArea = ({route}) => {
    const [files, setFiles] = useState('')
    function fileUpload(event){
        setFiles(Array.from(event.target.files))
        console.log(files)
    }
    
    function sendFiles(event){
        event.preventDefault()

        const formData = new FormData()
        files.forEach((fileItem, i) => {
            console.log(fileItem)
            formData.append(i, fileItem)
        })
        axios.post(`http://localhost:3001/upload/${route}`, formData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <form className="upload-area" children>
                <textarea readOnly="yes" name="content" id="" cols="20" rows="3" placeholder="Upload images here"/>
                <p>{route}</p>
                <p>http://localhost:3001/upload/{route}</p>
                {/* {children} */}
                <input onChange={fileUpload} type="file" name="file" multiple/>
                <Button type="submit" onClick={sendFiles} className="upload-icon-container"><PublishIcon className="upload-icon"/></Button>
            </form>
        </div>
    )
}

export default DropArea;