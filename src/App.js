import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Rating from './components/Rating/Rating'
import SubmitRating from './components/Rating/SubmitRating'
function App() {
  const [myBool, setmyBool] = useState(true);
  function toggleBool(){
    setmyBool(!myBool);
  }
  return myBool ? <Rating toggleBool = {toggleBool}/> : <SubmitRating/>; 
}

export default App;
