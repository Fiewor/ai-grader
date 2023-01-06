import React, { useState } from "react";
import styled from "styled-components";
import PublishIcon from "@material-ui/icons/Publish";
import Button from "@material-ui/core/Button";
import axios from "../axios";

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
      // console.log(fileItem);
      formData.append(i, fileItem);
    });

    let noFile = false;

    axios
      .post(`/api/uploads/${section}`, formData)
      .then((res) => {
        noFile = res.data.noFile;
        if (noFile) {
          alert(`Choose at least one file before uploading`);
          noFile = false;
          return;
        }
        res.status !== 200
          ? alert(`Unable to upload files`)
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
      <Input
        onChange={fileUpload}
        // type="file"
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
  padding: 0.5rem 5rem;

  .upload-icon-container {
    cursor: pointer;
    position: absolute;
    align-self: flex-end;
    transform: translateY(2em);
  }

  .upload-icon {
    color: rgb(23, 74, 167);
    &:hover {
      color: rgb(4, 26, 66);
    }
    &:active {
      color: rgb(172, 40, 40);
    }
  }
`;

const Input = styled.input.attrs((props) => ({ type: "file" }))`
  position: absolute;
  padding: 2em 0 0 1em;
  &::file-selector-button {
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
    &:hover {
      border-color: black;
    }
    &:active {
      background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
    }
  }
`;
