import PropTypes from 'prop-types';

export default function UserInfoContainer({ children }) {
    return <div className='p-4 border-b w-full max-w-sm border-gray-800'>
        {children}
    </div>
}

UserInfoContainer.propTypes = {
    children: PropTypes.node.isRequired
}
