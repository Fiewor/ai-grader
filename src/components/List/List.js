import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { Checkbox, UnorderedList, ListItem } from "@carbon/react";
import { IdDispatchContext } from "../../IdContext";

const List = ({ doc, sheet }) => {
  const dispatch = useContext(IdDispatchContext);

  function handleCheckBoxState(checked) {
    dispatch({
      type: "checked",
      checked,
    });
  }

  function toggleCheck(key, id) {
    dispatch({
      type: "toggle_store",
      key,
      id,
    });
  }

  return (
    <UnorderedList className="list">
      {doc?.map(({ _id, page: { fileName } }, i) => {
        const idKey = sheet === "markSheet" ? "markIds" : "answerIds";

        return (
          <ListItem key={_id} className="list-item">
            <Checkbox
              name={idKey}
              id={_id}
              labelText={fileName}
              onChange={(_, { checked, id }) => {
                handleCheckBoxState(checked);
                toggleCheck(idKey, id);
              }}
            />

            {/* add link so user can view */}
            {/* <Link to={`/texts/${_id}`}>{fileName}</Link> */}
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};

export default List;
