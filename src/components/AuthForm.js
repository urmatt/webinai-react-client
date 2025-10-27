import './AuthForm.css';
import React, {useState} from 'react';

const AuthForm = ()=>{
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (event) => {
        alert(`Submit \nname:${name} pass: ${pass}`);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handlePassChange = (event) => {
        setPass(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <br/>
                <input type='text' onChange={handleNameChange}/>
                <br/>
                <input type='text' onChange={handlePassChange}/>
            </label>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default AuthForm;