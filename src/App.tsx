import './App.css';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import {useState} from 'react';
import Todo from './models/todo';


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter(todo => todo.id !== id)
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveItem={removeTodoHandler}/>
    </div>
  );
}

export default App;
