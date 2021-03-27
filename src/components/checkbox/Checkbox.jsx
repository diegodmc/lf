import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

const Checkbox = props => {
  const [value, setValue] = useState([]);
  const [ID, setID] = useState(1);

  useEffect(() => {
    setID(uuid());
    setValue(props.value ? props.value : (props.value === 1 ? true : false));
  }, [props.value]);

  const handleChangeCheck = (evt) => {
    const res = { target: { value: evt.target.checked ? 1 : 0, name: props.name } };
    props.onChange(res);
  };

  return (
    <div>
      <input
        id={ID}
        type="checkbox"
        data-testid="input-checkbox"
        onChange={handleChangeCheck}
        name={props.name}
        checked={value}
        style={{
          transform: 'scale(1.1)',
          position: "absolute",
          margin: props.margin ? props.margin : "13px 0px 0px 10px",
          cursor: "pointer"
        }}
      />
      <label
        htmlFor={ID}
        style={{
          display: "block",
          padding: props.padding ? props.padding : "8px 10px 8px 30px",
          cursor: "pointer"
        }}
      >
        {props.label}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string,
  onChange: PropTypes.func,
  margin: PropTypes.string,
  padding: PropTypes.string
}

export default Checkbox;