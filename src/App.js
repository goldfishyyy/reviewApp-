//APP is the main app component

import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data";
import FeedbackStatus from "./components/FeedbackStatus";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
 

  //  component return JSX : javascript xml
  return (
    // using FeedbackProvider to wrap everyhing, so the wrapped component become is children
    <FeedbackProvider>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header text="Service Review" />
                <FeedbackForm />
                <FeedbackStatus />
                <FeedbackList />
                <AboutIconLink />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </FeedbackProvider>
  );
}
export default App;
