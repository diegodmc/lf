import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Search, Edit2, Trash, BarChart } from 'react-feather';
import { Button } from '..';
import genericTableStyle from './genericTable.module.scss';
import Spinner from '../spinner/Spinner';
import Checkbox from '../checkbox/Checkbox';
import down from '../../styles/img/down.svg';
import { Link } from "react-router-dom";

const MAX_PAGE_ROWS = 100;
const INITIAL_PAGE = 1;
const arr_selected = [];

const GenericTable = props => {

  const [filters, setFilters] = useState({});
  const [intRows, setIntRows] = useState(props.rowsPage ? props.rowsPage : MAX_PAGE_ROWS);
  const [intPage, setIntPage] = useState(INITIAL_PAGE);
  const [filteredRows, setFilteredRows] = useState(props.arrRow);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const filters = {};
    props.arrHeader.forEach(header => {
      filters[header.field] = ''
    });
    setFilters(filters);
  }, []);

  useEffect(() => {
    debugger;
    setFilteredRows(props.arrRow);
    filter();
  }, [props.arrRow]);

  const renderCellContent = (header, row, index) => {

    if (header && (header.action || header.onMouseEnter || header.onMouseLeave)) {
      if (header.type === "link") {
        return <div style={{ marginLeft: "45%" }}>
          <Link to="/ChartStats"><BarChart onClick={() => localStorage.setItem('device_id', row.device_id)} /></Link>

        </div>
      }
      if (header.type === "button") {
        if (row[header.field] === null) {
          return <Button
            label={header.description}
            onClick={header.action ? header.action(row, index) : null}
            confirm
          />;
        } else {
          return null;
        }
      } else if (header.type === "multi-action" && (header.action)) {
        const object = row[header.data];
        return object?.map((item, i) => (
          <React.Fragment key={i}>
            <span
              key={`${index}-${item.key}`}
              style={{ margin: '0px 5px 0px 0px' }}
              className={(!header.activation) || (header.activation && header.activation(item)) ? genericTableStyle.actionCell : null}
              onClick={header.action && (!header.activation || (header.activation && header.activation(item))) ? header.action(row, index, item.value) : null}
            >
              {item.label}
            </span>
            <br />
          </React.Fragment>
        ));
      } else {
        return <span
          className={genericTableStyle.actionCell}
          onClick={header.action ? header.action(row, index) : null}
          onMouseEnter={header.onMouseEnter ? header.onMouseEnter(row, index) : null}
          onMouseLeave={header.onMouseLeave ? header.onMouseLeave(row, index) : null}
        >
          {row[header.field]}
        </span>;
      }
    }
    if (header && (header.type && header.type === "datetime")) {
      if (row[header.field] !== null) {
        const date = new Date(Date.parse(row[header.field]));
        const hours = date.getHours();
        const minutes = date.getMinutes()
        return `${date.getDate()}-${((`month_${date.getMonth()}`)).substring(0, 3)}-${date.getFullYear()} ${(hours < 10 ? '0' + hours : hours)}:${(minutes < 10 ? '0' + minutes : minutes)}`;
      } else {
        return '';
      }
    }
    if (header && (header.type && header.type === "datemonth")) {
      if (row[header.field] !== undefined) {
        const date = row[header.field];
        const month = date.substring(5, 7);
        const year = date.substring(0, 4);
        return `${((`month_${month - 1}`)).substring(0, 3)}-${year}`;
      } else {
        return '';
      }
    }
    if (header && (header.type && header.type === "date")) {
      return (new Date(Date.parse(row[header.field]))).toLocaleDateString('pt-BR');
    }
    if (header && (header.type && header.type === "style")) {
      return (<div style={{ marginLeft: "20%" }}>
        <span style={{ height: '15px', width: '15px', top: '3px', backgroundColor: row.color, borderRadius: '50%', display: 'inline-block' }} />

        &nbsp;{  row[header.field]}
      </div>
      )

    }
    return (<div onClick={handleCellClick} >
      {header.field === 'val_step' && row.bol_parent ?
        <>
          <img src={down} style={{ height: "10px", marginLeft: '10px', cursor: 'pointer' }} />
          <span style={{ marginLeft: '3px' }}> {row[header.field]}</span>
        </> :
        (header.field === 'val_step' && !row.bol_parent ? <div style={{ marginLeft: '30px' }}>{row[header.field]}</div> :
          ((header.field === 'step_ideal_duration' || row.withOutColor) ?
            <div style={{ textAlign: "center" }}>{row[header.field]}</div> :
            <div style={{ textAlign: "center", color: String(row[header.field]).substr(String(row[header.field]).indexOf('#'), String(row[header.field]).length - 1), fontWeight: 'bold' }}>{String(row[header.field]).includes("#") ? String(row[header.field]).substr(0, String(row[header.field]).indexOf('#')) : (row[header.field] === undefined ? '' : String(row[header.field]))} </div>
          )
        )
      }
    </div>
    );
  }

  const handleCellClick = (e) => {

    var arr_format = [];
    var rowValue = props.arrRow.find(element => element.val_step === e.currentTarget.outerText.trim());

    if (rowValue !== undefined) {
      if (arr_selected.includes(rowValue.val_step)) {
        arr_selected.splice(arr_selected.indexOf(rowValue.val_step), 1);

        arr_format = filteredRows.map((item) => {
          if (item.val_step_group === rowValue.val_step_group && !item.bol_parent)
            item.visible = true;
          return item;
        })


      } else {
        arr_selected.push(rowValue.val_step);

        arr_format = filteredRows.map((item) => {
          if (item.val_step_group === rowValue.val_step_group && !item.bol_parent)
            item.visible = false;
          return item;
        })
      }
      setFilteredRows(arr_format);
      renderRow(filteredRows, props.arrHeader)
    }
  }

  const filter = () => {
    setLoading(true);

    const emptyFilters = []
    props.arrHeader.forEach(header => {
      emptyFilters.push(!filters[header.field]);
    });

    if (!emptyFilters.some(emptyFilter => (emptyFilter === false))) {
      setFilteredRows(props.arrRow);
      setLoading(false);
      return;
    }

    const filteredValues = props.arrRow.filter(row => {
      let include = true;
      props.arrHeader.forEach(header => {
        if (filters[header.field]) {
          include &= row[header.field]?.toString().trim().toLowerCase().includes(filters[header.field].toString().trim().toLowerCase());
        }
      });
      return include;
    });
    setFilteredRows(filteredValues);

    setLoading(false);
  }

  const renderHeaders = () => {
    if (props.arrHeader) {
      return (
        <thead>
          <tr>
            {props.onCheck ? <th></th> : null}
            {renderHeader(props.arrHeader)}
            {props.onRemove ? <th></th> : null}
            {props.onEdit ? <th></th> : null}
          </tr>
          {
            props.searchable ?
              (
                <tr>
                  {props.onCheck ? <th></th> : null}
                  {renderHeaderSearch(props.arrHeader)}
                  {props.onRemove ? <th></th> : null}
                  {props.onEdit ? <th></th> : null}
                </tr>
              ) : null
          }
        </thead>
      )
    }
    return null;
  }

  const renderRows = () => {

    if (loading || props.loading) {
      return (
        <tbody>
          <tr>
            <td colSpan={20}><Spinner /></td>
          </tr>
        </tbody>);
    }
    
    if (filteredRows) {
      return (
        <tbody className={genericTableStyle.tbody}>
          {renderRow(filteredRows, props.arrHeader)}
        </tbody>
      );
    }
    return (
      <span>{('common_no_data')}</span>
    );
  }

  const renderHeader = headers => (

    headers.map((header, index) => (
      <th className={genericTableStyle.description} key={index} style={{ width: (header.fixed ? '301px' : '100px'), textAlign: (index === 0 ? (!props.tableWithChildren ? "center" : "left") : "center") }} >
        {header.type === 'button' ? null : header.description}
      </th>
    ))
  )

  const renderRemoveColumn = (row) => {
    if (props.onRemove) {
      return (
        <td style={{ textAlign: "center" }}>
          <span
            className={genericTableStyle.removeCell}
            onClick={props.onRemove(row)}>
            <Trash />
          </span>
        </td>
      )
    }
    return null;
  }

  const renderEditColumn = (row) => {
    if (props.onEdit) {
      return (
        <td style={{ textAlign: "center" }}>
          <span
            className={genericTableStyle.editCell}
            onClick={props.onEdit(row)}>
            <Edit2 />
          </span>
        </td>
      )
    }
    return null;
  }

  const renderCheckColumn = (row) => {
    if (props.onCheck) {
      return (
        <td style={{ textAlign: "center" }}>
          <Checkbox
            name="bol_check"
            value={row.bol_check}
            margin='0px 0px 0px -6px'
            onChange={(evt) => { props.onCheck(row, evt) }}
          />
        </td>
      )
    }
    return null;
  }

  const renderHeaderSearch = headers => (
    headers.map((header, index) => {
      return (
        <th key={index} style={props.headerStyle ? props.headerStyle : null}>
          {
            header.type !== "button" ?
              <div className={genericTableStyle.searchFieldContainer}>
                <Search className={genericTableStyle.searchIcon} size={20} />
                <input className={genericTableStyle.searchField} onChange={(event) => {
                  const filtersTemp = filters;
                  filtersTemp[header.field] = event.target.value;
                  setFilters(filtersTemp);
                  filter();
                }} />
              </div>
              :
              null
          }
        </th>
      )
    })
  )

  const renderRow = (rows, headers) => (

    rows.map((row, index) => {

      if ((index >= (intPage * intRows - intRows)) && (index < (intPage * intRows))) {
        return (

          row.visible ?

            (
              <tr key={index} className={row.bol_parent ? genericTableStyle.lineParent : genericTableStyle.lineChildren}>


                {renderCheckColumn(row)}
                {
                  headers.map((header, indexHeader) => (
                    <td key={indexHeader} >
                      {renderCellContent(header, row, index)}
                    </td>
                  ))
                }
                {renderEditColumn(row)}
                {renderRemoveColumn(row)}

              </tr>
            )

            : null

        )
      }
      return null;
    })


  )

  const renderNewRegisterButton = () => {
    if (props.newRegister) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Button
            confirm
            label={props.newRegister.label}
            onClick={props.newRegister.onClick}
          />
        </div>
      );
    }
    return (<div style={{ height: '12px' }}></div>);
  }

  return (
    <>
      {renderNewRegisterButton()}
      <table id="genericTable" className={genericTableStyle.table}>
        {renderHeaders()}
        {renderRows()}
      </table>
    </>
  );
}

GenericTable.propTypes = {
  arrRow: PropTypes.array,
  arrHeader: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    action: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    type: PropTypes.string
  })).isRequired,
  headerStyle: PropTypes.object,
  newRegister: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
  }),
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
  searchable: PropTypes.bool,
  loading: PropTypes.bool,
  rowsPage: PropTypes.number,
  tableWithChildren: PropTypes.bool
}

export default GenericTable;