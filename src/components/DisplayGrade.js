import React, { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";

export const DisplayGrade = () => {
  const [score, setScore] = useState({ arr: [], grade: 0, totalPoints: 0 });
  const [loading, setLoading] = useState(undefined);

  useEffect(() => {
    const getGrade = async () => {
      let result = await axios.get(
        `${process.env.REACT_APP_LOCAL_API_URL}viewGrade`
      );
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
        <div>
          <ul>
            {score.arr.map((score) => (
              <li key={score.id}>
                Score for question {score.id}: {score.grade}/
                {score.pointsAwardable}
              </li>
            ))}
          </ul>
          <p>{`Total score for this answer page is ${score.grade}/${score.totalPoints}`}</p>
        </div>
      )}
    </>
  );
};
