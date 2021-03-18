import TextInput from "../components/TextInput";
import Button from '../components/Button';
import {createUser, verifyEmail} from "../services/firebaseService"
import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

function Cadastro(){
    const history = useHistory();
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    async function validateUser(){
        const emailExists = await verifyEmail(email)
        if(emailExists){
            alert('Este email já esta cadastrado')
        } else{
            singUp()
        }
    }

    async function singUp(){
        if(password === confirmPassword){
            try {
                await createUser({
                    email: email,
                    name: username,
                    password: password                 
                }) 
                history.push('/')
            } catch (error) {
                console.error(error)
            }
           
        } else{
            alert('As senhas não coincidem')
        }
      
    }

    return(
        <>
            <div className='login-container'>

                <div className='form'>
                    <h2>Cadastro</h2>
                    <TextInput name='username' onChangeCallback={setUsername}/>
                    <TextInput name='email' onChangeCallback={setEmail}/>
                    <TextInput name='password' onChangeCallback={setPassword}/>
                    <TextInput name='confirm password' onChangeCallback={setConfirmPassword}/>
                    <Button text='Cadastrar' callback={validateUser}/>
                </div>
            </div>
        </> 
    )
}

export default Cadastro