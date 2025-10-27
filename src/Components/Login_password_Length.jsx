import React, { useState } from 'react'

function Login_password_Length() {
    const [details, setDetails] = useState({ username: '', password: '' });

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]: value,
        });
    };
    const handleSubmit = () => {
        if (details.password.length < 6) {
            alert('Password should be greater than 6 characters');
            return;
        }
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
    )
}

export default Login_password_Length
