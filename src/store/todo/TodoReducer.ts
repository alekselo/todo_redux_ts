
import * as actionCreators from './TodoActionCreator'

type Actions = typeof actionCreators[keyof typeof actionCreators];

export type StateType = {
  id: string,
  text: string,
  completed: boolean,
};

const initialTodoState: Array<StateType> =[]




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
      return state.map((task) => task.id === action.payload.id ? {...task, text: action.payload.text} : task);
 
    default:
      return state;
    
  }
} 

