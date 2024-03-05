import { v4 as uuidv4 } from "uuid";
import { createContext, useReducer } from "react";

// 5. The reduceer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((item) => item.id !== action.payload),
      };

    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case "EDIT_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };

    default:
      return state;
  }
};

const localResulted = JSON.parse(localStorage.getItem("budget-data"));

// 1. Sets the initial state when the app loads

const initialState = {
  budget: 40000,
  expenses: !localResulted
    ? [
        { id: uuidv4(), text: "Shopping", cost: 4500 },
        { id: uuidv4(), text: "Makeup", cost: 2500 },
        { id: uuidv4(), text: "groceries", cost: 8000 },
        { id: uuidv4(), text: "newsPaper", cost: 500 },
        { id: uuidv4(), text: "Milk", cost: 4500 },
      ]
    : localResulted,
};

// 2. Creates the context this is the thing our components import and use to get the state

export const AppContext = createContext(); //created context

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components

export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // 5. Returns our context. Pass in the values we want to expose

  return (
    <AppContext.Provider
      value={{ budget: state.budget, expenses: state.expenses, dispatch }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
