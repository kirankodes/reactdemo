import React from 'react'

const Just = () => {
    const [num , setnum]= React.useState('71');

    const Temp =()=>
    {
        let temp = num ;
        if(temp== '71')
        {
            setnum('80');
         } 
        
        else {
            setnum('71');
        }
    }
    return (
        <div>
        <h1>{ num }</h1>
        <button onClick={Temp}>click</button>
            
        </div>
    )
}

export default Just
