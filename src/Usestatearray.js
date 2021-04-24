// import { useState } from "react"
import React , {useState} from 'react'

const Usestatearray = () => {

    // const name1 = 'kavitha';

    const biodata = [
        
        {
            id:1, name:"kumar" , age :20
        },
        {
            id:2, name:"yadav" , age :20
        }
    ]

    const [name, setarray] = useState(biodata);

    const funct = () =>
    {
        setarray([ {
            id:1, name:"kumar1" , age :20
        }]);
    }


    return (
       <>
         {
             biodata.map((ce)=>{return <h1> key:{ce.id} name:{ce.name} & age: {ce.age}</h1>})
         }
         {/* <h1>{name}</h1> */}
         <button className="btn" onClick={funct}> clear</button>
       </>
    )
}

export default Usestatearray
