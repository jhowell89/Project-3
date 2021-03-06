import React from "react";
import "./style.css";



function LoginForm(props) {
    return (
            <form className="login-form">
            <div className="form-group">
            <h1 className="title">Login</h1>
                {/* <label htmlFor="Username">UserName:</label> */}
                <input
                    value={props.username}
                    onChange={props.handleInputChange}
                    name="userName"
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    id="userLogin"
                />
                <hr></hr>
                <input
                    value={props.password}
                    onChange={props.handleInputChange}
                    name="passWord"
                    type="password"
                    className="form-control"
                    placeholder="password"
                    id="passwordLogin"
                />
                <hr></hr>
                <button type="submit" onClick={props.handleLoginSubmit} className="btn btn-success">
                    Let me in
        </button>
        </div>
        
        
        </form>
    );
}



export default LoginForm;

