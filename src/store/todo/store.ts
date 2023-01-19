import { combineReducers, createStore  } from 'redux';
import { reducer } from './TodoReducer';

const rootReducer = combineReducers({
  todo: reducer,
})

export const store = createStore(rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>;