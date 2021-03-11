import TextInput from "../components/TextInput";
import Button from '../components/Button';
import {getAllUsers, createUser} from "../services/firebaseService"
import React, {useState} from 'react'

function Cadastro(){

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    async function singUp(){
        if(password === confirmPassword){
            await createUser({
                email: email,
                name: username,
                password: password
            })
        } else{
            alert('As senhas não coincidem')
        }
      
    }

    return(
        <>
            <div className='form'>
                <h2>Cadastro</h2>
                <TextInput name='username' onChangeCallback={setUsername}/>
                <TextInput name='email' onChangeCallback={setEmail}/>
                <TextInput name='password' onChangeCallback={setPassword}/>
                <TextInput name='confirm password' onChangeCallback={setConfirmPassword}/>
                <Button text='Cadastrar' callback={singUp}/>
            </div>
        </> 
    )
}

export default Cadastro