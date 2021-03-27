import React from 'react';
import PropTypes from 'prop-types';
import buttonStyle from './button.module.scss';

const Button = props => {

	const getClassName = () => {
		let classes = buttonStyle.button + ' ';
		if (props.confirm) {
			classes += buttonStyle.confirmButton + ' ';
		}
		if (props.neutral) {
			classes += buttonStyle.neutralButton + ' ';
		}
		if (props.remove) {
			classes += buttonStyle.removeButton + ' ';
		}
		if (props.round) {
			classes += buttonStyle.roundButton + ' ';
		}
		if (props.disabled) {
			classes += buttonStyle.disabledButton + ' ';
		}
		if (props.all) {
			if (!props.toggleColor) classes += buttonStyle.activeButtonAll + ' ';
			else classes += buttonStyle.activeOnButtonAll + ' ';
		}
		if (props.active) {

			if (!props.toggleColor) classes += buttonStyle.activeButton + ' ';
			else classes += buttonStyle.activeOnButton + ' ';
		}
		return classes;
	}

	return (
		props.visible ?
			<button
				className={getClassName()}
				data-testid="button"
				onClick={props.disabled ? null : props.onClick}
				style={{
					margin: props.margin ? props.margin : '0',
					position: props.position ? props.position : 'relative',
					zIndex: 1,
					visible: false
				}}
			>
				{props.label}
			</button>
			:
			null
	);
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	confirm: PropTypes.bool,
	neutral: PropTypes.bool,
	disabled: PropTypes.bool,
	round: PropTypes.bool,
	all: PropTypes.bool,
	remove: PropTypes.bool,
	margin: PropTypes.string,
	position: PropTypes.string,
	toggleColor: PropTypes.bool,
	visible: PropTypes.bool,
}

export default Button