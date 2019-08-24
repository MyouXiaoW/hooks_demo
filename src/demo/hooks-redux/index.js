import React from 'react';
import {Provider, connect} from './react-redux_hooks';

const ConnectParent = connect()(Parent);
const ConnectGrandSon = connect()(GrandSon);

function Parent(props) {
  const {dispatch} = props;
  return (
    <>
      <p
        onClick={() => {
          dispatch({type: 'ADD'});
        }}
      >
        +
      </p>
      <p
        onClick={() => {
          dispatch({type: 'MINUS'});
        }}
      >
        -
      </p>
      {props.children}
    </>
  );
}

function Son(props) {
  return <div>{props.children}</div>;
}

function GrandSon(props) {
  const {countReducer, dateRedoucer} = props;
  console.log('grandson', countReducer, dateRedoucer);
  return (
    <div>
      <p>{countReducer}</p>
      <p>{dateRedoucer}</p>
    </div>
  );
}

function Demo() {
  return (
    <Provider>
      <ConnectParent>
        <Son>
          <ConnectGrandSon />
        </Son>
      </ConnectParent>
    </Provider>
  );
}

export default Demo;
