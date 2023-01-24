import React, { useState, useEffect } from "react";
import {
  Grid,
  Column,
  Button,
  RadioButtonGroup,
  RadioButton,
  Checkbox,
  InlineNotification,
  UnorderedList,
  ListItem,
} from "@carbon/react";
import ProgressBar from "@carbon/react/lib/components/ProgressBar/ProgressBar";
import { Link } from "react-router-dom";
import axios from "../../axios";

const List = ({ doc, sheet }) => {
  console.log("doc in List: ", doc);

  const [ids, setIds] = useState({
    markId: null,
    answerId: null,
  });

  return (
    <UnorderedList className="list">
      {doc.map(({ _id, page: { fileName } }) => (
        <ListItem
          key={_id}
          className="list-item"
          style={{ listStyleType: "none" }}
        >
          <Checkbox
            name={sheet}
            value={sheet === "markSheet" ? ids.markId : ids.answerId}
            id=""
            labelText={<Link to={`/texts/${_id}`}>{fileName}</Link>}
            onChange={(e) =>
              e.target.checked
                ? setIds((ids) => ({ ...ids, markId: _id }))
                : setIds((ids) => ({ ...ids, markId: null }))
            }
          />
        </ListItem>
      ))}
    </UnorderedList>
  );
};

const ListComponent = ({ doc, sheet }) => {
  console.log("doc in ListComponent: ", doc);
  if (doc.length) {
    return (
      <Column lg={16} md={8} sm={4} className="">
        <Grid>
          <Column lg={16} md={8} sm={4} className="header">
            <p className="heading">
              Select the {doc} documents that you would like to grade
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
        <p>
          No {doc} sheet has been uploaded.
          <Link to="/grade">Upload one now</Link>
        </p>
      </Column>
    );
  }
};

const DisplayContent = ({ route }) => {
  // const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("error");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [inGrader, setInGrader] = useState(false);
  const [inTextExtractor, setInTextExtractor] = useState(false);
  const [data, setData] = useState({
    answerDoc: [],
    markDoc: [],
    text: [],
  });

  useEffect(() => {
    const getTextData = async () => {
      setLoading(true);
      setStatus("active");
      let result = await axios.get(`api/${route}`);
      result && console.log("result: ", result);
      if (result.status !== 200) {
        alert(`Unable to retrieve text from database`);
      } else {
        const { answerDoc, markDoc } = result.data;

        if (answerDoc && markDoc) {
          setData((data) => ({
            ...data,
            answerDoc,
            markDoc,
          }));
          setInGrader(true);
        } else {
          setData((data) => ({
            ...data,
            text: result.data,
          }));
          setInTextExtractor(true);
        }
        setLoading(false);
        setStatus("finished");
        setSuccess(true);
      }
    };
    getTextData();
    console.log("data: ", data);
  }, []);

  if (loading) {
    return (
      <Grid className="">
        <Column lg={7} md={4} sm={2} className="">
          <ProgressBar
            status={status}
            label="Fetching uploaded documents"
            helperText={loading ? "Fetching documents" : "Done"}
          />
        </Column>
      </Grid>
    );
  } else {
    if (success) {
      if (inGrader) {
        const { answerDoc, markDoc } = data;
        return (
          <Grid fullWidth>
            <ListComponent doc={answerDoc} sheet="answerSheet" />
            <ListComponent doc={markDoc} sheet="markSheet" />
          </Grid>
        );
      } else if (inTextExtractor) {
        return (
          <Grid fullWidth>
            <p>Click on a document's id or filename to view its text</p>

            {data.text.map((arr) => (
              <List key={arr._id}>
                <Link to={`/texts/${arr._id}`}>{arr._id}</Link>
                <Link to={`/texts/${arr._id}`}>{arr.page.fileName}</Link>
              </List>
            ))}
          </Grid>
        );
      } else {
        return (
          <InlineNotification
            role="alert"
            kind="error"
            timeout={5}
            title="Neither in text extractor nor in grader. How did you get here?"
          />
        );
      }
    } else {
      return (
        <InlineNotification
          role="alert"
          kind="error"
          timeout={5}
          title="Unable to retrieve content."
        />
      );
    }
  }
};

export default DisplayContent;
