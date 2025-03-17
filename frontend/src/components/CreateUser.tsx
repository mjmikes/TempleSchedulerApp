import {useState} from "react";


//Define CreateUser Component
const CreateUser = () => {
    const [username, setUsername] = useState(""); // initialize Username
    const [password, setPassword] = useState(""); // initialize Password 


    // Handle Form Submission 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Creating user:", { username, password });
      };
    

// Returning the Form
return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/> 

        <button type="submit">Create Account</button>
    </form>
);
}

export default CreateUser;