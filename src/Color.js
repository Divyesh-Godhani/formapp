import React from 'react'

export default function Color() {
    const redbodycolor = () => {
        const btncolor = document.querySelector('.redcolor')
        btncolor.style.backgroundColor = "red";
        btncolor.style.color = "white";
        document.body.style.backgroundColor = "red";

    }
    const yellowbodycolor = () => {
        const btncolor = document.querySelector('.yellowcolor')
        btncolor.style.backgroundColor = "yellow";
        btncolor.style.color = "black";
        document.body.style.backgroundColor = "yellow";

    }
    const orangebodycolor = () => {
        const btncolor = document.querySelector('.orangecolor')
        btncolor.style.backgroundColor = "orange";
        btncolor.style.color = "black";
        document.body.style.backgroundColor = "orange";

    }
  return (
    <>
    <button type='button' className='redcolor' onClick={redbodycolor}>Red</button>
    <button type='button' className='yellowcolor' onClick={yellowbodycolor}>Yellow</button>
    <button type='button' className='orangecolor' onClick={orangebodycolor}>Orange</button>
    </>
  )
}
