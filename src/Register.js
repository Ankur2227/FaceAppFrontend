import React, { useState } from 'react';

export default function Register() {
  const [name, setName] = useState(null);
  const [faceEncodings, setFaceEncodings] = useState(null);
  const [fingerData, setFingerData] = useState(null);

  
  const registerFace = async ()=> {
    try {
      const response = await fetch("http://127.0.0.1:5000/registerFace", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json(); // Parse the JSON response
      setFaceEncodings(data.face_encodings) // Update the resultStatus state
      console.log(data.face_encodings); // Log the message
    }
    catch (error) {
      console.error(error);
    }
  }

  const inputFinger = async ()=>{
    try {
      const response = await fetch("http://127.0.0.1:5000/inputFinger", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    }
    catch (error) {
      console.error(error);
    }
  }
  
  const registerFinger = async ()=>{
    try {
      const response = await fetch("http://127.0.0.1:5000/registerFinger", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json(); // Parse the JSON response
      setFingerData(data) // Update the resultStatus state
      console.log(data); // Log the message
    }
    catch (error) {
      console.error(error);
    }
  }

  const register = async () => {
    try {
      // Check if name, faceEncodings, and fingerData are available
      if (name && faceEncodings && fingerData) {
        // Create an object with user data
        const userData = {
          name: name,
          faceEncodings: faceEncodings,
          fingerData: fingerData,
        };
  
        // Make a POST request to the backend to store the user data
        const response = await fetch('http://127.0.0.1:5000/registerUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData), // Convert to JSON string
        });
  
        if (response.ok) {
          // Data successfully stored in the database
          console.log('User data stored successfully.');
        } else {
          // Handle errors if the request fails
          console.error('Failed to store user data in the database.');
        }
      } else {
        // Handle cases where required data is missing
        console.error('Missing data (name, faceEncodings, or fingerData).');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
  
  return (
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
            <button
              onClick={() => {
                registerFace();
              }}
              className="btn btn-primary"
            >
              Take my Picture 
            </button>
          </div>
          <div className="form-group">
            <button
              onClick={() => {
                inputFinger();
              }}
              className="btn btn-primary"
            >
              Take My FingerScan
            </button>
            <button
              onClick={() => {
                registerFinger();
              }}
              className="btn btn-primary"
            >
              Store
            </button>
          </div>
          <div className="form-group">
            <button
              onClick={() => {
                register();
              }}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </>
  )
}
