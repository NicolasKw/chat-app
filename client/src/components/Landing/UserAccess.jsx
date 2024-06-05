import { useState } from "react";
import SignIn from "./SignIn";
import Register from "./Register";
import UserAccessContainer from "./UserAccessContainer";
import UserAccessTabs from "./UserAccessTabs";
import Tab from "./Tab";
import { PropTypes } from "prop-types";

export default function UserAccess({ fetchedUsers }) {

    const [screen, setScreen] = useState('signIn');

    return <UserAccessContainer>
        <UserAccessTabs>
            <Tab
                label="Sign in"
                onClick={() => setScreen('signIn')}
                isActive={screen === 'signIn'}
            />
            <Tab 
                label="Register"
                onClick={() => setScreen('signUp')}
                isActive={screen === 'register'}
            />
        </UserAccessTabs>
        <div>
            {(screen === 'signIn')
            ?
                <SignIn />
            : 
                <Register fetchedUsers={fetchedUsers} />
            }
        </div>
    </UserAccessContainer>
}

UserAccess.propTypes = {
    fetchedUsers: PropTypes.array
}

