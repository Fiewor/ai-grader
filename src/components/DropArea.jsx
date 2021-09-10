import React, { useState } from "react"
// import PublishIcon from '@material-ui/icons/Publish';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const DropArea = () => {
    // function displayContent(){
        
        // }
        // {
        //     const file = document.getElementById('uploadForm')
        //     console.log(file.value)
        // }

        const [file, setFile] = useState('')
        // let fileInput = document.getElementById('uploadForm')
        // let files = fileInput.files
        // let file
        
        function fileUpload(event){
            const value = event.target.value;
            setFile(value)
            console.log(file)
            // files.map(file=>{
            //     return (
            //         file.name
            //     )
            // }) 
        }

        return (
            <div>
                <form className="upload-area" id="uploadForm">
                    <textarea readonly="yes" name="content" id="" cols="20" rows="3" placeholder="Drop images here">
                        {/* <PublishIcon /> */}
                    </textarea>
                    <input onChange={fileUpload} type="file" name="uploadfile" multiple/>
                    {/* <IconButton className="upload-icon" color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera style={{ fontSize: 60 }}/>
                    </IconButton> */}
                </form>
            </div>
        )
        // {
        //     files.map(file=>{
        //         return (
        //             file.name;
        //         )
        //     })
        // }
        // {
        //     let fileInput = document.querySelector('#uploadForm')
        //     let files = fileInput.files
        //     let file
        //     for(let i= 0; i < file.length; i++){
        //         file = files.item(i)
        //         alert(file.name)
        //     }
        // }
}

export default DropArea;