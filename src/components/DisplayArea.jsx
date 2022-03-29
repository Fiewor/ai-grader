import React, { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";

export const DisplayArea = () => {
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(undefined);

  //! TO-DO: after grading logic is done, display result of grading
  useEffect(() => {
    const getText = async () => {
      let result = await axios.get(`http://localhost:3001/viewText`);
      setText([result.data]);
      setLoading(true);
    };
    getText();
  }, []);

  // useEffect(()=>{
  //   const getGrade = async () => {
  //     let grade = await axios.get(`http:localhost:3001/gradeResult`)
  //     console.log("grade data", grade)
  //   }
  // })

  console.log("data", text);

  return (
    <>
      {!loading ? (
        <Player
          autoplay
          loop
          mode="normal"
          src="https://assets1.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data.json"
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
