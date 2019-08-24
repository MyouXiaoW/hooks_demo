function applyMiddleWare(middleware) {
  return (state, dispatch) => {
    middleware(state);
    return dispatch;
  };
}

export default applyMiddleWare;
