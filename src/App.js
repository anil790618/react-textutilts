// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import About from './Components/About';
import React,{useState} from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";





function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setAlert(null)
     }, 2000);
  }
  // showAlert()
  // const [btntext, setbtntext] = useState("Enable Dark Mode")
  const toggleMode =()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor="#23578b";
      showAlert("dark Mode Enabled","success")
      document.title="TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title="TextUtils download";
      // }, 1500);
      
    }else{
      setmode("light");
      document.body.style.backgroundColor="white";
      showAlert("dark Mode Disabled","danger")
      document.title="TextUtils - light Mode";
    }
  }

  return (
      
       <>
       <Router>
           <Navbar title="textUtils" mode={mode}  toggleMode={toggleMode}/>
           <Alert alert={alert}/>
           {/* <TextArea mode={mode} showAlert={showAlert}/> */}
           {/* <About/> */}
           <Switch>
          <Route exact  path="/about">
          <About mode={mode}/>
          </Route> 
          <Route exact  path="/">
          <TextArea mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
          </Router> 
       </>
        
  );
}

export default App;
