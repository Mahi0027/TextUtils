// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [modeText, setModeText] = useState('Enable Dark Mode');
  const [myStyleForAbout, setMyStyleForAbout] = useState({
    color: 'black',
    backgroundColor: '#f8f9fa'
  });

  const showAlert = (message, type) => {
      setAlert({
        message: message,
        type: type
      });
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      setModeText('Disable Dark Mode');
      setMyStyleForAbout({
        color: 'white',
        backgroundColor: '#182226'
      });
      document.body.style.backgroundColor = '#182226';
      showAlert("Dark mode is set","success");
    }
    else{
      setMode('light');
      setModeText('Enable Dark Mode');
      setMyStyleForAbout({
        color: 'black',
        backgroundColor: '#f8f9fa'
      });
      document.body.style.backgroundColor = '#f8f9fa';
      showAlert("Light mode is set","success");
    }
  }
  return (
    <>
      {/* <Navbar titleText="TextUtils" aboutText="about" mode={ mode } modeText={ modeText } toggle={ toggleMode }/>
      <Alert alert={ alert }/>
      <TextFrom heading="Enter text to analyze" mode={ mode } alert={ showAlert } />
      <About mode={ mode } myStyle={ myStyleForAbout } /> */}
      <Router>
        <Navbar titleText="TextUtils" aboutText="about" mode={ mode } modeText={ modeText } toggle={ toggleMode }/>
        <Alert alert={ alert }/>
        <Routes>
        <Route exact path="/about" element={ <About mode={ mode } myStyle={ myStyleForAbout } /> } />
        <Route exact path="/textUtils" element={ <TextFrom heading="Enter text to analyze" mode={ mode } alert={ showAlert } /> } />
        <Route exact path="/" element={ <Home myStyle={ myStyleForAbout } /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
