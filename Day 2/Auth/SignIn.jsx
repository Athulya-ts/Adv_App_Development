import { useState } from 'react';
import './Login.css';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
    <form>
    <body>
   <header className="header">
   </header>
    <div className="background1"></div>
    <div className="container1">
        <div className="item">
          <img src = "https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?size=626&ext=jpg&ga=GA1.1.949399214.1697784670&semt=ais" style = {{float:'left'}} width={600} height={"auto"}/>
        </div>
        <div className="login-section">
            <div className="form-box login">
                <form action="">
                    <h2 style = {{color:'rgb(36, 94, 200)'}}>Sign In</h2>
                    
                    <div className="input-box">
                        <input type="email" placeholder='Email-id' required onChange = {e => setEmail(e.target.value)}/>
                        <div className='error'> {email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Please enter your valid Email-ID" : ""}</div>
                    </div>

                    <div className="input-box">
                        <input type="password" pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/" 
                title="Password must contain letters [ Both Uppercase and LowerCase ] and numbers and one special character" placeholder='Password'required  onChange = {e => setPassword(e.target.value)}/>
                    <div className='error'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/).test(password)) ?"Please enter valid Password" : ""} </div>
                    </div>

                      <center>
                        <Link to = "/Components/UserLandingPage">
                        <Button className = "signup-btn" type="submit" variant="contained" color="primary">
                        Sign In
                      </Button>
                      </Link>
                      </center>
                    
                    <div className="create-account">
                        <p>New User? <Link to="/Components/Auth/SignUp"><u>Sign Up</u></Link> </p>
                    </div>
                </form>
            </div>
            </div>
        </div>
    
</body>
</form>
</>
)
};

export default SignIn