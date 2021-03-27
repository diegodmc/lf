import React from 'react';
import PropTypes from 'prop-types';
import breadCrumbStyle from './breadCrumb.module.scss';


const BreadCrumb = props => {

    return (
        <div className={breadCrumbStyle.breadCrumb} flex={1}>
            <span className={breadCrumbStyle.textPrimarybreadCrumb}>{('Home')}</span>
            <span className={breadCrumbStyle.delimitedBreadCrumb}> /</span>
            <span className={breadCrumbStyle.textSecondarybreadCrumb}> {props.secondary}  </span>
            {props.third ?
                (<span>
                    <span className={breadCrumbStyle.delimitedBreadCrumb}> /</span>
                    <span className={breadCrumbStyle.textSecondarybreadCrumb}> {props.third}</span>
                </span>)
                : null
            }
        </div>
    );
}

BreadCrumb.propTypes = {
    secondary: PropTypes.string.isRequired,
    third: PropTypes.string,
}

export default BreadCrumb