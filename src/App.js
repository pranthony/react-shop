import './App.css';
import React, { useEffect, useState } from 'react';


const App = ()=>{
  let [log, setLog] = useState(false)  
  useEffect(() => {
    const loggedInFromLocalStorage = localStorage.getItem("loggedIn");
    
    if (JSON.parse(loggedInFromLocalStorage) === true) {
      setLog(true);
    }
  }, []);
  useEffect(()=>{
    localStorage.setItem("loggedIn", log)
  },[log])
  
  return(
    <div >
      <p>{log?'Welcome back':'See you later'} </p>
      <button onClick={()=>setLog(!log)}>{log?'logout':'login'}</button>
    </div>
  )

}

export default App;
