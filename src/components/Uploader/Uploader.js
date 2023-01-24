import React, { useState, useEffect } from "react";
import {
  Grid,
  Column,
  FileUploader,
  Button,
  ToastNotification,
  InlineNotification,
} from "@carbon/react";
import { Add, CloudUpload } from "@carbon/react/icons";
import ProgressBar from "@carbon/react/lib/components/ProgressBar/ProgressBar";
import axios from "../../axios";

const RenderButtonOrNotification = ({ files, section }) => {
  const [uploading, setUploading] = useState(false);
  const [clickedUpload, setClickedUpload] = useState(false);
  const [success, setSuccess] = useState(false);
  const [containsLargeFile, setContainsLargeFile] = useState(false);

  const isGreaterThanMax = (fileSize) => {
    const numberOfBytesIn1mb = 1048576;
    return Math.ceil(fileSize / numberOfBytesIn1mb) > 4;
  };

  const getExtension = (file) => {
    return file.substring(file.lastIndexOf("."));
  };

  const checkFiles = (files) => {
    const acceptedExtensions = [".jpg", ".png", ".bmp", ".pdf", ".tff"];
    files.map(({ 0: file, id }) => {
      const fileDetails = file[0];
      const size = fileDetails.size;
      const fileExtension = getExtension(fileDetails.name);

      // check if extension is accepted
      if (!acceptedExtensions.includes(fileExtension)) {
        return (
          <InlineNotification
            role="alert"
            kind="error"
            timeout={5}
            title="Attempt to upload file with unaccpeted extension. Delete file and try again"
            // subtitle={`File is ${(size - 4).toFixed(2)}mb larger than limit`}
          />
        );
      }

      // check if files state array contains file that's larger than max file size
      if (isGreaterThanMax(size)) {
        setContainsLargeFile(true);
        return (
          <InlineNotification
            role="alert"
            kind="error"
            timeout={5}
            title="Attempt to upload file that is too large. Delete file and retry upload"
            // subtitle={`File is ${(size - 4).toFixed(2)}mb larger than limit`}
          />
        );
      }
    });
  };

  const uploadFiles = async (section, event) => {
    event.preventDefault();
    setClickedUpload(true);
    checkFiles(files);

    const formData = new FormData();
    files.forEach((fileItem, i) => {
      console.log("fileItem: ", fileItem);
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

  if (!files.length && !uploading && !success) return null;
  if (files.length && !clickedUpload) {
    return (
      <Button
        kind="tertiary"
        className="upload-button"
        renderIcon={CloudUpload}
        onClick={(e) => uploadFiles(section, e)}
        disabled={containsLargeFile}
      >
        Upload
      </Button>
    );
  } else if (clickedUpload && !success) {
    return (
      <ProgressBar
        status={uploading ? "active" : "finished"}
        label="Uploading files"
      />
    );
  } else if (success) {
    return (
      <InlineNotification
        role="alert"
        kind="success"
        timeout={5}
        title="File upload successful!"
      />
    );
  } else {
    return (
      <InlineNotification
        role="alert"
        kind="warning"
        timeout={5}
        title="File upload failed!"
      />
    );
  }
};

const Uploader = ({ section }) => {
  const [files, setFiles] = useState([]);
  console.log("files: ", files);

  const removeItem = (index) => {
    console.log("deleted item: ", index);
    // setFiles(files.filter(({0: file, id}) => id !== index));
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
        name={`${files[0]}`}
        onChange={(event) =>
          setFiles([...files, { id: files.length, ...[event.target.files] }])
        }
        onDelete={(e) => removeItem(e)}
        iconDescription="upload icon"
      />
      <RenderButtonOrNotification files={files} section={section} />
    </>
  );
};

export default Uploader;
