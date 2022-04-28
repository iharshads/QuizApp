import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import samplequestions from './pages/samplequestions'



function App() {

  const [name, setName] = useState("harshad");
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [score, setScore] = useState(0)
  const [questions, setQuestions] = useState("")
  const fetchQuestions=async(difficulty='')=>{ 


    // const {data}= await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
    // setQuestions(data.results);

    
        setQuestions(samplequestions.results);

  };
  return (
    <>
     <div className='app'  >
       <Header/>
            <Routes>
                <Route path="/" element={<Home name={name} setName={setName} email={email} setEmail={setEmail} phone={phone}  setPhone={setPhone} fetchQuestions={fetchQuestions} />} />
                <Route path="/quiz" element={<Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} />} />
                <Route path="/result" element={<Result name={name} score={score} />} />
              </Routes>
    </div> 
    <Footer/>
    </>
  );
}

export default App;
