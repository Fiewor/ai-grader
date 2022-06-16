import React, { useState } from "react";
import styled from "styled-components";
import PublishIcon from "@material-ui/icons/Publish";
import Button from "@material-ui/core/Button";
import axios from "axios";

const Textarea = styled.textarea`
  width: 100%;
  height: 90%;
  padding: 10px;
  margin: 0.1rem;
  border-radius: 20px;
  box-shadow: 0 0 5px 4px rgb(161, 161, 161);
  background-color: #fff;
  font-size: 1rem;
  outline: none;
  resize: none;
  position: relative;
  text-align: center;
  display: relative;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  min-width: 40vw;
  min-height: max-content;
  overflow: hidden;

  input[type="file"] {
    position: absolute;
    font-size: 0.7rem;
  }

  .upload-icon-container {
    cursor: pointer;
    position: absolute;
    align-self: flex-end;
    transform: translateY(2em);
  }

  .file-input {
    cursor: pointer;
    padding: 2rem;
  }

  .upload-icon {
    color: rgb(23, 74, 167);
  }

  @media screen and (min-width: 768px) {
    input[type="file"] {
      font-size: 1rem;
    }
  }
`;

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
        console.log("res", res);
        noFile = res.data.noFile;
        if (noFile) {
          alert(`Choose at least one file before uploading`);
          noFile = false;
          return;
        }
        res.status !== 200
          ? alert(`Unable to upload files to local directory`)
          : alert(`${res.data}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Form>
      <Textarea
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
    </Form>
  );
};
