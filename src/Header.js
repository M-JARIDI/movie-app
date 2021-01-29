import React from "react";
import { useReducer } from "react";


const initialState = {
  typedInMovieTitle: "",
};

const ACTION = {
  TYPE_SEARCH: "TYPE_SEARCH",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.TYPE_SEARCH:
      return {
        ...state,
        typedInMovieTitle: action.value,
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onChange(event) {
    const action={
      type: ACTION.TYPE_SEARCH,
      value: event.target.value,
    };
    dispatch(action);
  }

  return (
      <div className="w-1/2 sm:auto md:auto lg:auto shadow-2xl mx-auto flex flex-col items-center">
        <div className="py-4">
          <span className="text-4xl font-light text-white  ">Movies Searcher</span>
        </div>
        <form>
          <input
            type="text"
            placeholder="Search"
            className=" rounded shadow-2xl outline-none py-2 px-2"
            onChange={onChange}
          />
          <input
            type="submit"
            value="Search"
            className=" rounded shadow-2xl outline-none py-2 px-2 mb-4 ml-2"
          />
        </form>
      </div>
  );
}

export default App;