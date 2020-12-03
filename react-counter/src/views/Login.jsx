import TextInput from "../components/TextInput";

function Login(){
    return(
        <>
            <h1>pagina de login</h1>
            <TextInput name='username'/>
            <TextInput name='password'/>
        </> 
    )
}

export default Login;