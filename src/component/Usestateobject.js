import React from 'react'

const Usestateobject = () => {
  const [myobject, setmyobject] = React.useState({
      myname:'kiran' , age:20, degree:'cse'
  })

  const changeobject = () =>
  {
      setmyobject({...myobject,  myname:'kavitha'});

  }

    return (
        <div>
            <h1>name: {myobject.myname} & age: {myobject.age} & degree : {myobject.degree} </h1>
            <button onClick={changeobject}>update</button>
        </div>
    )
}

export default Usestateobject
