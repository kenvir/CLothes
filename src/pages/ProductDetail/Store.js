import { createStore } from 'redux';

// Reducer
const quantityReducer = (state = 1, action) => {
  switch (action.type) {
    case 'SET_QUANTITY':
      return action.payload;
    default:
      return state;
  }
};

// Store
const store = createStore(quantityReducer);

export default store;
