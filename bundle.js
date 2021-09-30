'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var img$3 = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='angle-double-left' class='svg-inline--fa fa-angle-double-left fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath fill='currentColor' d='M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z'%3e%3c/path%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='angle-double-right' class='svg-inline--fa fa-angle-double-right fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath fill='currentColor' d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z'%3e%3c/path%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='angle-left' class='svg-inline--fa fa-angle-left fa-w-8' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'%3e%3cpath fill='currentColor' d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'%3e%3c/path%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='angle-right' class='svg-inline--fa fa-angle-right fa-w-8' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'%3e%3cpath fill='currentColor' d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'%3e%3c/path%3e%3c/svg%3e";

const LABEL = styled__default["default"].label`
    margin-right: 5px;
    ${props => props.customStyle}
`;
const INPUT = styled__default["default"].input`
    ${props => props.customStyle}

    ::placeholder {
        ${props => props.customPlaceholder}
    }
`;
const DATEPICKER = styled__default["default"].div`
    position: absolute;
    margin-top: 2px;
    display: flex;
    width: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #FFF;
    border: solid 1px;
    padding: 5px;
    ${props => props.customStyle}
`;
const HEADER = styled__default["default"].div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 10px;
    padding-top: 5px;
    ${props => props.customStyle}
`;
const IMG = styled__default["default"].img`
    height: 20px;
    cursor: pointer;
    ${props => props.customStyle}
`;
const YEAR = styled__default["default"].div`
    display: flex;
    justify-content: center;
    font-size: 20px;
    ${props => props.customStyle}
`;
const MONTH = styled__default["default"].div`
    display: flex;
    justify-content: center;
    ${props => props.customStyle}
`;
const NAMEDAYS = styled__default["default"].div`
    display: flex;
    width: 100%;
    ${props => props.customStyle}
`;
const NAMEDAY = styled__default["default"].div`
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
    font-weight: bold;
    padding-bottom: 5px;
    ${props => props.customStyle}
`;
const DAYS = styled__default["default"].div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    ${props => props.customStyle}
`;
const TODAY = styled__default["default"].div`
    cursor: pointer;
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
    background-color: #F00;
    color: #FFF;
    ${props => props.customStyle}
`;
const DAY = styled__default["default"].div`
    cursor: pointer;
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
    :hover {
        background-color: #F00;
        ${props => props.customHover}
    }
    ${props => props.customStyle}
`;
const OUTSIDEDAY = styled__default["default"].div`
    color: rgba(0,0,0,.5);
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
    ${props => props.customStyle}
`;
/**
* @param {object} props - Props
* @param {date} date - To set up the date
* @param {string} doubleLeft - To change the default double left image
* @param {string} doubleRight - To change the default double right image
* @param {string} id - To change the default id of the input (id) and if of datepicker (idDatepicker)
* @param {string} label - To change the label
* @param {string} left - To change the default left image
* @param {function} onclick - To add a action when click on the input
* @param {string} placeholder - To change the placeholder
* @param {string} right - To change the default right image
* @param {object} styleArrow- To customize the img style
* @param {object} styleContainerNameDay - To customize the container style that contains the day names
* @param {object} styleContainerNumberDay - To customize the container style that contains the day numbers
* @param {object} styleDatePicker - To customize the datepicker container style
* @param {object} styleHeader - To customize the header style of datepicker
* @param {object} styleHover - To customize the hover day style
* @param {object} styleInput - To customize the input
* @param {object} styleLabel - To change the label style
* @param {object} styleMonth - To customize the style of the month displayed
* @param {object} styleNameDay - To customize the style of the day names
* @param {object} styleNumberDay - To customize the style of the days of the current month
* @param {object} styleOutsideDay - To customize the style of days that do not belong to the current month
* @param {object} stylePlaceholder - To change the placeholder style
* @param {object} styleSelectedDay - To customize the selected day style
* @param {object} styleYear - To customize the style of the year displayed
* @returns {component} - Date picker
*/

function Datepicker({
  date,
  doubleLeft,
  doubleRight,
  id,
  label,
  left,
  onclick,
  placeholder,
  right,
  styleArrow,
  styleContainerNameDay,
  styleContainerNumberDay,
  styleDatePicker,
  styleHeader,
  styleHover,
  styleInput,
  styleLabel,
  styleMonth,
  styleNameDay,
  styleNumberDay,
  styleOutsideDay,
  stylePlaceholder,
  styleSelectedDay,
  styleYear
}) {
  const [seletedDate, setSeletedDate] = React.useState(date);
  const [seletedDay, setSeletedDay] = React.useState(seletedDate.toDateString().substring(8, 10));
  const [seletedMonth, setSeletedMonth] = React.useState(seletedDate.toDateString().substring(8, 10));
  const [seletedYear, setSeletedYear] = React.useState(seletedDate.toDateString().substring(11, 15));
  const [active, setActive] = React.useState(false);
  const [year, setYear] = React.useState(date.getFullYear());
  const [month, setMonth] = React.useState(date.getMonth());
  const [nbDays, setnbDays] = React.useState(40 - new Date(year, month, 40).getDate());
  const [firstDay, setfirstDay] = React.useState(new Date(year, month, 1).toDateString().substring(0, 3));
  const [previousMonthDays, setPreviousMonthDays] = React.useState([]);
  const [monthDays, setMonthDays] = React.useState([]);
  const [nextMonthDays, setNextMonthDays] = React.useState([]);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const idDatepicker = id + "Datepicker";
  React.useEffect(() => {
    monthDetails();
  }, []);
  React.useEffect(() => {
    setSeletedDay(seletedDate.toDateString().substring(8, 10));
    setSeletedMonth(seletedDate.toDateString().substring(4, 7));
    setSeletedYear(seletedDate.toDateString().substring(11, 15));
  }, [seletedDate]);

  const monthDetails = () => {
    const previousMonth = [];
    const endPreviousMonth = 40 - new Date(year, month - 1, 40).getDate();
    const indexBegin = days.indexOf(firstDay);

    for (let i = indexBegin - 1; i >= 0; i--) {
      previousMonth.push(endPreviousMonth - i);
    }

    setPreviousMonthDays(previousMonth);
    const currentMonth = [];

    for (let i = 1; i <= nbDays; i++) {
      currentMonth.push(i);
    }

    setMonthDays(currentMonth);
    const nextMonth = [];
    const endArray = 42 - currentMonth.length - previousMonth.length;

    for (let i = 1; i <= endArray; i++) {
      nextMonth.push(i);
    }

    setNextMonthDays(nextMonth);
  };

  const changeMonth = nb => {
    if (month + nb === 12) {
      setYear(year + 1);
      setMonth(0);
    } else if (month + nb === -1) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month + nb);
    }
  };

  const changeYear = nb => {
    setYear(year + nb);
  };

  React.useEffect(() => {
    setnbDays(40 - new Date(year, month, 40).getDate());
    setfirstDay(new Date(year, month, 1).toDateString().substring(0, 3));
  }, [year, month]);
  React.useEffect(() => {
    monthDetails();
  }, [firstDay]);

  const selectDate = e => {
    let day = e.target.innerHTML;
    setSeletedDate(new Date(year, month, day));
    day = day.length === 1 ? "0" + day : day;
    const displayMonth = (month + 1).toString().length === 1 ? "0" + (month + 1) : month + 1;
    document.getElementById(id).value = displayMonth + "/" + day + "/" + year;
    setActive(false);
  };

  React.useEffect(e => {
    const close = e => {
      const container = Array.from(document.querySelectorAll("#" + idDatepicker + " *"));

      if (container.indexOf(e.target) !== -1 || document.getElementById(idDatepicker) === e.target) ; else {
        setActive(false);
        window.removeEventListener("click", close);
        window.removeEventListener("keydown", escape);
      }
    };

    const escape = e => {
      if (e.key === "Escape") {
        setActive(false);
        window.removeEventListener("keydown", escape);
        window.removeEventListener("click", close);
        document.getElementById(id).blur();
      }
    };

    active && window.addEventListener("click", close);
    active && window.addEventListener("keydown", escape);
  }, [active]);
  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, label !== "" && /*#__PURE__*/React__default["default"].createElement(LABEL, {
    customStyle: styleLabel
  }, label), /*#__PURE__*/React__default["default"].createElement(INPUT, {
    readOnly: true,
    id: id,
    customStyle: styleInput,
    customPlaceholder: stylePlaceholder,
    placeholder: placeholder,
    onClick: () => {
      setActive(true);
    }
  }), active ? /*#__PURE__*/React__default["default"].createElement(DATEPICKER, {
    id: idDatepicker,
    customStyle: styleDatePicker
  }, /*#__PURE__*/React__default["default"].createElement(HEADER, {
    customStyle: styleHeader
  }, /*#__PURE__*/React__default["default"].createElement(IMG, {
    customStyle: styleArrow,
    onClick: () => changeYear(-1),
    src: doubleLeft
  }), /*#__PURE__*/React__default["default"].createElement(IMG, {
    customStyle: styleArrow,
    onClick: () => changeMonth(-1),
    src: left
  }), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(YEAR, {
    customStyle: styleYear
  }, year), /*#__PURE__*/React__default["default"].createElement(MONTH, {
    customStyle: styleMonth
  }, months[month])), /*#__PURE__*/React__default["default"].createElement(IMG, {
    customStyle: styleArrow,
    onClick: () => changeMonth(1),
    src: right
  }), /*#__PURE__*/React__default["default"].createElement(IMG, {
    customStyle: styleArrow,
    onClick: () => changeYear(1),
    src: doubleRight
  })), /*#__PURE__*/React__default["default"].createElement(NAMEDAYS, {
    customStyle: styleContainerNameDay
  }, days.map((day, index) => /*#__PURE__*/React__default["default"].createElement(NAMEDAY, {
    customStyle: styleNameDay,
    key: index
  }, day))), /*#__PURE__*/React__default["default"].createElement(DAYS, {
    customStyle: styleContainerNumberDay
  }, previousMonthDays.map((previousMonthDay, index) => /*#__PURE__*/React__default["default"].createElement(OUTSIDEDAY, {
    customStyle: styleOutsideDay,
    key: index
  }, previousMonthDay)), monthDays.map((monthDay, index) => monthDay == seletedDay && months[month].substring(0, 3) === seletedMonth && year == seletedYear ? /*#__PURE__*/React__default["default"].createElement(TODAY, {
    customStyle: styleSelectedDay,
    key: index,
    onClick: e => selectDate(e)
  }, monthDay) : /*#__PURE__*/React__default["default"].createElement(DAY, {
    customStyle: styleNumberDay,
    customHover: styleHover,
    key: index,
    onClick: e => selectDate(e)
  }, monthDay)), nextMonthDays.map((nextMonthDay, index) => /*#__PURE__*/React__default["default"].createElement(OUTSIDEDAY, {
    customStyle: styleOutsideDay,
    key: index
  }, nextMonthDay)))) : null);
}

Datepicker.propTypes = {
  date: PropTypes__default["default"].instanceOf(Date).isRequired,
  doubleLeft: PropTypes__default["default"].string,
  doubleRight: PropTypes__default["default"].string,
  id: PropTypes__default["default"].string,
  label: PropTypes__default["default"].string,
  left: PropTypes__default["default"].string,
  onclick: PropTypes__default["default"].func,
  placeholder: PropTypes__default["default"].string,
  right: PropTypes__default["default"].string,
  styleArrow: PropTypes__default["default"].object,
  styleContainerNameDay: PropTypes__default["default"].object,
  styleContainerNumberDay: PropTypes__default["default"].object,
  styleDatePicker: PropTypes__default["default"].object,
  styleHeader: PropTypes__default["default"].object,
  styleHover: PropTypes__default["default"].object,
  styleInput: PropTypes__default["default"].object,
  styleLabel: PropTypes__default["default"].object,
  styleMonth: PropTypes__default["default"].object,
  styleNameDay: PropTypes__default["default"].object,
  styleNumberDay: PropTypes__default["default"].object,
  styleOutsideDay: PropTypes__default["default"].object,
  stylePlaceholder: PropTypes__default["default"].object,
  styleSelectedDay: PropTypes__default["default"].object,
  styleYear: PropTypes__default["default"].object
};
Datepicker.defaultProps = {
  doubleLeft: img$3,
  doubleRight: img$2,
  id: "default",
  label: "",
  onclick: () => {},
  placeholder: "",
  left: img$1,
  right: img,
  styleArrow: {},
  styleContainerNameDay: {},
  styleContainerNumberDay: {},
  styleDatePicker: {},
  styleHeader: {},
  styleHover: {},
  styleInput: {},
  styleLabel: {},
  styleMonth: {},
  styleNameDay: {},
  styleNumberDay: {},
  styleOutsideDay: {},
  stylePlaceholder: {},
  styleSelectedDay: {},
  styleYear: {}
};

exports.Datepicker = Datepicker;
