import './App.css';
import {LoginForm} from './login';
import {SignupForm} from './signup';
import {Home} from './homepage';
import React, {useState} from "react";
function App() {
  const[currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {/* <Home/> */}
      {
      currentForm === "login" ? <LoginForm onFormSwitch={toggleForm}/> : <SignupForm onFormSwitch={toggleForm}/>
        }
    </div>
  );
}

export default App;
