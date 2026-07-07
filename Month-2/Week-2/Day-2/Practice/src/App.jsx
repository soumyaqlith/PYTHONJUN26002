import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  // case 1
  // it will execute at every render
  // useEffect(() => {
  //   console.log("every render");
  // });

  // case 2
  // it will execute at first render
  // useEffect(()=>{
  //   console.log("at first render")
  // },[])
  
  // case 3
  useEffect(()=>{
    console.log("when count variable will update")
    return ()=>{
      console.log("value removed")
    }
  },[total,count])


  return (
    <div>
      <button onClick={()=>setCount(count+1)}>inc {count}</button>
      <button onClick={()=>setTotal(total+1)}>Total {total}</button>
    </div>
  );
}

export default App;





// import AlreadyLogin from "./AlreadyLogin";
// import "./App.css";

// function App() {
//   let isLogin = false;
//   //   if(isLogin){
//   //     return (<>
//   //       <AlreadyLogin/>
//   //     </>)
//   //   }
//   //  return (
//   //   <>THe user has not login</>
//   //  )

//   return (
//     <div>{isLogin ? <AlreadyLogin /> : <h1>THe user has not login</h1>}</div>
//   );
// }

// export default App;
