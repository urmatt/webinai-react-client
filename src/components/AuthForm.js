import './AuthForm.css';
import React, {useState} from 'react';
import axios from 'axios';

const AuthForm = ()=>{
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [result, setResult] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000', {
            name: name,
            password: pass
        });
        
            setResult(response.data);
        } catch(error) {
            setResult(error.message);
        }
        
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
                    Name:{name}
                    <br/>
                    <input type='text' className='login-input' onChange={handleNameChange}/>
                    <br/>
                    <input type='text' onChange={handlePassChange}/>
                </label>
                <br/>
                <p>{result}</p>
                <button type='submit'>Submit</button>
            </form>
    );
}

export default AuthForm;