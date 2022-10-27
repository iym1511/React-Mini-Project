// 공용으로 쓸 데이터컨텍스트 Provider 추가
import  { DataProvider } from './context/DataContext'

import logo from './logo.svg';
import './App.css';

// 라이브러리 컴포넌트 import
import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Layout from './page/Layout';
import Home from './page/Home';


function App() {
  return (
    <div className="App">
      <DataProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        </Route>
      </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
