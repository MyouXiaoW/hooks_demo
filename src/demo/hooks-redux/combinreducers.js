/*
combinreducer 要实现的
1.在函数中把所有的reducers都执行一遍
2.这个函数要遵循(previousState, action) => newState 
3.把每个reducer的initState合并成一个rootState

*/
function combineReducers(reducers) {
  return (state = {}, action) => {
    let rootState = {};
    for (let key in reducers) {
      rootState[key] = reducers[key](state[key], action);
    }

    return rootState;
  };
}

export default combineReducers;
