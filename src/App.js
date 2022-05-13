import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Quiz from "./components/Quiz";
import { QuizData } from "./components/QuizData";

function App() {
  return (
    <div className="App">
      <div className="scrollable-div"> </div>
     
      <BrowserRouter>
        <Routes>
       
        <Route path="/" element={<Navigate replace to={`/${QuizData[0].id}`} />}  /> 
          <Route path="/:id" element={<Quiz />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
