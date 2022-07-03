import logo from './logo.svg';
import './App.scss';
import Nav from './views/Nav';
import { useState, useRef, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { CountDownTimer, CountDownTimerHooks } from './views/CountDownTimer';

function App() {
  let [name, setName] = useState('MP')
  let [address, setAddress] = useState('')
  let [todos, setTodo] = useState([
    { id: '0', title: 'todo1' },
    { id: '1', title: 'todo2' }
  ])
  const handleEventClick = () => {
    if (!address) {
      alert('address is empty');
      return;
    }
    let newTodo = { id: Math.floor((Math.random() * 100000) + 1), title: address };
    setTodo([...todos, newTodo])
    setAddress('')
  }
  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
  }
  let inputFocus = useRef(null);
  useEffect(() => {
    inputFocus.current.focus();
  }, [])
  const deleteTodo = (todoId) => {
    console.log('Todo_parents: ', todoId)
    let copyTodos = todos;
    copyTodos = copyTodos.filter(todo => todo.id !== todoId);
    setTodo(copyTodos)
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <CountDownTimer />
        <p>-----</p>
        <CountDownTimerHooks />
        <p>
          Welcome to react-Hooks,  {name}
        </p>
        <input type="text" ref={inputFocus} value={address} onChange={(event) => handleOnchangeInput(event)} />
        <button type="button" onClick={() => handleEventClick()}>Click me</button>
        <Todo
          todos={todos}
          deleteTodo={deleteTodo}
        />
        <Covid />
      </header>
    </div>
  );
}

export default App;
