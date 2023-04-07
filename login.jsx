import React, {useState} from "react";

export function LoginForm(props){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="auth-form-container">
            <article>
              <h1>WAKEEL</h1>
              <p>Your partner for a successful legal battle</p>
              <br></br>
              <br></br>
              <br></br>
              </article>
        <form className="login-form" onSubmit={handleSubmit}>
            <label for="email">Enter a registered email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@xyz.com"/>
            <label for="password">Enter your password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******"/>
            <br></br>
            <br></br>
            <button class="button-33" type = "submit">Log In</button> 
        </form>
        <br></br>
        <button className = "link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register now!</button>
        </div>
    )
}