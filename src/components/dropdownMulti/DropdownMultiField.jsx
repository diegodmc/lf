import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  TextField,
  Checkbox,
  LabelSelection
} from '..';
import { Search } from 'react-feather';
import dropdownMultiStyle from './dropdownmultifield.module.scss';
import uuid from 'react-uuid';
import Arrow from '../../styles/img/arrow.svg';

const DropdownMultiField = props => {

  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [key, setKey] = useState();
  
  useEffect(() => {
    const optionsTemp = props.options ? props.options : [];
    setOptions(optionsTemp);
    setSelected(props.value && props.value.length > 0 ? props.value : []);
    setKey(uuid());

    //IF ONLY ONE OPTION ALREADY SELECT IT
    if (optionsTemp.length === 1) {
      setSelected(optionsTemp);
      const res = { target: { value: optionsTemp, name: props.name } };
      props.onChange(res);
    }

  }, [props.value, props.options]);


  const handleChangeDropdownMulti = (evt) => {
    if (evt && evt.target) {
      let optionsTemp = props.options.filter((option) => { return option[props.labelField].toString().trim().toLowerCase().indexOf(evt.target.value.toString().trim().toLowerCase()) !== -1; });
      setText(evt.target.value);
      setOptions(optionsTemp);
    }
  };

  const handleSelect = (evt, option) => {

    if (option.str_batch === "0") {
      let boll = !showAll;
      setShowAll(!showAll);
      handleSelectedAll(boll);
    }
    else {
      let selectedTemp = selected;
      //SELECT 
      if (evt.target && evt.target.value) {
        selectedTemp.push(option);
      }
      //UNSELECT
      if (evt.target && !evt.target.value) {
        selectedTemp = selected.filter((optionTemp) => { return optionTemp[props.valueField] !== option[props.valueField]; });
      }
      const res = { target: { value: selectedTemp, name: props.name } };
      props.onChange(res);
    }
  };

  const handleShowList = () => (

    <div>
      <div className={props.scroll ? dropdownMultiStyle.dropdownMultiListScroll : dropdownMultiStyle.dropdownMultiList}>
        <div>
          <Search />
          <TextField
            name="str_text"
            margin="8px 0px 0px 0px"
            padding="8px 2px 8px 30px"
            value={text}
            onChange={handleChangeDropdownMulti}
          />
        </div>
        {
          Object.values(options).filter((option) => {
            return option[props.labelField].toString().trim().toLowerCase().indexOf(text.toString().trim().toLowerCase()) !== -1;
          }
          ).map((option, index) => (

            <div
              className={dropdownMultiStyle.dropdownMultiOption}
              key={`${key}${index}`}
            >
              {handleShowRowComponent(option)}
            </div>
          ))
        }
      </div>
      <div className={dropdownMultiStyle.dropdownMultiOuterList} onClick={clearFilter}></div>
    </div>
  );

  const clearFilter = () => {
    setShow(false);
    setText('');
  }

  const handleSelectedAll = (boll) => {
    let selectedTemp = props.options;
    if (boll) setSelected(selectedTemp);
    if (!boll) setSelected([]);

    const res = { target: { value: boll ? selectedTemp : [], name: props.name } };
    props.onChange(res);

  }

  const handleShowRowComponent = (option) => {
    let bol_selected = false;

    Object.values(selected).filter((selectedTemp) => {
      if (selectedTemp[props.valueField] === option[props.valueField])
        bol_selected = true;
    })

    return <Checkbox
      label={option[props.labelField]}
      name="bol_selected"
      margin="8px"
      padding="6px 8px 6px 28px"
      value={bol_selected}
      onChange={(evt) => { handleSelect(evt, option); }}
    />;
  };

  return (
    <div style={{ margin: props.margin ? props.margin : '10px', flex: props.flex ? props.flex : 1 }} className={dropdownMultiStyle.dropdownMultiContainer}>
      <Label label={props.label ? props.label : ''} />
      {
        selected && selected.length > 0
          ?
          <div onClick={(evt) => { setShow(!show); }} className={props.scroll ? dropdownMultiStyle.dropdownMultiSelectionContainerScroll : dropdownMultiStyle.dropdownMultiSelectionContainer} >
            {
              selected.map((selectedTemp) => (
                <LabelSelection
                  key={`${key}${selectedTemp[props.valueField]}`}
                  label={selectedTemp[props.labelField]}
                  scroll={props.scroll ? true : false}
                  onRemove={!props.disabled ? (evt) => { handleSelect(evt, selectedTemp) } : null}
                />
              ))
            }
            <img src={Arrow} className={dropdownMultiStyle.dropdownArrowIcon} />
          </div>
          :
          <div onClick={(evt) => { setShow(!show); }} className={dropdownMultiStyle.dropdownMultiSelectionContainer} >
            {props.placeholder ? props.placeholder : ('common_select_option')}
            <img src={Arrow} className={dropdownMultiStyle.dropdownArrowIcon} />
          </div>
      }
      {show && !props.disabled ? handleShowList() : null}
    </div>
  );
}

DropdownMultiField.propTypes = {
  options: PropTypes.array.isRequired,
  valueField: PropTypes.string.isRequired,
  labelField: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  margin: PropTypes.string,
  disabled: PropTypes.bool,
  flex: PropTypes.number,
  scroll: PropTypes.bool,
}

export default DropdownMultiField;