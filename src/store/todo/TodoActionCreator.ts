import { generateId } from "../../helpers/helper";

export const addTodo = (text: string) => {
  return {
    type: 'ADD' as const,
    payload: {id: generateId(), text, completed: false},
  }
};
 
export const deleteTodo = () => {
  return {
    type: 'DELETE' as const,
    payload: '',
  }
};
 
export const editTodo = () => {
  return {
    type: 'EDIT' as const,
    payload: {},
  }
};
 
export const completeTodo = () => {
  return {
    type: 'COMPLETE' as const,
    payload: '',
  }
};