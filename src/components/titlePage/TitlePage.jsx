import React from 'react';
import PropTypes from 'prop-types';
import titlePageStyle from './titlePage.module.scss';

const TitlePage = props => {

    return (
        //TODO ICON PROPS
        <div className={props.style} flex={1}>
            <div className={titlePageStyle.titlePage}>{props.primary}</div>
        </div>
    );
}

TitlePage.propTypes = {
    primary: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
}

export default TitlePage;