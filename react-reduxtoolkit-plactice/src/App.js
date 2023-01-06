import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import ChangeColor from './components/ChangeColor';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Profile />
      <ChangeColor />
      <Login />
      <hr />
      <Header />
      <Main />
      <Footer />
      <Info />
    </div>
  );
}

export default App;
