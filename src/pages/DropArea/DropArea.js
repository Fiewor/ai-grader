import React, { useState } from "react";
import { Grid, Column, FileUploader, Button } from "@carbon/react";
import { ArrowUpRight } from "@carbon/react/icons";
import { Link } from "react-router-dom";
import Uploader from "../../components/Uploader";

const DropArea = () => {
  return (
    <Grid className="" fullWidth>
      <Column lg={16} md={8} sm={4} className="header">
        <h1>Instructions</h1>
        <h3 className="sub-heading">Maximum file size is 4mb.</h3>
        <h3 className="sub-heading">
          Dimensions should be at least 50 x 50 pixels and at most 10000 x 10000
          pixels.
        </h3>
        <h3 className="sub-heading">
          Only .jpg, .png, .bmp, .pdf and .tff files are supported.
        </h3>
        <h3 className="sub-heading">
          For PDF and TIFF files, the system currently processes only first two
          pages.
        </h3>
      </Column>
      <Column lg={16} md={8} sm={4} className="upload-section">
        <Uploader section="answer" />
      </Column>

      <Column lg={16} md={8} sm={4} className="upload-section">
        <Uploader section="mark" />
      </Column>
      <Column lg={16} md={8} sm={4} className="button">
        <Button
          element={Link}
          href="/uploads"
          kind="primary"
          size="xl"
          renderIcon={ArrowUpRight}
        >
          Proceed
        </Button>
      </Column>
    </Grid>
  );
};

export default DropArea;
