import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSignedInUser } from "../redux/usersSlice";
import { hashPassword } from "../services/hashFunction";
import axios from "axios";
import { serverURL } from "../../server.config";

export default function SignIn() {
    const dispatch = useDispatch();

    const userValidated = useSelector((state) => state.users.userValidated);

    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        setUser((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Validate inputs are not blank
        if(!user.username || !user.password ) return;
        // Hash password
        const hashedUser = { username: user.username, hashedPassword: hashPassword(user.password) };
        // Validate user
        axios.post(`${serverURL}/users/validateUser`, hashedUser)
            .then((value) => {
                dispatch(addSignedInUser(value.data));
                setSubmitted(true);
                setUser((prevState) => ({ ...prevState, password: '' }));
            })
            .catch((error) => {
                setSubmitted(true);
                setUser((prevState) => ({ ...prevState, password: '' }));
                console.log(error.message);
            })
    };

    return <div>
        <h3>Sign In</h3>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={user.username} onChange={handleChange} />

            <label htmlFor="username">Password</label>
            <input type="password" name="password" value={user.password} onChange={handleChange} />

            <button type="submit">Sign In</button>
        </form>
        {submitted && 
            <h4>{!userValidated && 'Invalid username and/or password. Please try again'}</h4>
        }
    </div>
}
