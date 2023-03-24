import { actions, initialState } from './actions';
import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

//Context and Provider
export const TodoListContext = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    todoList: state.todoList,
    addTodoItem: (todoItemLabel) => {
      dispatch({ type: actions.ADD_TODO_ITEM, todoItemLabel });
    },
    removeTodoItem: (todoItemId) => {
      dispatch({ type: actions.REMOVE_TODO_ITEM, todoItemId });
    },
    markAsCompleted: (todoItemId) => {
      dispatch({ type: actions.TOGGLE_COMPLETED, todoItemId });
    }
  };

  return (
    <TodoListContext.Provider value={value}>
      {children}
    </TodoListContext.Provider>
  );
};