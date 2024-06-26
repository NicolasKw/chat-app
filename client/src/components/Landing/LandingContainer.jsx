import { PropTypes } from 'prop-types';

export default function LandingContainer({ children }) {
    return <div className="flex flex-col items-center py-10 z-10">
        {children}
    </div>
}

LandingContainer.propTypes = {
    children: PropTypes.node.isRequired
}