import axios from "axios";
import { useRef } from "react"
import { useNavigate } from "react-router-dom";


export default function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        axios.post('http://localhost:4000/api/auth/login', {email,password})
        .then(res => {
            //console.log("Token" + res.data.token)
            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Name', res.data.name);
            navigate('/'); // go to home page
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h2>Login</h2>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" ref={emailRef} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" ref={passwordRef} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}