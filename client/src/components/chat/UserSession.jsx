import UserSessionContainer from './UserSessionContainer';
import LeftBarContainer from './LeftBarContainer';
import RightBarContainer from './RightBarContainer';
import UserInfoContainer from './userInfo/UserInfoContainer';
import UserInfo from './userInfo/UserInfo';
import ContactsContainer from './contacts/ContactsContainer';
import Contacts from './contacts/Contacts';
import ChatHeaderContainer from './chatHeader/ChatHeaderContainer';
import ChatHeader from './chatHeader/ChatHeader';
import MessagesContainer from './messages/MessagesContainer';
import Messages from './messages/Messages';
import TextBoxContainer from './textBox/TextBoxContainer';
import TextBox from './textBox/TextBox';
import { PropTypes } from 'prop-types';

export default function UserSession({ signedInUser, fetchedUsers }) {

    return <UserSessionContainer>
        <LeftBarContainer>
            <UserInfoContainer>
                <UserInfo signedInUser={signedInUser}/>
            </UserInfoContainer>
            <ContactsContainer>
                <Contacts fetchedUsers={fetchedUsers} />
            </ContactsContainer>
        </LeftBarContainer>
        <RightBarContainer>
            <ChatHeaderContainer>
                <ChatHeader />
            </ChatHeaderContainer>
            <MessagesContainer>
                <Messages />
            </MessagesContainer>
            <TextBoxContainer>
                <TextBox />
            </TextBoxContainer>
        </RightBarContainer>
    </UserSessionContainer>
}

UserSession.propTypes = {
    signedInUser: PropTypes.object,
    fetchedUsers: PropTypes.array
}
