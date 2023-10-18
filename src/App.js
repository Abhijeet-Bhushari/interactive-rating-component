import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Rating from './components/Rating/Rating'
import SubmitRating from './components/Rating/SubmitRating'
function App() {
  const [rating, setRating] = useState(-1);
  function changeRating(num){
    setRating(num);
  }
  return rating == -1 ? <Rating changeRating = {changeRating}/> : <SubmitRating rating = {rating}/>; 
}

export default App;
