import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';
import '../Components/Style.css';

const AppFrame = ({ header, body }) => {
    return (
        <div className="appFrame">
            <AppHeader title={header} />
            <div>
                {body}
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,

};

export default AppFrame;