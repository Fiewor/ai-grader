import React, { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";

export const DisplayArea = () => {
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(undefined);

  //! TO-DO: after grading logic is done, display result of grading
  useEffect(() => {
    const getText = async () => {
      let result = await axios.get(
        `${
          process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_LIVE_API_URL
            : process.env.REACT_APP_LOCAL_API_URL
        }viewText`
      );
      setText([result.data]);
      setLoading(true);
    };
    getText();
  }, []);
  console.log("data", text);

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
        text.map((result, _id) => (
          <div>
            <h2 key={_id}>{result.readText}</h2>
            {result.keyPhrases.map((item, id) => (
              <p key={id}>{item}</p>
            ))}
          </div>
        ))
      )}
    </>
  );
};
