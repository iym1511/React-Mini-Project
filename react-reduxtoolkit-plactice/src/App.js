import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import ChangeColor from './components/ChangeColor';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      {/* <Profile />
      <ChangeColor />
      <Login /> */}
      <hr />
      <InputTodo />
      <TodoList />
    </div>
  );
}

export default App;
