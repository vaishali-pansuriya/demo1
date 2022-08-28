import React from 'react'

function PropsCdmi(props) {
  return (
    <>
        <h3><img src={require("../src/img/slider1.jpg")} alt=""height='200' width='200' /></h3>
        <h3>Name:{props.name}</h3>
        <h3>dec:{props.dec}</h3>
        
    </>
  )
}

export default PropsCdmi