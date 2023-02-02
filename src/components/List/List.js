import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { Checkbox, UnorderedList, ListItem, RadioButton } from "@carbon/react";
import { IdDispatchContext } from "../../IdContext";

const List = ({ doc, sheet }) => {
  const dispatch = useContext(IdDispatchContext);

  function handleCheckBoxState(checked) {
    dispatch({
      type: "CHECKED",
      checked,
    });
  }

  function toggleCheck(key, id) {
    dispatch({
      type: "TOGGLE_STORE",
      key,
      id,
    });
  }

  function setCheckedSheet(key) {
    dispatch({
      type: "SET_CHECKED_SHEET",
      key,
    });
  }

  return (
    <UnorderedList className="list">
      {doc?.map(({ _id, page: { fileName } }, i) => {
        const idKey = sheet === "markSheet" ? "markIds" : "answerIds";

        return (
          <ListItem key={_id} className="list-item">
            {sheet === "markSheet" ? (
              <Checkbox
                name={idKey}
                id={_id}
                value={fileName}
                labelText={fileName}
                // className="radio"
                onChange={(_, { checked, id }) => {
                  toggleCheck(idKey, _id);
                  setCheckedSheet(idKey);
                }}
              />
            ) : (
              <Checkbox
                name={idKey}
                id={_id}
                value={fileName}
                labelText={fileName}
                onChange={(_, { checked, id }) => {
                  toggleCheck(idKey, _id);
                  setCheckedSheet(idKey);
                }}
              />
            )}

            {/* add link so user can view */}
            {/* <Link to={`/texts/${_id}`}>{fileName}</Link> */}
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};

export default List;
