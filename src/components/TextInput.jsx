function TextInput({name}) {
    return(
        <>
            <input type={name==='password' ? 'password' : 'text'} name={name} id={name} placeholder={name} className='input-style'/>    
        </>
    )
}

export default TextInput;