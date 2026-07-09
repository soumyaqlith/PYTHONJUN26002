import React, { createContext, useState } from "react";
import Home from "./Home";
import Profile from "./Profile";

const nameContext = createContext();
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  

  return (
    <div>
      <Home name={"sir mental"} />

      <hr />

      <nameContext.Provider value={"Abhaya"}>
        <Profile />
      </nameContext.Provider>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        inc {count}
      </button>
    </div>
  );
}

export { nameContext };

export default App;
