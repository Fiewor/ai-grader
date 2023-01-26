import React, { useState, useEffect } from "react";
import {
  Grid,
  Column,
  InlineNotification,
  ActionableNotification,
  Button,
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

  if (isLoading) {
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
              <Column lg={16} md={8} sm={4} className="list-container">
                <Button>Grade</Button>
              </Column>
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
