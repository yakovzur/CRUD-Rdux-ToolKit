import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import TextField from '../../components/TextField';
import Button from "../../components/Button";
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';
import { v4 as uuidv4 } from 'uuid';


const AddUser = () => {

    const dispatach = useDispatch();

    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const handlerAddUser = () => {
        setValues({name: '', email: ''});
        dispatach(addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email
        }));
        navigate('/');
    }

  return (
    <div className='mt-10 max-w-xl mx-auto'>
        <TextField
            label="Name"
            value={values.name}
            onChange={e => setValues({name: e.target.value})}
            inputProps={{type: 'text', placeholder: 'Jhon Doe'}} 
        />
        <br />
        <TextField
            label="Email"
            value={values.email}
            onChange={e => setValues({...values, email: e.target.value})}
            inputProps={{type: 'email', placeholder: 'Jhon@email.com'}} 
        />
        <Button onClick={handlerAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser