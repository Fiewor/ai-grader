import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import { UploadBox, ViewButton } from "../components";
import { useNavigate, useLocation } from "react-router-dom";

export const DisplayGrade = () => {
  const [score, setScore] = useState({ arr: [], grade: 0, totalPoints: 0 });
  const [loading, setLoading] = useState(undefined);

  const navigate = useNavigate();

  let query = new URLSearchParams(useLocation().search);
  const markId = query.get("markId");
  const answerId = query.get("answerId");

  useEffect(() => {
    const getGrade = async () => {
      let result = await axios.get(
        `/api/viewGrade?markId=${markId}&answerId=${answerId}`
      );
      console.log("received grade data", result.data);
      setScore({
        arr: result.data.arr,
        grade: result.data.grade,
        totalPoints: result.data.totalPoints,
      });
      setLoading(true);
    };
    getGrade();
  }, []);

  return (
    <Container>
      {!loading ? (
        <Player
          autoplay
          loop
          mode="normal"
          src={process.env.REACT_APP_LOAD_SCREEN_ANIMATION_TWO}
          speed="1"
          style={playerStyle}
        ></Player>
      ) : (
        <GradeContainer>
          <ul>
            {score.arr.map((score) => (
              <ListItem key={score.id}>
                Score for question {score.id + 1}: {score.score}/
                {score.pointsAwardable}
              </ListItem>
            ))}
          </ul>
          <p>{`Total score for this answer page is ${score.grade}/${score.totalPoints}`}</p>

          <ButtonContainer>
            <ViewButton children="View breakdown" path="/details" />
            <ViewButton children="Upload to Google Sheets" path="" />
          </ButtonContainer>
        </GradeContainer>
      )}
      <button onClick={() => navigate("/all-uploads")}>Go back</button>
    </Container>
  );
};

// * Styled components
const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GradeContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100vw;
  height: 70vh;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

const ListItem = styled.li`
  padding: 0.4rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  & > * {
    padding: 1rem 1.3rem;
  }
`;

const playerStyle = {
  background: "none",
  width: "100%",
  height: "100%",
};
