import React, {useState, useEffect} from "react";
import './login.css';

export const Login = () =>  {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");

    //change name on key up event
    const handleNameChange = (event) => {
        setUsername(event.target.value);
    }

    //change pwd on key up event
    const handlePasswordChange =(e)=>{
        setPwd(e.target.value);
    }

    useEffect(() => {
        console.log(username);
        console.log(pwd);
    }, [username, pwd]);

    return (
        <div className="login-page">
            <header className="header">
                <h1>Task Manager</h1>
                <h4>Your Online Todo List !</h4>
            </header>
            <div>
                <input 
                    type="text"
                    placeholder="Enter your username "
                    value={username}
                    onChange={handleNameChange}
                />
                <input 
                    type="text"
                    placeholder="Enter your password "
                    value={pwd}
                    onChange={handlePasswordChange}
                />
            </div>
        </div>
    );
}

export default Login;