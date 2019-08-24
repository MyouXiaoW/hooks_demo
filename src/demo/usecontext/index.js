import React, {createContext, useState, useContext} from 'react';

const ParentContext = createContext();

function UseContextDemo() {
  return (
    <Parent>
      <Chid />
    </Parent>
  );
}

function Parent(props) {
  const countObject = useState({count1: 1, count2: 2});
  return <ParentContext.Provider value={countObject}>{props.children}</ParentContext.Provider>;
}

function Chid() {
  const countObject = useContext(ParentContext);
  const [counts, setCounts] = countObject;
  return (
    <ul>
      <li>
        <p>{counts.count1}</p>
        <button
          onClick={() => {
            setCounts({...counts, count1: counts.count1 + 1});
          }}
        >
          点击增加count1
        </button>
      </li>
      <li>
        <p>{counts.count2}</p>
        <button
          onClick={() => {
            setCounts({...counts, count2: counts.count2 + 1});
          }}
        >
          点击增加count2
        </button>
      </li>
    </ul>
  );
}

export default UseContextDemo;
