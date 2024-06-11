import PropTypes from 'prop-types';

export default function UserSessionContainer({ children }) {
    return <div className='flex flex-row h-full'>
        {children}
    </div>
}

UserSessionContainer.propTypes = {
    children: PropTypes.node.isRequired
}
