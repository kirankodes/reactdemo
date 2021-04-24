import React , {useEffect, useState } from 'react'

const Useeffects1 = () => {

    var num =0;
    const [count, setcount] = useState(num);

    const increment = () => {
        
        setcount(count+1);
    }

 

   useEffect( ()=>{
       console.log("useeffect");
       document.title = `chats (${count})`
   })
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>click</button>
        </div>
    )
}

export default Useeffects1
