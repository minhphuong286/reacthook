import logo from './logo.svg';
import './App.scss';
import Nav from './views/Nav';
import { useState, useRef, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { CountDownTimer, CountDownTimerHooks } from './views/CountDownTimer';
import {
  BrowserRouter,
  Switch, Route,
} from "react-router-dom";
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import AddNewBlog from './views/AddNewBlog';
import NotFound from './views/NotFound';

function App() {
  // let [name, setName] = useState('MP')
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

  const deleteTodo = (todoId) => {
    console.log('Todo_parents: ', todoId)
    let copyTodos = todos;
    copyTodos = copyTodos.filter(todo => todo.id !== todoId);
    setTodo(copyTodos)
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to react-Hooks</p>
        </header>
        <Switch>
          <Route path={"/"} exact>
            <Covid />
          </Route>
          <Route path={"/timer"} >
            <CountDownTimer />
            <p>-----</p>
            <CountDownTimerHooks />
          </Route>
          <Route path={"/todos"} >
            <Todo
              todos={todos}
              deleteTodo={deleteTodo}

            />
            <input type="text" value={address} onChange={(event) => handleOnchangeInput(event)} />
            <button type="button" onClick={() => handleEventClick()}>Click me</button>
          </Route>
          <Route path={"/blogs"} exact>
            <Blog />
          </Route>
          <Route path={"/blogs/:id"}>
            <DetailBlog />
          </Route>
          <Route path={"/add-new-blog"}>
            <AddNewBlog />
          </Route>
          <Route path={"*"}>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
