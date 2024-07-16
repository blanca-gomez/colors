import React, {forwardRef} from "react";


const BoxColor = forwardRef (({color, inputValue}, ref) => {
  const sameColor = color.toLowerCase() === inputValue.toLowerCase()

  return (
    <>
      <div>
        <div className={`box ${color}`}
        ref={ref}
        style={{backgroundColor: sameColor ? color:'transparent', borderColor:color, color: sameColor ? "black" : color}}
        > 
        {sameColor ? `yes, i'm ${color} color` : `No, i'm not ${inputValue} color`}
        </div>
      </div>
    </> 
  );
})


export default BoxColor;  
