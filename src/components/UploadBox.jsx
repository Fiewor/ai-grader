import React, { useState } from "react";
import PublishIcon from "@material-ui/icons/Publish";
import Button from "@material-ui/core/Button";
import axios from "axios";

export const UploadBox = ({ section }) => {
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
      .post(
        `${
          process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_LIVE_API_URL
            : process.env.REACT_APP_LOCAL_API_URL
        }uploads/${section}`,
        formData
      )
      .then((res) => {
        console.log(res);
        noFile = res.data.noFile;
        noFile && alert(`Choose at least one file before uploading`);
        noFile = false;
      })
      .catch((error) => console.log(error));
  };
  console.log(process.env.NODE_ENV);
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
