import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    fetch("/testlogin",{
      method : "POST",
      headers : {
        "content-type" : "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      },
      body : JSON.stringify({
        token : localStorage.getItem("token")
      })
    })
    .then(()=>{
      setIsLogged(false)
      setLoading(false)
    })

  },[])


  const handleLogin = (e) => {
    e.preventDefault()

    const usuario = {
      username: loginUsername,
      password: loginPassword
    }

    fetch('/login', {
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(usuario)
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("token",data.token)
      setIsLogged(true)
    })

  }

  const handleSignup = (e) => {
    
    e.preventDefault()

    const usuario = {
      username: signupUsername,
      password: signupPassword
    }

    fetch("/signup",{
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(usuario)
    })
  }


  const handleLogout = () => {
    setIsLogged(false)
    setLoading(false)
  }

  return (
    <div>
      {loading 
      ? <p>cargando por favor...</p>
      : isLogged 
      ? <div>
          <p>Bienvenido!</p>
          <button onClick={handleLogout}>logout</button>
      </div> 
      :<div>
      <h2>SIGNUP</h2>
      <form onSubmit={handleSignup}>
        
        <input type="text" placeholder='username' onChange={(e)=>{
          setSignupUsername(e.target.value)
        }} value={signupUsername}/>

        <input type="text" placeholder='password' onChange={(e)=>{
          setSignupPassword(e.target.value)
        }} value={signupPassword}/>

        <button>crear usuario</button>
      </form>
      <hr />
      <h2>LOGIN</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder='username' onChange={(e)=>{
          setLoginUsername(e.target.value)
        }} value={loginUsername}/>
        <input type="text" placeholder='password' onChange={(e)=>{
          setLoginPassword(e.target.value)
        }} value={loginPassword}/>
        <button>login</button>
      </form>
      <p>{isLogged ? "Bienvenido!" : "No estas logueado"}</p>
      <button onClick={()=>{
        fetch("/testlogin")
      }}>test</button>
    </div>}
    </div>
  );
}

export default App;