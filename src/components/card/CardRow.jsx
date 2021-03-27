import React from 'react';
import PropTypes from 'prop-types';
import cardRowStyles from './cardRow.module.scss';

const CardRow = props => {

	const getClassName = () => {
		let classes = cardRowStyles.cardRow + ' ';
		if (props.bordered) {
			classes += cardRowStyles.cardRowBorder + ' ';
		}
		if (props.transparent) {
			classes += cardRowStyles.cardRowTransparent + ' ';
		}
		if (props.scroll) {
			classes += cardRowStyles.cardRowScroll + ' ';
		}
		return classes;
	}

	return (
		<div
			className={getClassName()}
			data-testid="card-row"
			style={{
				flex: props.flex ? props.flex : '0',
				padding: props.padding ? props.padding : '0px',
				justifyContent: props.justifyContent ? props.justifyContent : '',
				flexDirection: props.reverse ? 'row-reverse' : 'row',
				flexWrap: props.flexWrap ? props.flexWrap : 'unset',
				alignItems: props.itemAlign ? props.itemAlign : 'unset'
			}}
		>
			{ props.children}
		</div>
	)
}

CardRow.propTypes = {
	flex: PropTypes.number,
	justifyContent: PropTypes.string,
	flexWrap: PropTypes.string,
	itemAlign: PropTypes.string,
	bordered: PropTypes.bool,
	transparent: PropTypes.bool,
	scroll: PropTypes.bool,
	reverse: PropTypes.bool,
	padding: PropTypes.string,
}

export default CardRow;