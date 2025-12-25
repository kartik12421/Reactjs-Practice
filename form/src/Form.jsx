import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    firstName: "",
    userName: "",
    password: "",
  });

  let inputHandle = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form onsubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={formData.firstName}
        onChange={inputHandle}
        id="firstName"
        name="firstName"
      />

      <br /><br />

      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Enter Username"
        value={formData.userName}
        onChange={inputHandle}
        id="username"
        name="userName"
      />

      <br /><br />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter Your password"
        value={formData.password}
        onChange={inputHandle}
        id="password"
        name="password"
      />

      <br /><br />

      <button>Submit</button>
    </form>
  );
}
