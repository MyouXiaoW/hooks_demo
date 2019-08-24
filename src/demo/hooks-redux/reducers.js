import combineReducers from './combinreducers';
function countReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    default:
      return state;
  }
}

function dateRedoucer(state = +new Date(), action) {
  switch (action.type) {
    case 'MINUS':
      return 1111;
    default:
      return state;
  }
}

const reducers = combineReducers({countReducer, dateRedoucer});

export default reducers;
