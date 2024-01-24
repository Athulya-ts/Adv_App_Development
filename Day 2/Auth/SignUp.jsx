import { useState } from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom'

const SignUp = () => {
  // const [formData, setFormData] = useState({
  //   email: '',
  //   username: '',
  //   password: '',
  //   confirmPassword: '',
  //   contactNo: '',
  //   role: 'user',
  // });

  const [email, setEmail] = useState("");
  const [uname, setUname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [role, setRole] = useState("user");

  // const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
    // setErrors((prevErrors) => ({
    //   ...prevErrors,
    //   [name]: '', // Clear the error when the user starts typing
    // }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

    // Validate form fields
    // const validationErrors = validateForm(formData);
    // if (Object.keys(validationErrors).length === 0) {
    //   // Form is valid, you can proceed with form submission logic
    //   console.log(formData);
    // } else {
    //   // Form is invalid, update the state with errors
    //   setErrors(validationErrors);
    // }
  // };

  // const validateForm = (data) => {
  //   const errors = {};

  //   if (!data.email) {
  //     errors.email = 'Email is required';
  //   }
  //   if (!(/\S+@\S+\.\S+/).test(data.email)) {
  //     errors.email = 'Invalid email address';
  //   }

  //   if (!data.username) {
  //     errors.username = 'Username is required';
  //   }

  //   if (!data.password) {
  //     errors.password = 'Password is required';
  //   }
  //   if (data.password.length < 8) {
  //     errors.password = 'Password must be at least 6 characters';
  //   }

  //   if (data.password !== data.confirmPassword) {
  //     errors.confirmPassword = 'Passwords do not match';
  //   }

  //   if (!data.contactNo) {
  //     errors.contactNo = 'Contact No is required';
  //   }

  //   return errors;
  // };

  // return (
  //   <div className='signup-overall-container'>
  //   <div className="signup-container">
  //   <img src = "https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1706005867~exp=1706006467~hmac=b0ac01bef17263eaf49d209a498f55478fe6c58be4ea6114c905e06609e717b0" style = {{float:'left'}} width={500} height={"auto"}/>
  //   <center><h2>Sign Up</h2></center>
  //     <form onSubmit={handleSubmit}>
  //     <div className='form-container-signup'>
  //       <center>
  //       <div>
  //           <TextField
  //           label="Email"
  //           id="outlined-error-helper-text"
  //           type="email"
  //           name="email"
  //           value={formData.email}
  //           onChange={handleChange}
  //           error={Boolean(errors.email)}
  //           helperText={errors.email}
  //           required
  //           />
  //       </div>
  //       <br/>
  //       <div>
  //           <TextField
  //           label="Username"
  //           id="outlined-error-helper-text"
  //           type="text"
  //           name="username"
  //           value={formData.username}
  //           onChange={handleChange}
  //           error={Boolean(errors.username)}
  //           helperText={errors.username}
  //           required
  //           />
  //       </div>
  //       <br/>
  //       <div>
  //           <TextField
  //           label="Password"
  //           id="outlined-error-helper-text"
  //           type="password"
  //           name="password"
  //           value={formData.password}
  //           onChange={handleChange}
  //           error={Boolean(errors.password)}
  //           helperText={errors.password}
  //           required
  //           />
  //       </div>
  //       <br/>
  //       <div>
  //           <TextField
  //           label="Confirm Password"
  //           id="outlined-error-helper-text"
  //           type="password"
  //           name="confirmPassword"
  //           value={formData.confirmPassword}
  //           onChange={handleChange}
  //           error={Boolean(errors.confirmPassword)}
  //           helperText={errors.confirmPassword}
  //           required
  //           />
  //       </div>
  //       <br/>
  //       <div>
  //           <TextField
  //           label="Contact No"
  //           id="outlined-error-helper-text"
  //           type="text"
  //           name="contactNo"
  //           value={formData.contactNo}
  //           onChange={handleChange}
  //           error={Boolean(errors.contactNo)}
  //           helperText={errors.contactNo}
  //           required
  //           />
  //       </div>
  //       <br/>
  //       <div>
  //           <TextField
  //           label="Role"
  //           id="outlined-error-helper-text"
  //           select style = {{width:222}} 
  //           name="role"
  //           value={formData.role}
  //           onChange={handleChange}
  //           required
  //           >
  //         <MenuItem value="user">User</MenuItem>
  //         <MenuItem value="admin">Admin</MenuItem>
  //           </TextField>
  //       </div>
  //       <br/>
  //       <div>
  //           <Button type="submit" variant="contained" color="primary">
  //           Sign Up
  //           </Button>
  //       </div>
  //       </center>
  //       </div>
  //     </form>
  //   </div>
    
  //   </div>
  // );
  return (
    <>
    <form>
    <body>
   <header className="header">
   </header>
    <div className="background1"></div>
    <div className="container1">
        <div className="item">
          <img src = "https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1706025875~exp=1706026475~hmac=83385e9491200607a016ecb11e6739f58265a31e42b18d3f6e8c23f7b18a43b9" style = {{float:'left'}} width={600} height={"auto"}/>
        </div>
        <div className="login-section">
            <div className="form-box login">
                <form action="">
                    <h2 style = {{color:'rgb(36, 94, 200)'}}>Sign Up</h2>
                    <div className="input-box">
                        <input type="text" placeholder='UserName' required onChange = {e => setUname(e.target.value)}/>
                        <div className='error'>{uname.length===0?"Enter Your Name":""}</div>
                    </div>

                    <div className="input-box">
                        <input type="email" placeholder='Email-id' required onChange = {e => setEmail(e.target.value)}/>
                        <div className='error'> {email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Please enter your valid Email-ID" : ""}</div>
                    </div>

                    <div className="input-box">
                        <input type="password" pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/" 
                title="Password must contain letters [ Both Uppercase and LowerCase ] and numbers and one special character" placeholder='Password'required  onChange = {e => setPassword(e.target.value)}/>
                    <div className='error'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/).test(password)) ?"Please enter valid Password" : ""} </div>
                    </div>

                    <div className="input-box">
                        <input type="password"
                title="Both Password must be the same" placeholder='Confirm Password'required  onChange = {e => setConfirmPassword(e.target.value)}/>
                    <div className='error'>{password === confirmPassword ?"":"Passwords do not match"} </div>
                    </div>
                    
                    <div className="input-box">
                        <input type="text" placeholder='Contact Number' required  onChange = {e => setContactNo(e.target.value)}/>
                        <div className='error'>{contactNo.length !== 10?"Enter valid contact number ":""}</div>
                    </div>

                    {/* <div className="input-box"> */}
                    <TextField
                    label="Role"
                    id="outlined-error-helper-text"
                    select style = {{width:340}} 
                    name="role"
                    onChange={e => setRole(e.target.value)}
                    required
                    >
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                  </TextField>
                  <br/><br/>
                    {/* </div> */}

                      <center>
                        <Link to = "/Components/Auth/SignIn"><Button className = "signup-btn" type="submit" variant="contained" color="primary">
                        Sign Up
                      </Button>
                      </Link></center>
                    
                    <div className="create-account">
                        <p>Already have an Account? <Link to="/Components/Auth/SignIn"><u>Sign In</u></Link> </p>
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

export default SignUp;
