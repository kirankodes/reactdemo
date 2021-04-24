// always write hooks inside components or functions 
// components must be pascal case  (first leter uppercase )
// we can directly import or we can directly write it using react hooks  
// dont call hooks inside loops , conditions , nested functions.


// import { useState } from "react"
import React , { useState }from 'react'

const Ruleshook = () => {
    const [name , setname] = useState ('kk3');

    const changename = () => {

        // let temp = name;
        // if(temp=='kk3'){
        setname('kk2');
        // }
        // else{
        //     setname('kk3');
        // }
    }
     
   


    return (
        <div>
            <h1>{ name  }</h1>
            <button onClick={changename}> click</button>
            
        </div>
    )
}

export default Ruleshook
