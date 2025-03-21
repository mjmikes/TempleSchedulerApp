import {useState} from "react";
import { useNavigate } from "react-router-dom";


//Define CreateUser Component
const CreateUser = () => {
    const [username, setUsername] = useState(""); // initialize Username
    const [password, setPassword] = useState(""); // initialize Password 
    const [errors, setErrors] = useState<{ username?: String; password?: string }>({});
    const navigate = useNavigate();

    // Validate Inputs 
    const validateForm = () => {
        let newErrors: { username?: string; password?: string } = {};

        if (!username.trim()) newErrors.username = "Username is required";
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 chracters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    // Handle Form Submission 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Creating user:", { username, password });
            navigate("/LoginPage");
        }
      };

    const handleCancel = () => {
        navigate("/LoginPage");
    }
    

// Returning the Form
return (
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            {errors.username && <p style={{color: "red"}}>{errors.username}</p>}

        </div>
        <div>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
            {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
        </div>
            
        <button type="submit">Create Account</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
);
}

export default CreateUser;