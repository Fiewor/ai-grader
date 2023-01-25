import React from "react";
import { Link } from "react-router-dom";
import { Grid, Column } from "@carbon/react";
import List from "../List";

const ListAndHeader = ({ doc, sheet }) => {
  if (doc.length) {
    return (
      <Column lg={16} md={8} sm={4} className="">
        <Grid>
          <Column lg={16} md={8} sm={4} className="header">
            <p className="heading">
              Select the {sheet} that you would like to grade
            </p>
            <p className="sub_heading">
              You can click on a document's id or filename to view its text
            </p>
          </Column>
          <Column lg={16} md={8} sm={4} className="">
            <List doc={doc} sheet={sheet} />
          </Column>
        </Grid>
      </Column>
    );
  } else {
    return (
      <Column lg={16} md={8} sm={4} className="">
        <p>No {sheet} has been uploaded.</p>
        <Link to="/grade">Upload one now</Link>
      </Column>
    );
  }
};

export default ListAndHeader;
