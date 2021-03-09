import TextInput from "../components/TextInput";
import Button from '../components/Button';
import {getAllUsers, testConn} from "../services/firebaseService"

function Cadastro(){

    function callback(){
        console.log("click")
    }

    return(
        <>
            <div className='form'>
                <h2>Cadastro</h2>
                <TextInput name='username'/>
                <TextInput name='email'/>
                <TextInput name='password'/>
                <TextInput name='confirm password'/>
                <Button text='Cadastrar' callback={getAllUsers}/>
            </div>
        </> 
    )
}

export default Cadastro