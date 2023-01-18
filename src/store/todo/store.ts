import { createStore } from 'redux';
import { reducer } from './TodoReducer';


export const store = createStore(reducer);

