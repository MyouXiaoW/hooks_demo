import React, {lazy, Suspense} from 'react';

const UseState = lazy(() => import('../demo/usestate'));
const UseEffect = lazy(() => import('../demo/useeffect'));
const UseLayoutEffect = lazy(() => import('../demo/uselayouteffect'));
const UseRef = lazy(() => import('../demo/useref'));
const UseContext = lazy(() => import('../demo/usecontext'));
const UseReducer = lazy(() => import('../demo/usereducer'));
const HooksRedux = lazy(() => import('../demo/hooks-redux'));
export const UseStateLazy = props => (
  <Suspense fallback={<div>Loading ...</div>}>
    <UseState {...props} />
  </Suspense>
);

export const UseEffectLazy = props => (
  <Suspense fallback={<div>Loading ...</div>}>
    <UseEffect {...props} />
  </Suspense>
);

export const UseLayoutEffectLazy = props => (
  <Suspense fallback={<div>Loading ...</div>}>
    <UseLayoutEffect {...props} />
  </Suspense>
);

export const UseRefLazy = props => (
  <Suspense fallback={<div>Loading ...</div>}>
    <UseRef {...props} />
  </Suspense>
);

export const UseContextLazy = props => (
  <Suspense fallback={<div>Loading ...</div>}>
    <UseContext {...props} />
  </Suspense>
);

export const UseReducerLazy = props => (
  <Suspense fallback={<div>Loading ...</div>}>
    <UseReducer {...props} />
  </Suspense>
);

export const HooksReduxLazy = props => (
  <Suspense fallback={<div>Loading ...</div>}>
    <HooksRedux {...props} />
  </Suspense>
);
