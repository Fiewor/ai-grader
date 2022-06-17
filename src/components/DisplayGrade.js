import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";

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
`;

const ListItem = styled.li`
  padding: 0.4rem;
`;

export const DisplayGrade = () => {
  const [score, setScore] = useState({ arr: [], grade: 0, totalPoints: 0 });
  const [loading, setLoading] = useState(undefined);

  useEffect(() => {
    const getGrade = async () => {
      let result = await axios.get(`http://localhost:3001/viewGrade`);
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
    <>
      {!loading ? (
        <Player
          autoplay
          loop
          mode="normal"
          src={process.env.REACT_APP_LOAD_SCREEN_ANIMATION}
          speed="1"
          style={{ width: "70%" }}
        ></Player>
      ) : (
        <GradeContainer>
          <ul>
            {score.arr.map((score) => (
              <ListItem key={score.id}>
                Score for question {score.id}: {score.grade}/
                {score.pointsAwardable}
              </ListItem>
            ))}
          </ul>
          <p>{`Total score for this answer page is ${score.grade}/${score.totalPoints}`}</p>
        </GradeContainer>
      )}
    </>
  );
};
