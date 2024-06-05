import Header from './Header';
import Contacts from './Contacts';
import Messages from './Messages';
import TextBox from './TextBox';
import { PropTypes } from 'prop-types';

export default function UserSession({ signedInUser, fetchedUsers }) {

    return <div>
        <Header signedInUser={signedInUser}/>
        <Contacts fetchedUsers={fetchedUsers} />
        <Messages />
        <TextBox />
    </div>
}

UserSession.propTypes = {
    signedInUser: PropTypes.object,
    fetchedUsers: PropTypes.array
}
