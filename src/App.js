import logo from './logo.svg';
import './App.scss';
import Nav from './views/Nav';
import { useState, useRef, useEffect } from 'react';

function App() {
  let [name, setName] = useState('MP')
  let [address, setAddress] = useState('')
  let [todos, setTodo] = useState([
    { id: '1', title: 'todo1' },
    { id: '2', title: 'todo2' }
  ])
  const handleEventClick = () => {
    if (!address) {
      alert('address is empty');
      return;
    }
    let newTodo = { id: '3', title: address };
    setTodo([...todos, newTodo])
    setAddress('')
  }
  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
  }
  let inputFocus = useRef(null);
  useEffect(() => {
    inputFocus.current.focus();
  })
  return (
    <div className="App">
      <Nav />
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to react-Hooks,  {name}
        </p>
        <input type="text" ref={inputFocus} value={address} onChange={(event) => handleOnchangeInput(event)} />
        <button type="button" onClick={() => handleEventClick()}>Click me</button>
        {todos.map((todo, index) => {
          return (
            <div className='todo-child' key={index}>{todo.id} - {todo.title}</div>
          )
        })

        }
      </header>
    </div>
  );
}

export default App;
