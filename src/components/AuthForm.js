import './AuthForm.css';
import React, {useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

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
    const types = ['checkbox', 'radio'];

    return (
            <form onSubmit={handleSubmit}>
                <label>
                    Name:{name}
                    <div className='row'>

                    <input type='text' className='form-control' onChange={handleNameChange}/>
                    </div>

                    <div className='row'>

                    <input type='text' onChange={handlePassChange}/>
                    </div>
                </label>
                <br/>
                
                <div key={`inline-checkbox`} className="mb-3">
                    <Form.Check
                        inline
                        label="Male"
                        name="gender"
                        type="radio"
                        id="male"
                    />
                    <Form.Check
                        inline
                        label="Female"
                        name="gender"
                        type="radio"
                        id="female"
                    />
                    <Form.Check
                        inline
                        disabled
                        label="3 (disabled)"
                        type="radio"
                        id="other"
                    />
                </div>

                {/* {types.map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                    />
                    <Form.Check
                        inline
                        label="2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    <Form.Check
                        inline
                        disabled
                        label="3 (disabled)"
                        type={type}
                        id={`inline-${type}-3`}
                    />
                    </div>
                ))} */}
                <p>{result}</p>
                <button type='submit'>Submit</button>
            </form>
    );
}

export default AuthForm;