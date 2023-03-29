import React from 'react'
import { useNavigate } from 'react-router-dom'

import {useState} from 'react'
import { useAuth } from './auth';

export const Login = () => {
    const [user, setuser] = useState('');
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        auth.login(user);
        navigate('/',{replace : true})

    }
    return (
        <div>
            <label>
            User Name :{ ' '}
             <input type='text' onChange={(e => setuser(e.target.value))} />

            </label>
            <button onClick={handleLogin} className='btn btn-sucess'>Login</button>
        </div>
    )
}
