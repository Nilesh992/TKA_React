import React, { useState } from 'react'

function Registration_Form() {
    let [details, setDetails] = useState({ name: '', email: '', password: '' });
    let inputHandler = (e) => {
        const { value } = e.target;
        setDetails(value);
        console.log(details);
        

    }
    let reset = () => {
        setDetails({ name: '', email: '', password: '' });
    }
    return (
        <div>
            <form>
                <label>Name </label>
                <input type="text" name='Name' value={details.name} onChange={inputHandler} /> <br /><br />

                <label >Email </label>
                <input type="text" name='Email' value={details.email} onChange={inputHandler} /><br /><br />

                <label >Password </label>
                <input type="text" name='Password' value={details.password} onChange={inputHandler} />
            </form>
            <br />
            <button onClick={reset}>Submit</button>

        </div>
    )
}

export default Registration_Form
