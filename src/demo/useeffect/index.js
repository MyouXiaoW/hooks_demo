import React, {useState, useEffect} from 'react';

/*

    useEffect用来处理副作用。副作用包括DOM的改变、订阅、定时器、日志等。副作用不允许放到函数体中。
    useEffect/useLayoutEffect可以取代componentDidMount、componentDidUpdate、componentWillUnmount三个声明周期。



    第一个参数是一个函数，当组件首次渲染或者其依赖的状态改变时它会执行。该函数的返回值是可选的，可以不写，如果要写的话，必须是一个函数，用于清除上一个状态。
    第二个参数是可选的，它是一个数组。数组中可以传入状态值（通过useState产生的值），当状态值改变的时候首先会执行return函数，用于清理上一个状态，然后useEffect中的函数就会再次执行。

    如果不传入第二个参数，代表组件中任何状态的改变该effect都会执行一次，这通常不是我们想要的行为。
    如果第二个参数传递一个空数组，代表该effect仅会执行一次，相当于componentDidMount。return函数也只会在组件卸载的时候执行一次，相当于componentWillUnmount。
    如果第二个参数数组中有一个或多个状态（demo中的useLayEffect），那么只要有任意一个状态值发生变化，该effect都会再次执行。相当于componentDidUpdate。
*/

function UseEffectDemo() {
  const {value} = Counter(0);

  return <UseEffectUI value={value} />;
}

function Counter(initValue) {
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    let time = setTimeout(() => setValue(preValue => preValue + 1), 1000);

    return () => {
      clearInterval(time);
    };
  }, [value]);

  return {value, setValue};
}

function UseEffectUI(props) {
  return <p>{`Count:${props.value}`}</p>;
}

export default UseEffectDemo;
