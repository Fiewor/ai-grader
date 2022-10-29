import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useNavigate } from "react-router-dom";
import { ViewButton } from "../components/index";

export const DisplayContent = ({ route }) => {
  const [data, setData] = useState({
    answerDoc: [],
    markDoc: [],
    text: [],
  });
  const [loading, setLoading] = useState(undefined);
  const [ids, setIds] = useState({
    markId: null,
    answerId: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getTextData = async () => {
      // ! TO-DO: specify collection from which to retrieve texts
      let result = await axios.get(`/api/${route}`);
      if (result.status !== 200) {
        alert(`Unable to retrieve text from database`);
      } else {
        const { answerDoc, markDoc } = result.data;
        if (answerDoc && markDoc) {
          setData((data) => ({
            ...data,
            answerDoc,
            markDoc,
          }));
        }
        setData((data) => ({
          ...data,
          text: result.data,
        }));
        setLoading(true);
      }
    };
    getTextData();
  }, []);

  const deleteItem = async (e, id) => {
    const doc = e.target.name;
    const deleteData = await axios.delete(`/api/all-uploads/${doc}/${id}`);
    if (deleteData) {
      // if data was successfully deleted from database
      if (doc === "answerSheet") {
        const updatedDoc = data.answerDoc.filter((el) => id !== el._id);
        setData({
          ...data,
          answerDoc: updatedDoc,
        });
      } else {
        const updatedDoc = data.markDoc.filter((el) => id !== el._id);
        setData({ ...data, markDoc: updatedDoc });
      }
    }
  };

  return (
    <>
      {!loading ? (
        <Player
          autoplay
          loop
          mode="normal"
          src={process.env.REACT_APP_LOAD_SCREEN_ANIMATION_ONE}
          speed="1"
          style={{ width: "70%" }}
        ></Player>
      ) : (
        <>
          {data.answerDoc.length || data.markDoc.length ? (
            <>
              {console.log("markDoc: ", data.markDoc)}
              {data.answerDoc ? (
                <>
                  <P>
                    Select the answer documents that you would like to grade
                  </P>
                  <p>
                    You can click on a document's id or filename to view its
                    text
                  </p>
                  {data.answerDoc.map((arr) => (
                    <List key={arr._id}>
                      <input
                        // type={route === "mark" ? "radio" : "checkbox"} //! use this after implementing basic checkbox select logic
                        type="checkbox"
                        name="answerSheet"
                        value={ids.answerId}
                        onChange={(e) =>
                          e.target.checked
                            ? setIds((ids) => ({ ...ids, answerId: arr._id }))
                            : setIds((ids) => ({ ...ids, answerId: null }))
                        }
                      />
                      <Link to={`/texts/${arr._id}`}>{arr._id}</Link>
                      <Link to={`/texts/${arr._id}`}>{arr.page.fileName}</Link>
                      <button
                        onClick={(e) => deleteItem(e, arr._id)}
                        name="answerSheet"
                      >
                        Delete
                      </button>
                    </List>
                  ))}
                </>
              ) : (
                <p>
                  No answer sheet has been uploaded.{" "}
                  <Link to="/grade">Upload one now</Link>
                </p>
              )}
              {data.markDoc ? (
                <>
                  <P>
                    Select the marking guide to be used for grading the
                    seelected answer documents
                  </P>
                  <p>
                    You can click on a document's id or filename to view its
                    text
                  </p>
                  {data.markDoc.map((arr) => (
                    <List key={arr._id}>
                      <input
                        type="checkbox"
                        name="markSheet"
                        value={ids.markId}
                        onChange={(e) =>
                          e.target.checked
                            ? setIds((ids) => ({ ...ids, markId: arr._id }))
                            : setIds((ids) => ({ ...ids, markId: null }))
                        }
                      />
                      <Link to={`/texts/${arr._id}`}>{arr._id}</Link>
                      <Link to={`/texts/${arr._id}`}>{arr.page.fileName}</Link>
                      <button
                        onClick={(e) => deleteItem(e, arr._id)}
                        name="markSheet"
                      >
                        Delete
                      </button>
                    </List>
                  ))}
                </>
              ) : (
                <p>
                  No marking guide has been uploaded.{" "}
                  <Link to="/grade">Upload one now</Link>
                </p>
              )}
              <ViewButton
                children="Grade"
                path={`/viewGrade?markId=${ids.markId}&answerId=${ids.answerId}`}
              />
            </>
          ) : (
            <>
              <P>Click on a document's id or filename to view its text</P>

              {data.text.map((arr) => (
                <List key={arr._id}>
                  <Link to={`/texts/${arr._id}`}>{arr._id}</Link>
                  <Link to={`/texts/${arr._id}`}>{arr.page.fileName}</Link>
                </List>
              ))}
            </>
          )}
          <button onClick={() => navigate("/grade")}>Go back</button>
        </>
      )}
    </>
  );
};

// * Styled components
export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
  padding: 0.3rem;
  width: 100%;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
  height: 100%;
  &:first-of-type {
    margin-top: 3rem;
  }
`;

export const P = styled.p`
  margin-top: 2rem;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
