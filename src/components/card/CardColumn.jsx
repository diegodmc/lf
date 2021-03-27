import React from 'react';
import PropTypes from 'prop-types';
import cardColumnStyles from './cardColumn.module.scss';

const CardColumn = props => {

	const getClassName = () => {
		let classes = cardColumnStyles.cardColumn + ' ';
		if (props.bordered) {
			classes += cardColumnStyles.cardColumnBorder + ' ';
		}
		return classes;
	}

	return (
		<div
			className={getClassName()}
			data-testid="card-column"
			style={{
				flex: props.flex ? props.flex : '1',
				flexGrow: props.flexGrow ? props.flexGrow : '1',
				margin: props.margin ? props.margin : '0',
				padding: props.padding ? props.padding : '8px'
			}}
		>
			{ props.children}
		</div>
	)
}

CardColumn.propTypes = {
	flex: PropTypes.number,
	bordered: PropTypes.bool,
	margin: PropTypes.string,
	padding: PropTypes.string,
	flexGrow: PropTypes.number,
}

export default CardColumn;