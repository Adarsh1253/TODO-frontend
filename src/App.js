
import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './component/tasklist';
import AuthForm from "./component/AuthForm";

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check token on page reload
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        
         <h1>MERN Todo App</h1>

      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <TaskList />
        </>
      ) : (
        <AuthForm onAuthSuccess={() => setIsLoggedIn(true)} />
      )}
      </header>
    </div>
  );
}

export default App;
