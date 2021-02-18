function Button({text, callback}){
    return(
        <>
            <button type='button' onClick={callback} className='action-button'>{text}</button> 
        </>
    )
}
export default Button