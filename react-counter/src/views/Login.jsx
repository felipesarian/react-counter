import TextInput from "../components/TextInput";
import Button from '../components/Button';

function Login(){

    function callback(){
        console.log("click")
    }

    return(
        <>
            <div className='form'>
                <h2>pagina de login</h2>
                <TextInput name='username'/>
                <TextInput name='password'/>
                <Button text='Entrar' callback={callback}/>
            </div>
        </> 
    )
}

export default Login;