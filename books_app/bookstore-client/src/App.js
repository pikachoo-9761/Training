import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
//import HomeClass from './components/HomeClass';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import AddBook from './components/AddBook';

function App() {
  // const username = "Abc";
  // const email = "abc@gmail.com";
  // const friends = ["Rohit", "Arya", "Aditya"];
  return (
    //  <div>
      /* <h1>React App</h1>
      <Home uname={username} emailId={email} friendlist={friends}/> */
      /* <HomeClass uname={username} emailId={email} friendlist={friends}/> */
      /* <About/>
      <Contact/> */
    /* </div> */
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route  index element={<Home/>} />
        <Route  path='/About' element={<About/>} />
        <Route  path='/Contact' element={<Contact/>} />
        <Route path='login' element={<Login/>} />
        <Route path='addbook' element={<AddBook/>} />
      </Route>
    </Routes>
  );
}

export default App;
