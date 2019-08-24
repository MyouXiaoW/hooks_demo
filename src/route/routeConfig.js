import React from 'react';
import * as routes from './routes';

function Home() {
  return (
    <>
      <div>Home</div>
      <br />
      <a href="/usestate">useState</a>
      <br />
      <a href="/useeffect">useEffect</a>
      <br />
      <a href="/uselayouteffect">useLayoutEffect</a>
      <br />
      <a href="/useref">useref</a>
      <br />
      <a href="/usecontext">usecontext</a>
      <br />
      <a href="/usereducer">usereducer</a>
      <br />
      <a href="/hooksredux">hooksredux</a>
    </>
  );
}

export default [
  {
    path: '/',
    key: '/',
    exact: true,
    component: Home,
    routes: []
  },
  {
    path: '/usestate',
    key: 'usestate',
    exact: true,
    component: routes.UseStateLazy
  },
  {
    path: '/useeffect',
    key: '/useeffect',
    exact: true,
    component: routes.UseEffectLazy
  },
  {
    path: '/uselayouteffect',
    key: '/uselayouteffect',
    exact: true,
    component: routes.UseLayoutEffectLazy
  },
  {
    path: '/useref',
    key: '/useref',
    exact: true,
    component: routes.UseRefLazy
  },
  {
    path: '/usecontext',
    key: '/usecontext',
    exact: true,
    component: routes.UseContextLazy
  },
  {
    path: '/usereducer',
    key: '/usereducer',
    exact: true,
    component: routes.UseReducerLazy
  },
  {
    path: '/hooksredux',
    key: '/hooksredux',
    exact: true,
    component: routes.HooksReduxLazy
  }
];
