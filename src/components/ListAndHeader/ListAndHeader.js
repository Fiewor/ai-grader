import React from "react";
import { Link } from "react-router-dom";
import { Grid, Column } from "@carbon/react";
import List from "../List";

const ListAndHeader = ({ doc, sheet }) => {
  const headingText = `Select the ${sheet} that you would like to ${
    sheet === "answerSheet" ? "grade" : "use for grading"
  }`;
  if (doc.length) {
    return (
      <Column lg={16} md={8} sm={4} className="list-container">
        <Grid>
          <Column lg={16} md={8} sm={4} className="list-header">
            <p className="list-heading">{headingText}</p>
            {/* <p className="sub_heading">
              You can click on a document's id or filename to view its text
            </p> */}
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
