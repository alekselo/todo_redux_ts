
import { taskCancelled } from '@reduxjs/toolkit/dist/listenerMiddleware/exceptions';
import { act } from 'react-dom/test-utils';
import { useSelector } from 'react-redux';
import { TodoList } from '../../components/TodoList/TodoList';
import * as actionCreators from './TodoActionCreator'

type Actions = typeof actionCreators[keyof typeof actionCreators];

export type StateType = {
  id: string,
  text: string,
  completed: boolean,
};

const initialTodoState: Array<StateType> = [
    { id: '0', text: 'Learn React', completed: false },
    { id: '1', text: 'Learn Redux', completed: true },
    { id: '2', text: 'Build something fun!', completed: true },
]




export const reducer = (state = initialTodoState, action: ReturnType<Actions>): Array<StateType> => {
  
  
  switch (action.type) {
    case 'ADD':
      return [...state, { id: action.payload.id, text: action.payload.text, completed: action.payload.completed }];
    case 'DELETE':
      return [...state.filter((item => item.id !== action.payload))];
    case 'COMPLETE':
      return state.map(task =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task
      );
    case 'EDIT':
      return state.map((task) => ({ ...task, text: task.id === action.payload.id ? action.payload.text : task.text }));
    default:
      return state;
    
  }

} 


