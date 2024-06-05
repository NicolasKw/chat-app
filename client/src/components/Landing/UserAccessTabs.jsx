import { PropTypes } from 'prop-types';

export default function UserAccessTabs({ children }) {
    return <div className="flex flex-row justify-around mb-6 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        {children}
    </div>
}

UserAccessTabs.propTypes = {
    children: PropTypes.node.isRequired
}