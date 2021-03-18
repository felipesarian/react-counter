import TextInput from "../components/TextInput";
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import { verifyUser } from "../services/firebaseService";
import { useHistory } from "react-router-dom";



function Login(){
    const history = useHistory();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function login(){
        try {
            const mustLogin = await verifyUser(username, password)
            if(mustLogin){
                history.push('/home')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <>
            <div className='form'>
                <h2>Login</h2>
                <TextInput name='username' onChangeCallback={setUsername}/>
                <TextInput name='password' onChangeCallback={setPassword}/>
                <Button text='Entrar' callback={login}/>
                <Link to='/cadastro'>
                    <Button text='Cadastrar-se' callback={()=>{}}/>
                </Link>
            </div>
        </> 
    )
}

export default Login;