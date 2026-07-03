import { createContext } from "react";
import "./App.css";
import Home from "./Home";
import Count from "./Count";
import RegisterForm from "./RegisterForm";

// context object creation
// create the provider by using the context object
// add the value in the provider object
// export the context object
const nameContext = createContext();

function App() {
  return (
    <>
    
      <nameContext.Provider value={"subhankar"}>
        <Home />
      </nameContext.Provider>
      <Count></Count>
      <RegisterForm/>
    </>
  );
}
export {nameContext}
export default App;
