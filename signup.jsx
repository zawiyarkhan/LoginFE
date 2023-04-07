import React, {useState} from "react";
export function SignupForm(props){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [role, setRole] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
        <article>
              <h1>WAKEEL</h1>
              <p>Your partner for a successful legal battle</p>
              <br></br>
              <br></br>
              <br></br>
              </article>
            <label htmlFor="role">Select your appropriate user role</label>
            <select className="drop-down" name="role">
                <option value="lawyer">I am a lawyer who is looking for clients</option>
                <option value="client">I am a client who is looking for lawyers</option>
                <option value="admin">I am a system administrator</option>
            </select>
            {/* <input value={role} onChange={(e) => setRole(e.target.value)} type="role" placeholder="lawyer"/> */}
            <label htmlFor="email">Enter an active email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@xyz.com"/>
            <label htmlFor="password">Create a strong password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******"/>
            <br></br>
            <br></br>
            <button class="button-33" type = "submit">Sign Up</button>
        </form>
        <br></br>
        <button className = "link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login Now!</button>
        </div>
    )
}