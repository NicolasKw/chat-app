import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { PropTypes } from "prop-types";

export default function Landing({ fetchedUsers }) {

    return <div>
        <SignIn />
        <SignUp fetchedUsers={fetchedUsers} />
    </div>
}

Landing.propTypes = {
    fetchedUsers: PropTypes.array
}

