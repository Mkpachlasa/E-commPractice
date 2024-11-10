import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

function SignUp() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate();
  const handleSignIn= async ()=>{
    console.warn(name,email,password)
    let result=await fetch("http://localhost:5000/register",{
      method:'post',
      body: JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    result= await result.json();
    console.log(result)
    navigate("/") 
  }
  return (
    <div className='container'>
      <h1 className='my-4'>Register</h1>
      <form>
  <div className="form-row">
  <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Name</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail5" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>
  </div>
  <button type="submit" className="btn btn-primary my-3" onClick={handleSignIn}>Sign in</button>
</form>
    </div>
  )
}

export default SignUp
