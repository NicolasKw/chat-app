import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { addSignedInUser, addUser } from "../../redux/usersSlice";
import { hashPassword } from "../../services/hashFunction";
import PropTypes from 'prop-types';
import { serverURL } from "../../../server.config";

export default function SignUp({ fetchedUsers }) {
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        username: '',
        password: '',
        repeatedPassword: '',
        name: '',
        lastName: ''
    });

    const [repeatedPasswordValidation, setRepeatedPasswordValidation] = useState(true);
    const [existingUserValidation, setExistingUserValidation] = useState(true);

    const handleChange = (event) => {
        setUser((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Validate inputs are not blank
        if(!user.username || !user.password || !user.name || !user.lastName) return;
        // Validate there is no existing user with same username
        if(fetchedUsers.some((fetchedUser) => fetchedUser.username === user.username)) {
            setExistingUserValidation(false)
            setUser((prevState) => ({ ...prevState, password: '', repeatedPassword: '' }));
            return;
        }
            
        try {
            // Validate repeat password matches
            if(user.password !== user.repeatedPassword) {
                setRepeatedPasswordValidation(false);
                setUser((prevState) => ({ ...prevState, password: '', repeatedPassword: '' }));
                return;
            }
            setRepeatedPasswordValidation(true);
            setExistingUserValidation(true);
            // Hash password
            const hashedUser = { 
                username: user.username, 
                hashedPassword: hashPassword(user.password),
                name: user.name,
                lastName: user.lastName
            };
            await axios.post(`${serverURL}/users/createUser`, hashedUser);
            dispatch(addUser(hashedUser));
            dispatch(addSignedInUser(hashedUser));
            setUser({
                username: '',
                password: '',
                repeatedPassword: '',
                name: '',
                lastName: ''
            })
        } catch (error) {
            console.log(error.message);
        }
    };

    return <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username" className="label">Username</label>
            <input type="text" className="input" name="username" value={user.username} onChange={handleChange}/>
            <label htmlFor="password" className="label">Password</label>
            <input type="password" className="input" name="password" value={user.password} onChange={handleChange}/>
            <label htmlFor="repeatedPassword" className="label">Repeat password</label>
            <input type="password" className="input" name="repeatedPassword" value={user.repeatedPassword} onChange={handleChange}/>
            <label htmlFor="name" className="label">Name</label>
            <input type="text" className="input" name="name" value={user.name} onChange={handleChange}/>
            <label htmlFor="lastName" className="label">Last name</label>
            <input type="text" className="input" name="lastName" value={user.lastName} onChange={handleChange}/>
            <button type="submit" className="btn-primary">Create User</button>
        </form>
        {(!repeatedPasswordValidation) && <h4 className="mt-2">Passwords do not match</h4>}
        {(!existingUserValidation) && <h4 className="mt-2 text-center">Username already exists. Sign in or create another username</h4>}
    </div>
}

SignUp.propTypes = {
    fetchedUsers: PropTypes.array
}
