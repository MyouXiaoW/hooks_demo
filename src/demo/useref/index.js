import React, {useRef, useEffect, useState} from 'react';

/*
useRef接受一个初始值，返回一个可变的ref对象，ref.current指向初始化的值。它可以指向别的值。
 */

function UseRefDemo() {
  const inputRef = useRef('');

  //useRef 的另一种用法,代替this指向
  const timeRef = useRef(null);

  useEffect(() => {
    timeRef.current = setTimeout(() => {
      inputRef.current.value = 'hello';
    }, 1000);
    return () => {
      clearInterval(timeRef.current);
    };
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        onChange={e => {
          const {value} = e.target;
          inputRef.current.value = value;
        }}
      />
      <p>{}</p>
    </>
  );
}

export default UseRefDemo;
