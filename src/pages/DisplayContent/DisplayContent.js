import React, { useState, useEffect } from "react";
import {
  Grid,
  Column,
  InlineNotification,
  ActionableNotification,
} from "@carbon/react";
import { useQuery } from "react-query";
import ProgressBar from "@carbon/react/lib/components/ProgressBar/ProgressBar";
import { Link } from "react-router-dom";
import axios from "../../axios";
import ListAndHeader from "../../components/ListAndHeader";
import List from "../../components/List";

const DisplayContent = ({ route }) => {
  const { status, isLoading, error, isError, isSuccess, data, refetch } =
    useQuery("content", async () => await axios.get(`api/${route}`), {
      retry: 3,
    });
  const [inGrader, setInGrader] = useState(false);
  const [inTextExtractor, setInTextExtractor] = useState(false);
  // const [data, setData] = useState({
  //   answerDoc: [],
  //   markDoc: [],
  //   text: [],
  // });
  console.log("state values: ");
  // console.log("inGrader: ", inGrader);
  // console.log("----------------------");

  // useEffect(() => {
  //      else {
  //       const { answerDoc, markDoc } = result.data;

  //       if (answerDoc && markDoc) {
  //         setData((data) => ({
  //           ...data,
  //           answerDoc,
  //           markDoc,
  //         }));
  //         setInGrader(true);
  //       } else {
  //         setData((data) => ({
  //           ...data,
  //           text: result.data,
  //         }));
  //         setInTextExtractor(true);
  //       }
  //       setLoading(false);
  //       setStatus("finished");
  //       setSuccess(true);
  //     }
  //   };
  //   getTextData();
  // }, [route]);

  if (isLoading) {
    console.log("isLoading: ", isLoading);
    return (
      <Grid fullWidth className="">
        <Column lg={7} md={4} sm={2} className="">
          <ProgressBar
            status={
              status === "loading"
                ? "active"
                : status === "error"
                ? "error"
                : "finished"
            }
            label="Fetching uploaded documents"
            helperText={isLoading ? "Fetching" : isSuccess ? "Done" : "Failed"}
          />
        </Column>
      </Grid>
    );
  } else if (isSuccess) {
    if (data) {
      if (data.status === 200) {
        const {
          data: { answerDoc, markDoc },
        } = data;

        if (answerDoc.length && markDoc.length) {
          return (
            <Grid fullWidth>
              <ListAndHeader doc={answerDoc} sheet="answerSheet" />
              <ListAndHeader doc={markDoc} sheet="markSheet" />
            </Grid>
          );
        } else {
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
        }
      } else {
        return (
          <InlineNotification
            role="alert"
            kind="error"
            timeout={5}
            title="Fetch was successful but there's no data."
          />
        );
      }
    } else {
      return (
        <InlineNotification
          role="alert"
          kind="error"
          timeout={5}
          title="No data was returned"
        />
      );
    }
  } else if (isError) {
    return (
      <ActionableNotification
        title="Error"
        subtitle={error.message}
        closeOnEscape
        inline={false}
        kind="error"
        timeout={5}
        actionButtonLabel="Retry"
        onActionButtonClick={() => refetch()}
      />
    );
  }
};

export default DisplayContent;
