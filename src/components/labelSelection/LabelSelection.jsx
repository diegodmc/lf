import React from 'react';
import PropTypes from 'prop-types';
import labelSelectionStyle from './labelselection.module.scss';
import {
	X
} from 'react-feather';

const LabelSelection = props => {

	return (
		<label className={props.scroll ? labelSelectionStyle.selectionLabelScroll : labelSelectionStyle.selectionLabel}>
			{ props.label ? props.label.substring(0, 30) : props.label}
			{ props.onRemove ? <X onClick={props.onRemove} size={18} /> : null}
		</label>
	);
}

LabelSelection.propTypes = {
	label: PropTypes.string.isRequired,
	onRemove: PropTypes.func.isRequired,
	required: PropTypes.bool,
	scroll: PropTypes.bool
}

export default LabelSelection;