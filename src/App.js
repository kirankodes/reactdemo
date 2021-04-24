import React,{ useState } from 'react'
import Clear from './component/Clear';
import Just from './component/Just';
import Ruleshooks from './component/ruleshook'
import Useeffects1 from './component/Useeffects/Useeffects1';
import Usestateobject from './component/Usestateobject';
import Usestateodject from './component/Usestateobject';

import Usestatearray from './Usestatearray';

const App = () => {

  // let val = 'kiran';

  const [val , setval] = useState('kiran');
  const changename =()=>
  {
    // val = 'kirankodes';
    // console.log(val)
    let temp= val;

    if(temp == 'kiran'){
      setval('kirankodes');
    }
    else{
      setval('kiran');
    }
  }
  return (
    <div>
       {/* <h1>{val}</h1> */}
       {/* <button className="btn" onClick={changename } >click me</button> */}
       {/* <Ruleshooks /> */}
       {/* <Usestatearray  /> */}
       {/* <Just /> */}
       {/* <Usestateobject /> */}

       {/* <Useeffects1 /> */}
       <Clear />

    </div>
  )
}

export default App
