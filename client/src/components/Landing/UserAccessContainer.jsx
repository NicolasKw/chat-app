import { PropTypes } from 'prop-types';

export default function UserAccessContainer({ children }) {
    return <div className="relative p-6 w-10/12 max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
        {children}
    </div>
}

UserAccessContainer.propTypes = {
    children: PropTypes.node.isRequired
}