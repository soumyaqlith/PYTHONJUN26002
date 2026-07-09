import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  // async function postData() {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts",
  //       {
  //         method:"POST",
  //         body:JSON.stringify({
  //           name:"mental",
  //           age:30
  //         }),
  //         headers:{
  //           "Content-Type":"application/json"
  //         }
  //       }
  //     );
  //     const data =await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function updateData() {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts/5",
  //       {
  //         method:"PATCH",
  //         body:JSON.stringify({
  //           name:"mental",
  //           age:30
  //         }),
  //         headers:{
  //           "Content-Type":"application/json"
  //         }
  //       }
  //     );
  //     const data =await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function deleteData() {
    try {
      // const response = await fetch(
      //   "https://jsonplaceholder.typicode.com/posts/5",
      //   {
      //     method:"DELETE",
      //   }
      // );
      // const data =await response.json();
      // console.log(data);

      const resp = await axios.delete(
        "https://jsonplaceholder.typicode.com/posts/5",
      );

      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getData() {
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );

      setUsers(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return(
    <div>
      {
        users?.map((user)=>(
          <div>
            {user.title}
          </div>
        ))
      }
    </div>
  )
}

export default App;
