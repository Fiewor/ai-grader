import React, { useState } from "react";
import PublishIcon from "@material-ui/icons/Publish";
import Button from "@material-ui/core/Button";
import ViewButton from "./ViewButton";
import axios from "axios";

const DropArea = (mark) => {
  const [files, setFiles] = useState([]);

  const fileUpload = (event) => {
    setFiles(Array.from(event.target.files));
  };
  console.log(files);
  const sendFiles = (event) => {
    event.preventDefault();

    const formData = new FormData();
    files.forEach((fileItem, i) => {
      console.log(fileItem);
      formData.append(i, fileItem);
    });

    axios
      .post(`http://localhost:3001/upload/mark`, formData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form className="upload-area">
        <textarea
          readOnly="yes"
          name="content"
          id=""
          cols="20"
          rows="3"
          placeholder="Upload answer sheets here"
        />
        <input
          onChange={fileUpload}
          type="file"
          name="file"
          multiple
          class="fileInput"
        />
        <Button
          type="submit"
          onClick={sendFiles}
          className="upload-icon-container"
        >
          <PublishIcon className="upload-icon" />
        </Button>
      </form>

      <ViewButton />
    </div>
  );
};

export default DropArea;
