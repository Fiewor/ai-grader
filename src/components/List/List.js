import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { Checkbox, UnorderedList, ListItem } from "@carbon/react";
import { IdContext, IdDispatchContext } from "../../IdContext";

const List = ({ doc, sheet }) => {
  const ids = useContext(IdContext);
  const dispatch = useContext(IdDispatchContext);
  function handleChecked(checked) {
    dispatch({
      type: "checked",
      checked,
    });
  }

  function toggle_store(key, id) {
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
                handleChecked(checked);
                toggle_store(checked, id);
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
