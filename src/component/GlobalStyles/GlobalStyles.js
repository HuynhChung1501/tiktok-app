
import "./GlobalStyles.module.scss";
import PropTypes from 'prop-types';

function GlobalStyles({ children }) {
    return (
        children
    );
}

PropTypes.prototype = {
    children: PropTypes.node.isRequired
}

export default GlobalStyles;