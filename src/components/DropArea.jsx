import React from "react"
// import PublishIcon from '@material-ui/icons/Publish';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const DropArea = () =>{
// function displayContent(){

// }

    return (
        <div>
        <form className="upload-area">
            <textarea readonly="yes" name="content" id="" cols="20" rows="3" placeholder="Drop images here">
                {/* <p>Drop images here</p> */}
                {/* <PublishIcon /> */}
            </textarea>
            <IconButton className="upload-icon" color="primary" aria-label="upload picture" component="span">
                <PhotoCamera style={{ fontSize: 60 }}/>
            </IconButton>
        </form>
        </div>
    )
}

export default DropArea;