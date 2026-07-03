import React, { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleRegister(){
    localStorage.setItem("data",JSON.stringify(formData))
  }


  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        placeholder="Enter your age"
        name="age"
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        onChange={handleChange}
      />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterForm;
