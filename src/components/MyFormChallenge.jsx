import React, {  useState, useRef } from "react";
import BoxColor from "./BoxColor";
const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function MyForm() {
  const [inputValue, setInputValue] = useState('')
  const ref = useRef(colors.map(() => React.createRef()));

  const handleChange = (e) => {
    setInputValue(e.target.value.toLowerCase())
  };
  

  return (
    <>
      <form>
        <input
          id='color'
          type='text'
          placeholder='color'
          value ={inputValue}
          onChange={handleChange}
        />
        <div className="container">
          {colors.map((color,index) => (
            <BoxColor
              key={color}
              color={color}
              inputValue={inputValue}
              ref={ref.current[index]}
            />
          ))}
        </div>
      </form>
    
    </>
  );
}

export default MyForm;