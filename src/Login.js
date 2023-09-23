import React, { useState } from 'react';

export default function Login() {
  const [name, setName] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/login?name="+name, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Parse the JSON response
      if(data.message === "Login Successful.")
      {
        setLoggedIn(true);  
      }
      console.log(data.message); // Log the message
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setName(null);
    setLoggedIn(false);
  };

  return (
    <>
      {loggedIn === false ? (
        <div className="form-group">
        <label>Enter your name</label>
        <input
            type="text"
            name="name"
            className="form-control"
            onChange={(e) => {
                setName(e.target.value);
            }}
            />
          <input
            type="submit"
            value="Authenticate Me"
            onClick={() => {
              login();
            }}
            className="btn btn-primary"
          />
        </div>
      ) : (
        <div>
          <div className="details">
            Hello {name}!
            <br />
            You are successfully logged in to the system.
            You may logout of the system by clicking on the logout button as shown below.
            <div className="form-group">
              <input
                type="submit"
                value="Logout"
                onClick={() => {
                  logout();
                }}
                className="btn btn-primary"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
