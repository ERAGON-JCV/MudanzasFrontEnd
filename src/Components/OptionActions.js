import React from 'react';
import PropTypes from 'prop-types';

const OptionActions = ({ children }) => {
    return (
        <div className="optionActions">
            <div>
                {children}
            </div>
        </div>
    );
};

OptionActions.propTypes = {
    children: PropTypes.node.isRequired,

};

export default OptionActions;