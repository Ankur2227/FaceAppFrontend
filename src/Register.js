import React, { useState } from 'react';

export default function Register() {
  const [name, setName] = useState(null);
  const [resultStatus, setResultStatus] = useState(null);

  console.log("register called.");

  const register = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/register?name="+name, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Parse the JSON response
      setResultStatus(data.message); // Update the resultStatus state
      console.log(data.message); // Log the message
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {resultStatus !== "Done" ? (
        <>
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
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Take My Picture"
              onClick={() => {
                register();
              }}
              className="btn btn-primary"
            />
          </div>
        </>
      ) : (
        <div>
          <div className="details">
            Hello {name}!
            <br />
            Your registration is successfully completed now you may proceed to login.
          </div>
        </div>
      )}
    </>
  );
}
