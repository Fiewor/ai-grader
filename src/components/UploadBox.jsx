import React, { useState } from "react";
import PublishIcon from "@material-ui/icons/Publish";
import Button from "@material-ui/core/Button";
import axios from "axios";

export const UploadBox = (props) => {
  const { section } = props;
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

    let noFile = false;
    axios
      .post(`http://localhost:3001/uploads/${section}`, formData)
      .then((res) => {
        console.log(res);
        noFile = res.data.noFile;
        noFile && alert(`Choose at least one file before uploading`);
        noFile = false;
      })
      .catch((error) => console.log(error));
  };
  return (
    <form className="upload-form">
      <textarea
        readOnly="yes"
        name="content"
        id=""
        cols="20"
        rows="3"
        placeholder={`Upload ${section} sheets here`}
      />
      <input
        onChange={fileUpload}
        type="file"
        name="file"
        multiple
        className="file-input"
      />
      <Button
        type="submit"
        onClick={sendFiles}
        className="upload-icon-container"
      >
        <PublishIcon className="upload-icon" />
      </Button>
    </form>
  );
};
