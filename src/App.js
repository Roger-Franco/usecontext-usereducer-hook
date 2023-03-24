import './App.css';
import { AddTodo } from './component/AddTodo';
import { TodoList } from './component/TodoList';
import { Provider } from './context/provider';

function App() {
  return (
    <Provider>
      <AddTodo />
      <TodoList />
    </Provider>
  );
}

export default App;
