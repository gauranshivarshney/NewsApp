import React, {useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

const App = () => {
  const apiKey = process.env.NEWS_API_KEY
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News apiKey={apiKey} key="general" category="general" />} />
            <Route exact path="/business" element={<News apiKey={apiKey} key="business" category="business" />} />
            <Route exact path="/entertainment" element={<News apiKey={apiKey} key="entertainment" category="entertainment" />} />
            <Route exact path="/general" element={<News apiKey={apiKey} key="general" category="general" />} />
            <Route exact path="/health" element={<News apiKey={apiKey} key="health" category="health" />} />
            <Route exact path="/science" element={<News apiKey={apiKey} key="science" category="science" />} />
            <Route exact path="/sports" element={<News apiKey={apiKey} key="sports" category="sports" />} />
            <Route exact path="/technology" element={<News apiKey={apiKey} key="technology" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }

export default App