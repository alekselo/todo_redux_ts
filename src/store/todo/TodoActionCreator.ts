
import { generateId } from "../../helpers/helper";

export const addTodo = (text: string) => {
  return {
    type: 'ADD' as const,
    payload: {id: generateId(), text, completed: false},
  }
};
 
export const deleteTodo = (id: string) => {
  return {
    type: 'DELETE' as const,
    payload: id,
  }
};
 
export const editTodo = (id: string, text: string) => {
  return {
    type: 'EDIT' as const,
    payload: {id,text}
  }
};
 
export const completeTodo = (id: string) => {
  return {
    type: 'COMPLETE' as const,
    payload: {id},
  }
};