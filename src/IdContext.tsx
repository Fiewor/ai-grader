import React, { createContext, useReducer, FC, Dispatch } from "react";

export const IdContext = createContext<IdContextType>(null);
export const IdDispatchContext = createContext<IdDispatchContextType>(null);

type IdContextType = Id | null;
type IdDispatchContextType = Dispatch<IAction> | null;

export const IdProvider: FC<Props> = ({ children }) => {
  const [ids, dispatch] = useReducer(idReducer, initialIds);

  return (
    <IdContext.Provider value={ids}>
      <IdDispatchContext.Provider value={dispatch}>
        {children}
      </IdDispatchContext.Provider>
    </IdContext.Provider>
  );
};

function idReducer(ids: Id, action: IAction) {
  switch (action.type) {
    case "checked": {
      return {
        ...ids,
        isChecked: !ids.isChecked,
        // checked: action.checked,
      };
    }

    case "toggle_store": {
      if (action.key === "markIds" || action.key === "answerIds") {
        return {
          ...ids,
          [action.key]: ids.isChecked
            ? [...ids[action.key], action.id]
            : ids[action.key].filter((val) => val !== action.id),
        };
      }
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

interface Id {
  markIds: string[];
  answerIds: string[];
  isChecked: boolean;
}

interface Props {
  children: React.ReactNode;
}

interface IAction {
  type: string;
  key?: string;
  id?: string | number;
}
