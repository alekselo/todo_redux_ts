
import * as actionCreators from './TodoActionCreator'

type Actions = typeof actionCreators[keyof typeof actionCreators];

export type StateType = {
  id: string,
  text: string,
  completed: boolean,
};

const initialTodoState: Array<StateType> = [
    { id: '0', text: 'Learn React', completed: true },
    { id: '1', text: 'Learn Redux', completed: false },
    { id: '2', text: 'Build something fun!', completed: false },
]



export const reducer = (state = initialTodoState, action: ReturnType<Actions>): Array<StateType> => {
  switch (action.type) {
    case 'ADD':
      return [...state, {id: action.payload.id, text: action.payload.text, completed: action.payload.completed }]
    default:
      return state;
    
  }

} 