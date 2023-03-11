import React, { useContext } from "react";
import {
  Grid,
  Column,
  ActionableNotification,
  Button,
  UnorderedList,
  ListItem,
} from "@carbon/react";
import { useQuery } from "react-query";
import ProgressBar from "@carbon/react/lib/components/ProgressBar/ProgressBar";
import axios from "../../axios";
import { IdContext } from "../../IdContext";

const Details = () => {
  const ids = useContext(IdContext);
  //   console.log("ids in details component: ", ids);
  const { status, isLoading, error, isError, isSuccess, data, refetch } =
    useQuery(
      "answerDetails",
      async () =>
        //! TODO: change this get request to get the answer details for an array of answer ids
        await axios.get(`api/docs/answerSheet/${ids.answerIds[0]}`),
      {
        retry: 3,
        refetchOnWindowFocus: true,
      }
    );
  if (isError) {
    return (
      <Grid fullWidth className="">
        <Column lg={8} md={4} sm={2} className="error">
          <ActionableNotification
            title="Error"
            subtitle={error.message}
            closeOnEscape
            inline={false}
            kind="error"
            timeout={5}
            actionButtonLabel="Retry"
            onActionButtonClick={() => refetch()}
            className="error"
          />
        </Column>
      </Grid>
    );
  }

  if (isLoading) {
    return (
      <Grid fullWidth className="">
        <Column lg={8} md={8} sm={4} className="loading">
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
  }

  if (isSuccess) {
    if (data) {
      if (data.status === 200) {
        console.log("data in details: ", data);
        const {
          data: {
            page: { textByNumber },
          },
        } = data;

        if (textByNumber.length) {
          return (
            <Grid fullWidth>
              <Column lg={16} md={8} sm={4} className="">
                <h2>Answer Details</h2>
                {textByNumber.map(({ id, phrases, text, _id }) => {
                  return (
                    <div className="block">
                      <p>
                        <em>{id}. </em> {text}
                      </p>

                      <p style={{ textDecoration: "underline" }}>
                        <em>Key phrases:</em>
                      </p>
                      <UnorderedList className="keyphrase-list">
                        {phrases.map((phrase) => (
                          <ListItem>{phrase}</ListItem>
                        ))}
                      </UnorderedList>
                    </div>
                  );
                })}
              </Column>
            </Grid>
          );
        }
      } else {
        return (
          <ActionableNotification
            role="alert"
            kind="error"
            timeout={5}
            closeOnEscape
            inline={false}
            title="Fetch was successful but there's no data."
          />
        );
      }
    } else {
      return (
        <ActionableNotification
          kind="error"
          timeout={5}
          title="No data was returned"
          closeOnEscape
          inline={false}
          actionButtonLabel="Retry"
          onActionButtonClick={() => refetch()}
        />
      );
    }
  }
};

export default Details;
