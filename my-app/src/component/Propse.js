import React from 'react'
// const name = 'swati';
// const email = 'swatijogani2002@gmail.com';
function Propse(props) {
    // const names = ["Swati","Vaishali","Rutvik","Jay","Khushi","Nemisha"]
    // const nameList = names.map(name => <h2>{name}</h2>)
  return (
    <>
        {/* <h4>My Name is {props.name} And Email Id is {props.email}</h4> */}
        <h3>Name:{props.name}</h3>
        <h3>LastName:{props.lastname}</h3>
        <h3>Email-Id:{props.email}</h3>
        <h3>Age:{props.age}</h3>
       
    </>
  )
  
}

export default Propse