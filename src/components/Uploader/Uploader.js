import React, { useState, useEffect } from "react";
import {
  Grid,
  Column,
  FileUploader,
  Button,
  ToastNotification,
  InlineNotification,
} from "@carbon/react";
import { Add, ArrowUpRight, CloudUpload } from "@carbon/react/icons";
import ProgressBar from "@carbon/react/lib/components/ProgressBar/ProgressBar";
import axios from "../../axios";

const Uploader = ({ section }) => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [clickedUpload, setClickedUpload] = useState(false);
  const [success, setSuccess] = useState(false);
  const [containsLargeFile, setContainsLargeFile] = useState(false);

  const removeItem = (index) => {
    console.log("deleted item: ", index);
    // setFiles(files.filter((file, i) => i === index));
  };

  const isGreaterThanMax = (fileSize) => {
    const numberOfBytesIn1mb = 1048576;
    return Math.ceil(fileSize / numberOfBytesIn1mb) > 4;
  };

  const checkFiles = (event) => {
    // files.map((file) => isGreaterThanMax(file.size))
    [...event.target.files].map((file) => {
      const size = file.size;
      if (isGreaterThanMax(size)) {
        setContainsLargeFile(true);
        // return (
        //   <InlineNotification
        //     role="alert"
        //     kind="error"
        //     timeout={5}
        //     title="File is too large"
        //     subtitle={`File is ${(size - 4).toFixed(2)}mb larger than limit`}
        //   />
        // );
      } else {
        setFiles([...files, ...Array.from(event.target.files)]);
      }
    });
  };
  console.log("files: ", files);

  const uploadFiles = async (section, event) => {
    event.preventDefault();
    setClickedUpload(true);
    const formData = new FormData();
    files.forEach((fileItem, i) => {
      console.log(fileItem);
      formData.append(i, fileItem);
    });
    try {
      const response = await axios.post(`/api/uploads/${section}`, formData);
      setUploading(true);

      console.log("response: ", response);
      if (response.status !== 200) {
        <ToastNotification
          role="alert"
          kind="error"
          timeout={5}
          title="Unable to upload files"
          //   subtitle="Choose at least one file before uploading"
        />;
      } else {
        setUploading(false);
        setSuccess(true);
      }
    } catch (error) {
      <ToastNotification role="alert" kind="error" timeout={5} title={error} />;
      console.log(error);
    }
  };

  const renderButtonOrNotification = () => {
    if (files.length && !clickedUpload) {
      <Button
        kind="tertiary"
        className="upload-button"
        renderIcon={CloudUpload}
        onClick={(e) => uploadFiles(section, e)}
        disabled={containsLargeFile}
      >
        Upload
      </Button>;
    }

    if (clickedUpload) {
      <ProgressBar
        //   value={running ? progress : null}
        //   max={size}
        status={uploading ? "active" : "finished"}
        label="Uploading files"
        //   helperText={helperText}
      />;
    }

    if (success) {
      <InlineNotification
        role="alert"
        kind="success"
        timeout={5}
        title="File upload successful!"
      />;
    } else {
      <InlineNotification
        role="alert"
        kind="warning"
        timeout={5}
        title="File upload successful!"
      />;
    }
  };

  return (
    <>
      <FileUploader
        labelTitle={`Upload ${section} sheet`}
        labelDescription="This should be an image or scanned copy of students answer to a test. "
        buttonLabel="Add file(s)"
        buttonKind="tertiary"
        //   renderIcon={Add}
        size="md"
        filenameStatus="edit"
        role="button"
        accept={[".jpg", ".png"]}
        multiple={true}
        onChange={checkFiles}
        onDelete={(item) => removeItem(item)}
        iconDescription="upload icon"
      />
      {renderButtonOrNotification()}
    </>
  );
};

export default Uploader;
