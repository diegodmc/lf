import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '..';
import textAreaStyle from './textArea.module.scss';

const TextArea = props => {

  return (
    <div
      className={textAreaStyle.textAreaContainer}
      style={{
        margin: props.margin ? props.margin : '0'
      }}
    >
      <Label label={props.label ? props.label : ''} />
      <textarea
        className={textAreaStyle.textArea}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        maxLength={props.maxLength ? props.maxLength : 150}
        placeholder={props.placeholder ? props.placeholder : ''}
        rows={4}
      />
    </div>
  );
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  margin: PropTypes.string,
  placeholder: PropTypes.string,
}

export default TextArea;