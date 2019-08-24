import React, {useState, useEffect, useLayoutEffect} from 'react';

/*
useEffect是在组件状态改变后，并且在组件layout和paint之后，
也就是说组件出现在页面后再进行调用。useLayoutEffect是在组件状态改变后，
但是在组件layout和paint之前，也就是在组件出现在页面之前进行调用。
*/

function UseLayoutEffectDemo() {
  return <UseLayoutEffectUI {...InitState('')} />;
}

function InitState(initState) {
  const [value, setValue] = useState(initState);
  const [length, setLength] = useState(value.length);

  useLayoutEffect(() => {
    if (value.length > 10) {
      setValue(value.substring(0, 10));
    }
    setLength(value.length);
  }, [value]);

  return {value, setValue, length};
}

function UseLayoutEffectUI({value, setValue, length}) {
  return (
    <>
      <input
        type="text"
        value={value}
        placeholder={'最大的长度为10'}
        onChange={e => {
          const {value} = e.target;
          setValue(value);
        }}
      />
      <p>{length}</p>
    </>
  );
}

export default UseLayoutEffectDemo;
