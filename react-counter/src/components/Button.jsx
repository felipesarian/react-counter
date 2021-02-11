function Button({text, callback}){
    return(
        <>
            <button type='button' onClick={callback}>{text}</button>
        </>
    )
}
export default Button