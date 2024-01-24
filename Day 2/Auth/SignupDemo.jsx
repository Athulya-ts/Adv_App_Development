import './Login.css';
import { useState } from 'react';
// import {Link} from 'react-router-dom';

export default function SignupDemo() {
  
  const[name,setName] = useState("");
  const[mail,setMail] = useState("");
  const[password,setPassword] = useState("");

  return (
    <>
    <form>
    <body>
   <header className="header">
   </header>
    <div className="background1"></div>
    <div className="container1">
        <div className="item">
            <h2 className="logo">Welcome to
             iDo EventZ</h2>
            <div className="text-item">
                <p>We dont rermember the days,<br></br>but rather the moments!</p>
            </div>
        </div>
        <div className="login-section">
            <div className="form-box login">
                <form action="">
                    <h2>Log In</h2>
                    <div className="input-box">
                        <input type="text" placeholder='UserName' required  style={{color:"white"}} onChange = {e => setName(e.target.value)}/>
                        <div className='error'>{name.length===0?"Enter Your Name":""}</div>
                    </div>

                    <div className="input-box">
                        <input type="email" placeholder='Email-id'style={{color:"white"}}  required onChange = {e => setMail(e.target.value)}/>
                        <div className='error'> {mail.length === 0 || !((/^\S+@\S+\.\S+$/).test(mail))?"Please enter your valid Email-ID" : ""}</div>
                    </div>
                    <div className="input-box">
                        <input type="password" style={{color:"white"}}  pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$" 
                title="Password must contain letters [ Both Uppercase and LowerCase ] and numbers and one special character" placeholder='Password'required  onChange = {e => setPassword(e.target.value)}/>
                    <div className='error'>{password.length < 8 || !((/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/).test(password)) ?"Please enter valid Password" : ""} </div>
                   
                    </div>
                    <button className="btn">Log In</button>
                    
                    <div className="create-account">
                        {/* <p>Dont have an Account? <Link to="/signup">Sign Up</Link> </p> */}
                    </div>
                </form>
            </div>
            </div>
        </div>
    
</body>
</form>
</>
)
}