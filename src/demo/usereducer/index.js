import React, {useReducer} from 'react';

function UseReducerDemo() {
  return <Count {...UseReducer()} />;
}

const initialState = {count: 0};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return {count: ++state.count};
    case 'MINUS':
      return {count: --state.count};
    default:
      return 0;
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {state, dispatch};
}

function Count({state, dispatch}) {
  return (
    <>
      <p>{state.count}</p>

      <button
        onClick={() => {
          dispatch({type: 'ADD'});
        }}
      >
        点击+
      </button>
      <br />
      <button
        onClick={() => {
          console.log('-');
          dispatch({type: 'MINUS'});
        }}
      >
        点击—
      </button>
    </>
  );
}
export default UseReducerDemo;
