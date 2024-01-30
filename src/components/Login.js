import React, { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'


const Login = (props) => {

    const [credentials, setCredentials] = useState({email:" ", password: ""})
    let navigate = useNavigate();

    const handleSubmit = async (e)=> {
        e.preventDefault();
      
        const response = await fetch(
            `http://localhost:5000/api/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({email: credentials.email , password: credentials.password})
            }
          );
          const json = await response.json();
          console.log(json);
          if(json.success){
            localStorage.setItem('token',json.authtoken);
            props.showAlert("Logged in  Successfully","success")
            navigate('/')
          }
          else{
            props.showAlert("Invalid Credentials","danger")
          }
    }
     
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
    <div className="mb-3">
      <label htmlFor="email">Email address</label>
      <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email"  aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="mb-3">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control"  value={credentials.password} onChange={onChange} id="password" name="password" placeholder="Password"/>
    </div>
    <button type="submit" className="btn btn-primary my-4 " >Submit</button>
  </form>
  </div>
  )
}

export default Login