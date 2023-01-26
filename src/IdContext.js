import { createContext, useReducer } from "react";

export const IdContext = createContext(null);
export const IdDispatchContext = createContext(null);

export function IdProvider({ children }) {
  const [ids, dispatch] = useReducer(idReducer, initialIds);

  return (
    <IdContext.Provider value={ids}>
      <IdDispatchContext value={dispatch}>{children}</IdDispatchContext>
    </IdContext.Provider>
  );
}

function idReducer(ids, action) {
  switch (action.type) {
    case "checked": {
      return {
        ...ids,
        isChecked: !ids.isChecked,
        // checked: action.checked,
      };
    }

    case "toggle_store": {
      return {
        ...ids,
        [action.key]: ids.isChecked
          ? [...ids[action.key], action.id]
          : ids[action.key].filter((val) => val !== action.id),
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialIds = {
  markIds: [],
  answerIds: [],
  isChecked: false,
};
