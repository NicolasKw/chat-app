import PropTypes from 'prop-types';

export default function UserInfoContainer({ children }) {
    return <div className='p-4 w-full max-w-s'>
        {children}
    </div>
}

UserInfoContainer.propTypes = {
    children: PropTypes.node.isRequired
}
