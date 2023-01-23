import React, { useState, useEffect } from "react";
import { Grid, Column, Button } from "@carbon/react";
import ProgressBar from "@carbon/react/lib/components/ProgressBar/ProgressBar";
import { Link } from "react-router-dom";
import axios from "../../axios";

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
  }, []);

  const helperText = loading ? "Fetching documents" : "Done";
  if (loading) {
    return (
      <Grid className="login-page">
        <Column lg={7} md={4} sm={2} className="login-page__left">
          <ProgressBar
            // value={loading ? progress : null}
            status={status}
            label="Fetching uploaded documents"
            helperText={helperText}
          />
        </Column>
      </Grid>
    );
  }
  console.log("loading: ", loading);
  console.log("success: ", success);
  if (success) {
    return inGrader ? (
      data.answerDoc ? (
        <Grid>
          <Column lg={16} md={8} sm={4} className="">
            <p>Select the answer documents that you would like to grade</p>
          </Column>
          <Column lg={16} md={8} sm={4} className="">
            <p>You can click on a document's id or filename to view its text</p>
          </Column>
        </Grid>
      ) : (
        <Column lg={16} md={8} sm={4} className="">
          <p>
            No answer sheet has been uploaded.
            <Link to="/grade">Upload one now</Link>
          </p>
        </Column>
      )
    ) : (
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="">
          <p>Click on a document's id or filename to view its text</p>
        </Column>
        <Column lg={16} md={8} sm={4} className="">
          {data.text.map((arr) => (
            <ul key={arr._id}>
              <Link to={`/texts/${arr._id}`}>{arr._id}</Link>
              <Link to={`/texts/${arr._id}`}>{arr.page.fileName}</Link>
            </ul>
          ))}
        </Column>
      </Grid>
    );
  }
};

export default DisplayContent;
