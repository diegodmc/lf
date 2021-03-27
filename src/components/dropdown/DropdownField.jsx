import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Label, TextField } from '..';
import { Search, X } from 'react-feather';
import dropdownStyle from './dropdownfield.module.scss';
import Arrow from '../../styles/img/arrow.svg';

const DropdownField = props => {

  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    const optionsTemp = props.options ? props.options : [];
    setOptions(optionsTemp);

    const selectedTemp = optionsTemp.filter ? optionsTemp.filter((option) => { return props.value && option[props.valueField] === props.value; }) : [];

    setSelected(selectedTemp.length > 0 ? selectedTemp[0] : null);

    //IF ONLY ONE OPTION ALREADY SELECT IT
    if (optionsTemp.length === 1) {
      setSelected(optionsTemp[0]);
      const res = { target: { value: optionsTemp[0][props.valueField], name: props.name } };
      props.onChange(res);
    }

  }, [props.options, props.value]);

  const handleChangeDropdown = (evt) => {
    if (evt && evt.target) {
      let optionsTemp = props.options.filter((option) => { return option[props.labelField].toString().trim().toLowerCase().indexOf(evt.target.value.toString().trim().toLowerCase()) !== -1; })
      setText(evt.target.value);
      setOptions(optionsTemp);
    }
  };

  const handleSelect = (evt, option) => {
    const res = { target: { value: option[props.valueField], name: option[props.labelField] } };
    setShow(false);
    props.onChange(res);
  };

  const handleShowList = () => (
    <div>
      <div className={dropdownStyle.dropdownList}>
        <div>
          <Search />
          <TextField
            name="str_text"
            margin="-8px 0px 0px 0px"
            padding="8px 2px 8px 30px"
            value={text}
            onChange={handleChangeDropdown}
          />
        </div>
        {
          options.map((option, index) => (
            selected && selected[props.valueField] === option[props.valueField]
              ?
              <div
                className={dropdownStyle.dropdownOptionSelected}
                key={index}
              >
                {handleShowRowComponent(option)}
                <X onClick={(evt) => { handleSelect(evt, { ...option, [props.valueField]: null }); }} size={18} />
              </div>
              :
              <div
                className={dropdownStyle.dropdownOption}
                key={index}
                onClick={(evt) => { handleSelect(evt, option); }}
              >
                {handleShowRowComponent(option)}
              </div>
          ))
        }
      </div>
      <div className={dropdownStyle.dropdownOuterList} onClick={(evt) => { setShow(false); }}></div>
    </div>
  );

  const handleShowRowComponent = (option) => {
    return <Label
      label={option[props.labelField]}
    />;
  };

  return (
    <div style={{ margin: props.margin ? props.margin : '8px', flex: props.flex ? props.flex : 1 }} className={dropdownStyle.dropdownContainer}>
      <Label label={props.label ? props.label : ''} />
      {
        <div onClick={(evt) => { setShow(!show); }} className={props.WithoutBorder ? dropdownStyle.dropdownSelectionContainerWithoutBorder : dropdownStyle.dropdownSelectionContainer} >
          {(selected ? selected[props.labelField] : (props.placeholder ? props.placeholder : ('common_select_option')))}
          <img src={Arrow} className={dropdownStyle.dropdownArrowIcon} />
        </div>
      }
      {show ? handleShowList() : null}
    </div>
  );
}

DropdownField.propTypes = {
  options: PropTypes.array.isRequired,
  valueField: PropTypes.string.isRequired,
  labelField: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  margin: PropTypes.string,
  flex: PropTypes.number,
  WithoutBorder: PropTypes.bool
}

export default DropdownField;