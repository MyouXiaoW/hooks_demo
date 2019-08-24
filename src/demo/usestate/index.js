import React, {useState} from 'react';
import './usestate.css';

function UseStateDemo() {
  const state = UseState(0);
  return <UseStateUI value={state.value} setValue={state.setValue} />;
}

function UseState(initValue) {
  const [value, setValue] = useState(initValue);

  return {value, setValue};
}

function UseStateUI(props) {
  return (
    <div>
      <p>{`value:${props.value}`}</p>
      <button
        onClick={() => {
          props.setValue(props.value + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.setValue(props.value - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default UseStateDemo;
