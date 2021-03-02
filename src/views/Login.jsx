import TextInput from "../components/TextInput";
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Login(){

    function callback(){
        console.log("click")
    }

    return(
        <>
            <div className='form'>
                <h2>Login</h2>
                <TextInput name='username'/>
                <TextInput name='password'/>
                <Button text='Entrar' callback={callback}/>
                <Link to='/cadastro'>
                    <Button text='Cadastrar-se' callback={()=>{}}/>
                </Link>
            </div>
        </> 
    )
}

export default Login;