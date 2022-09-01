import { useState } from "react";
import Ext from './ext';

const FunctionComp = () => {
  const [data, setData] = useState("Test");

  const plus =()=>{
    setData(data+1)
  }
  const minus =()=>{
    setData(data-1)
  }
  return (
    <div>
      <h1>{data}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <Ext isGet={data}/>
    </div>
  );
};
export default FunctionComp


// export const FunctionComp1  = () => {
//     return (
//       <div>
//         <p>test   1</p>
//       </div>
//     );
// };

  
// export function FunComp() {
//     return (
//       <div>
//         <p>test   44</p>
//       </div>
//     );
//   };

