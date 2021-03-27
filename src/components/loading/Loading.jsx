import React from 'react';
import PropTypes from 'prop-types';
import loadingStyle from './loading.module.scss';
import {
	RefreshCcw
} from 'react-feather';

const Loading = props => {

	return (
		<div style={{ display: props.loading ? "block" : "none" }} className={loadingStyle.loading}>
			<RefreshCcw />
			{ props.label}
		</div>
	);
}

Loading.propTypes = {
	label: PropTypes.string,
	loading: PropTypes.bool
}

export default Loading;