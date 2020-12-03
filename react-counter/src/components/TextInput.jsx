function TextInput({name}) {
    return(
        <>
            <input type="text" name={name} id={name} placeholder={name}/>    
        </>
    )
}

export default TextInput;