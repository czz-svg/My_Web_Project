import { useState } from "react";
export default function Random() {
  const [result, setResult] = useState();
    const[alert,setAlert] = useState(false)
  function blockDecimalKeys(e) {
    if ([".", ","].includes(e.key)) {
      e.preventDefault();
    }
  }
  function handleRandom(e) {
    setAlert(false)
    const min = parseInt(e.target.elements.min.value, 10);
    const max = parseInt(e.target.elements.max.value, 10);
    if(min>max){
        setAlert(true)
    }
    const rs = Math.floor(Math.random() * (max - min + 1)) + min;
    setResult((pre) => rs);
    console.log(min);
    console.log(max);
    console.log(rs);
  }

  return (
    <div className="show-random">
      <div className="select-range">
        <p>select the range you want to randomize</p>
        <form id="random-form" onSubmit={handleRandom}>
          <label htmlFor="min">
            min: 
            <input
              type="number"
              id="min"
              min={0}
              onKeyDown={blockDecimalKeys}
              
            />
          </label>
          <label htmlFor="max">
            max: 
            <input
              type="number"
              id="max"
              min="0"
              onKeyDown={blockDecimalKeys}
              
            />
          </label>
          <button type="submit">Generate</button>
        </form>
      </div>
      <div className="show-result">
        {alert?<p id="alert">Max must be greater than min</p>:<p className="result">Result: {result}</p>}
        </div>
    </div>
  );
}
