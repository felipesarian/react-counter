function TextInput({name, onChangeCallback}) {
    return(
        <>
            <input type={name.includes('password')  ? 'password' : 'text'} name={name} id={name} placeholder={name} className='input-style' onChange={e => onChangeCallback(e.target.value)}/>    
        </>
    )
}

export default TextInput;