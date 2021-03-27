import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../';
import textFieldStyle from './textField.module.scss';

const TextField = props => {

	const getType = () => {
		if (props.text) {
			return 'text';
		} else if (props.number) {
			return 'number';
		} else if (props.password) {
			return 'password';
		} else {
			return 'text';
		}
	}

	return (
		<div
			className={textFieldStyle.textFieldContainer}
			style={{
				margin: props.margin ? props.margin : '0',
				flex: props.flex ? props.flex : 1
			}}
		>
			<Label label={props.label ? props.label : ''} />
			<input
				style={{
					padding: props.padding ? props.padding : '11px 5px',
					fontSize: '0.9em'
				}}
				autoComplete="off"
				name={props.name}
				type={getType()}
				value={props.value ? props.value : ''}
				onChange={props.onChange}
				onBlur={props.onBlur}
				onFocus={props.onFocus}
				placeholder={props.placeholder ? props.placeholder : ''}
				disabled={props.disabled ? "disabled" : ""}
			/>
		</div>
	);
}

TextField.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.any,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
	label: PropTypes.string,
	text: PropTypes.bool,
	number: PropTypes.bool,
	password: PropTypes.bool,
	placeholder: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string,
	disabled: PropTypes.bool,
	flex: PropTypes.string
}

export default TextField;