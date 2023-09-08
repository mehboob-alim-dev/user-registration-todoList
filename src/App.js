import { useState } from "react";
import InputField from "./InputField";
import "./styles.css";
const inputFields = [
  { type: "text", name: "firstName", label: "First Name" },
  { type: "text", name: "lastName", label: "Last Name" },
  { type: "email", name: "email", label: "Email" },
  { type: "password", name: "password", label: "Password" },
];
function App() {
  // Define a state variable to store user information
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  console.log(userList);
  // Event handler to update the user state when input fields change
  const handleInputChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    console.log(name, value);
    setUser((prevUser) => {
      console.log("previous user>>>>", user);
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  // Event handler to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any action with the user data, such as sending it to a server
    console.log("User data:", user);
    const newUser = { ...user };

    // Update the userList state with the new user object
    setUserList((prevUserList) => [...prevUserList, newUser]);

    // Clear the input fields after submitting
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  console.log(userList);
  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        {inputFields.map((field, index) => (
          <InputField
            key={index}
            type={field.type}
            name={field.name}
            value={user[field.name]}
            onChange={handleInputChange}
            label={field.label}
          />
        ))}
        <br />
        <button type="submit">Register</button>
      </form>
      <h2>User List</h2>
      <ul>
        {userList.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
