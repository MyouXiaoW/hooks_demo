import {useReducer} from 'react';

function CreateStore(reducer, applyMiddleWare) {
  const initalState = reducer({}, {});
  let [state, dispatch] = useReducer(reducer, initalState);

  return {state, dispatch: applyMiddleWare(state, dispatch)};
}

export default CreateStore;
