import React, { useState } from 'react';

function Login() {
  const [details, setDetails] = useState({ username: '', password: '' });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted: " + details.username);

    console.log(details);
    setDetails({ username: '', password: '' });
  };

  return (
    <div>
      <form>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={details.username}
          onChange={inputHandler}
        />
        <br /><br />

        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={details.password}
          onChange={inputHandler}
        />
      </form>
      <br />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
