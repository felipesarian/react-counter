import Button from '../components/Button';
import React, {useState, useEffect} from 'react'

function Counter(){

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log(counter)
        if(counter === 10){
            alert(`Você clicou ${counter} vezes`)
        }
    })

    return(
        <>
            <div className='counter-page'>
                <div className="counter-content">
                    <h1>{counter}</h1>
                    <Button text='Click' callback={() => setCounter(counter + 1)}/>
                </div>
            </div>
        </>
    )
}
export default Counter