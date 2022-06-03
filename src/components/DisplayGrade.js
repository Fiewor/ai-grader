import React, { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";

export const DisplayGrade = () => {
  const [score, setScore] = useState({ grade: 0, totalPoints: 0 });
  const [loading, setLoading] = useState(undefined);

  useEffect(() => {
    const getGrade = async () => {
      let result = await axios.get(
        `${
          process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_LIVE_API_URL
            : process.env.REACT_APP_LOCAL_API_URL
        }viewGrade`
      );
      setScore({
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
        <p>{`Total score for this answer page is ${score.grade}/${score.totalPoints}`}</p>
      )}
    </>
  );
};
