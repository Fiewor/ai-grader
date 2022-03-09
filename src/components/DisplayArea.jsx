import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayArea = () => {
  const [text, setText] = useState([]);
  //! TO-DO: after grading logic is done, display result of grading

  useEffect(() => {
    const getText = async () => {
      let result = await axios.get(`http://localhost:3001/viewText`);
      setText(result.data);
    };
    getText();
  }, [text.length]);

  console.log("data", text);

  return (
    <>
      {text.map((result) => {
        return (
          <div>
            <h2>{result.readText}</h2>
            {result.keyPhrases.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default DisplayArea;
