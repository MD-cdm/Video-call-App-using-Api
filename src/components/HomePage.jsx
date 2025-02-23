import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    if (input.trim()) {
      navigate(`/room/${input}`);
      alert(`Joining room: ${input}`);
    } else {
      alert("Please enter your name.");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Join a Meeting</h2>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          type="text" 
          placeholder='Enter your name...'
          className="input-field"
        />
        <button onClick={submitHandler} className="button">Join</button>
      </div>
    </div>
  );
}

export default HomePage;
