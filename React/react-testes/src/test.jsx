import React from "react";

function mult(a, b){
  return a * b
}

function Button() {

  return(
    <div>
        <ol>

            <li>2x1 = {mult(1, 1)}</li>
            <li>2x2 = {mult(2, 2)}</li>
            <li>2x3 = {mult(2, 3)}</li>
            <li>2x4 = {mult(2, 4)}</li>
            <li>2x5 = {mult(2, 5)}</li>

        </ol>
    </div>
  )
}

//export default Button;







