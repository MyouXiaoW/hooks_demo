import React, {createContext, useContext} from 'react';
import CreateStore from './createStore';
import applyMiddleWare from './applyMiddleWare';
import reducers from './reducers';
import logger from './middleware';

const Context = createContext();

function Provider({children}) {
  const store = CreateStore(reducers, applyMiddleWare(logger));

  return <Context.Provider value={store}>{children}</Context.Provider>;
}

function connect(map2state, map2dispatch) {
  return WrappedComponent => {
    function Connect(props) {
      const {state, dispatch} = useContext(Context);
      return <WrappedComponent {...props} {...state} dispatch={dispatch} />;
    }

    return Connect;
  };
}

export {Provider, connect};
