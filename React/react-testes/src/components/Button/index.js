import React from "react";

function clicado(){
  alert("clicado")
}

const Button = (props) => {
  <button onClick={clicado()}>{props.children}</button>
}



export default Button;