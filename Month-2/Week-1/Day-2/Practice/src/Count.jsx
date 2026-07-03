import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Inc {count}</button>
      <button onClick={()=>setCount(count-1)}>Dec {count}</button>
    </div>
  );
}

export default Count;
