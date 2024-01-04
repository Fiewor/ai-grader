import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { Grid, Column, ActionableNotification, Button } from "@carbon/react";
import ProgressBar from "@carbon/react/lib/components/ProgressBar/ProgressBar";
import { ArrowUpRight } from "@carbon/react/icons";
import { IdContext } from "../../IdContext";

import axios from "../../axios";

const Grades = () => {
  const nav = useNavigate();
  const ids = useContext(IdContext);
  // console.log("id state: ", ids);

  const [score, setScore] = useState({
    scoreArray: [],
    grade: 0,
    totalPoints: 0,
  });
  //   const navigate = useNavigate();

  const { answerIds, markIds } = ids;
  const answerUrl = answerIds?.join() || "";
  const markUrl = markIds?.join() || "";

  console.log("route: ", `/grades?markId=${markUrl}&answerId=${answerUrl}`);

  const {
    status,
    isFetching,
    isLoading,
    error,
    isError,
    isSuccess,
    data,
    refetch,
  } = useQuery(
    "score",
    async () =>
      await axios.get(`api/grades?markId=${markUrl}&answerId=${answerUrl}`),
    {
      retry: 3,
    }
  );

  if (isFetching || isLoading) {
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
  } else if (isError) {
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
  } else if (isSuccess) {
    if (data) {
      if (data.status === 200) {
        const { data: result } = data;
        return (
          <Grid fullWidth className="">
            <Column lg={16} md={8} sm={4} className="">
              <ul>
                {result?.arr.map((score) => (
                  <li key={score.id} className="score">
                    Score for question {score.id + 1}: {score.score}/
                    {score.pointsAwardable}
                  </li>
                ))}
              </ul>
              <p className="total">{`Total score for this answer page is ${result.grade}/${result.totalPoints}`}</p>
              <div className="button-container">
                <Button
                  kind="primary"
                  className=""
                  // renderIcon={ArrowUpRight}
                  onClick={() => nav("/details")}
                  // disabled={}
                >
                  View Details
                </Button>

                <Button
                  kind="tertiary"
                  className=""
                  // renderIcon={ArrowUpRight}
                  // onClick={() => nav('/viewUploads)}
                  disabled={true}
                >
                  View Original Upload
                </Button>

                <Button
                  kind="tertiary"
                  className=""
                  renderIcon={ArrowUpRight}
                  // onClick={(e) => uploadFiles(section, e)}
                  disabled={true}
                >
                  Upload Scores to Google Sheets
                </Button>
              </div>
            </Column>
          </Grid>
        );
      }
    } else {
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
  }
};

export default Grades;
