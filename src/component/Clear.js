import React , {useEffect, useState } from 'react'
import ReactDOM from 'react-dom';

const Clear = () => {

    const data = [
        {
            id:0, myname:"kiran", myage:71
        },
        {
            id:1, myname:"kumar", myage:71
        },
        {
            id:2, myname:"yadav", myage:71
        },
    ]


    const [array, setarray]= useState(data)
    const claerarray = () => {
        setarray({...data, myname:"kavitha"});
    }
    return (
        <div>
          {array.map((num) =>  <h1> name : {num.myname} </h1>)}
            <button onClick={claerarray}>clear</button>
        </div>
    )
}

export default Clear
