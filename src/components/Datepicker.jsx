import React, { useState, useEffect, Fragment } from "react"
import styled from "styled-components"
import PropTypes from "prop-types";

//Assets
import DoubleLeft from "../assets/double-left.svg"
import DoubleRight from "../assets/double-right.svg"
import Left from "../assets/left.svg"
import Right from "../assets/right.svg"

const LABEL = styled.label`
    margin-right: 5px;
    ${(props) => props.customStyle}
`

const INPUT = styled.input`
    ${(props) => props.customStyle}

    ::placeholder {
        ${(props) => props.customPlaceholder}
    }
`

const DATEPICKER = styled.div`
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
    ${(props) => props.customStyle}
`

const HEADER = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 10px;
    padding-top: 5px;
    ${(props) => props.customStyle}
`

const IMG = styled.img`
    height: 20px;
    cursor: pointer;
    ${(props) => props.customStyle}
`

const YEAR = styled.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
    ${(props) => props.customStyle}
`

const MONTH = styled.div`
    display: flex;
    justify-content: center;
    ${(props) => props.customStyle}
`

const NAMEDAYS = styled.div`
    display: flex;
    width: 100%;
    ${(props) => props.customStyle}
`

const NAMEDAY = styled.div`
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
    font-weight: bold;
    padding-bottom: 5px;
    ${(props) => props.customStyle}
`

const DAYS = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    ${(props) => props.customStyle}
`

const TODAY = styled.div`
    cursor: pointer;
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
    background-color: #F00;
    color: #FFF;
    ${(props) => props.customStyle}
`

const DAY = styled.div`
    cursor: pointer;
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
    :hover {
        background-color: #F00;
        ${(props) => props.customHover}
    }
    ${(props) => props.customStyle}
`

const OUTSIDEDAY = styled.div`
    color: rgba(0,0,0,.5);
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
    ${(props) => props.customStyle}
`

/**
* @param {object} props - Props
* @param {date} date - To set up the date
* @param {string} doubleLeft - To change the default double left image
* @param {string} doubleRight - To change the default double right image
* @param {string} id - To change the default id of the input (id) and if of datepicker (idDatepicker)
* @param {string} label - To change the label
* @param {string} left - To change the default left image
* @param {function} onChange - To add a action when input value change
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

function Datepicker ({ date, doubleLeft, doubleRight, id, label, left, onChange, placeholder, right, styleArrow, styleContainerNameDay, styleContainerNumberDay, styleDatePicker, styleHeader, styleHover, styleInput, styleLabel, styleMonth, styleNameDay, styleNumberDay, styleOutsideDay, stylePlaceholder, styleSelectedDay, styleYear }) {
    const [seletedDate, setSeletedDate] = useState(date)
    const [seletedDay, setSeletedDay] = useState(seletedDate.toDateString().substring(8,10))
    const [seletedMonth, setSeletedMonth] = useState(seletedDate.toDateString().substring(8,10))
    const [seletedYear, setSeletedYear] = useState(seletedDate.toDateString().substring(11,15))
    const [active, setActive] = useState(false)
    const [year, setYear] = useState(date.getFullYear())
    const [month, setMonth] = useState(date.getMonth())
    const [nbDays, setnbDays] = useState(40 - new Date(year, month, 40).getDate())
    const [firstDay, setfirstDay] = useState(new Date(year, month, 1).toDateString().substring(0,3))
    const [previousMonthDays, setPreviousMonthDays] = useState([])
    const [monthDays, setMonthDays] = useState([])
    const [nextMonthDays, setNextMonthDays] = useState([])

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const idDatepicker = id + "Datepicker"

    useEffect(() => {
        monthDetails()
    },[])

    useEffect(() => {
        setSeletedDay(seletedDate.toDateString().substring(8,10))
        setSeletedMonth(seletedDate.toDateString().substring(4,7))
        setSeletedYear(seletedDate.toDateString().substring(11,15))
    },[seletedDate])

    const monthDetails = () => {
        const previousMonth = []
        const endPreviousMonth = 40 - new Date(year, month - 1, 40).getDate()
        const indexBegin = days.indexOf(firstDay)
        for (let i = indexBegin-1; i >= 0; i--) {
            previousMonth.push(endPreviousMonth - i)
        }
        setPreviousMonthDays(previousMonth)

        const currentMonth = []
        for (let i = 1; i <= nbDays; i++) {
            currentMonth.push(i)
        }
        setMonthDays(currentMonth)

        const nextMonth = []
        const endArray = 42 - currentMonth.length - previousMonth.length
        for (let i = 1; i <= endArray; i++) {
            nextMonth.push(i)
        }
        setNextMonthDays(nextMonth)
    }

    const changeMonth = (nb) => {
        if (month + nb === 12) {
            setYear(year + 1)
            setMonth(0)
        } else if (month + nb === -1) {
            setMonth(11)
            setYear(year - 1)
        } else {
            setMonth(month + nb)
        }
    }

    const changeYear = (nb) => {
        setYear(year + nb)
    }

    useEffect(() => {
        setnbDays(40 - new Date(year, month, 40).getDate())
        setfirstDay(new Date(year, month, 1).toDateString().substring(0,3))
    },[year, month])

    useEffect(() => {
        monthDetails()
    },[firstDay])

    const selectDate = (e) => {
        let day = e.target.innerHTML
        setSeletedDate(new Date(year, month, day))
        day = day.length === 1 ? "0" + day : day
        const displayMonth = ((month + 1).toString().length) === 1 ? "0" + (month + 1) : (month + 1)
        document.getElementById(id).value = displayMonth + "/" + day + "/" + year
        {onChange()}
        setActive(false)
    }

    useEffect((e) => {
        const close = (e) => {
            const container = Array.from(document.querySelectorAll("#" + idDatepicker + " *"))
            if (container.indexOf(e.target) !== -1 || document.getElementById(idDatepicker) === e.target) {
            } else {
                setActive(false)
                window.removeEventListener("click", close)
                window.removeEventListener("keydown", escape)
            }
        }

        const escape = (e) => {
            if (e.key === "Escape") {
                setActive(false)
                window.removeEventListener("keydown", escape)
                window.removeEventListener("click", close)
                document.getElementById(id).blur()
            }
        }

        active && window.addEventListener("click", close)
        active && window.addEventListener("keydown", escape)
    }, [active])


    return (
        <Fragment>
            {label !== "" && <LABEL customStyle = {styleLabel}>{label}</LABEL>}
            <INPUT
                readOnly
                id = {id}
                customStyle = {styleInput}
                customPlaceholder = {stylePlaceholder}
                placeholder = {placeholder}
                onClick = {() => setActive(true)}
            />
            {active ?
                <DATEPICKER id = {idDatepicker} customStyle = {styleDatePicker}>
                    <HEADER customStyle = {styleHeader}>
                        <IMG alt = "previous year" customStyle = {styleArrow} onClick = {() => changeYear(-1)} src = {doubleLeft}/>
                        <IMG alt = "previous month" customStyle = {styleArrow} onClick = {() => changeMonth(-1)}  src = {left}/>
                        <div>
                            <YEAR customStyle = {styleYear} >{year}</YEAR>
                            <MONTH customStyle = {styleMonth}>{months[month]}</MONTH>
                        </div>
                        <IMG alt = "next month" customStyle = {styleArrow} onClick = {() => changeMonth(1)} src = {right}/>
                        <IMG alt = "next year" customStyle = {styleArrow} onClick = {() => changeYear(1)} src = {doubleRight}/>
                    </HEADER>
                    <NAMEDAYS customStyle = {styleContainerNameDay}>
                        {days.map((day, index) => (
                            <NAMEDAY customStyle = {styleNameDay} key = {index}>
                                {day}
                            </NAMEDAY>
                        ))}
                    </NAMEDAYS>
                    <DAYS customStyle = {styleContainerNumberDay}>
                        {previousMonthDays.map((previousMonthDay, index) => (
                            <OUTSIDEDAY customStyle = {styleOutsideDay} key = {index}>
                                {previousMonthDay}
                            </OUTSIDEDAY>
                        ))}
                        {monthDays.map((monthDay, index) => (
                            (monthDay == seletedDay && months[month].substring(0,3) === seletedMonth && year == seletedYear) ?
                                <TODAY customStyle = {styleSelectedDay} key = {index} onClick = {(e) => selectDate(e)}>
                                    {monthDay}
                                </TODAY>
                            :
                                <DAY customStyle = {styleNumberDay} customHover = {styleHover} key = {index} onClick = {(e) => selectDate(e)}>
                                    {monthDay}
                                </DAY>
                        ))}
                        {nextMonthDays.map((nextMonthDay, index) => (
                            <OUTSIDEDAY customStyle = {styleOutsideDay} key = {index}>
                                {nextMonthDay}
                            </OUTSIDEDAY>
                        ))}
                    </DAYS>
                </DATEPICKER>
            :
                null
            }
        </Fragment>
    )
}

Datepicker.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    doubleLeft: PropTypes.string,
    doubleRight: PropTypes.string,
    id: PropTypes.string, 
    label: PropTypes.string,
    left: PropTypes.string,
    onblur: PropTypes.func,
    placeholder: PropTypes.string,
    right: PropTypes.string,
    styleArrow: PropTypes.object,
    styleContainerNameDay: PropTypes.object,
    styleContainerNumberDay: PropTypes.object,
    styleDatePicker: PropTypes.object,
    styleHeader: PropTypes.object,
    styleHover: PropTypes.object,
    styleInput: PropTypes.object,
    styleLabel: PropTypes.object,
    styleMonth: PropTypes.object,
    styleNameDay: PropTypes.object,
    styleNumberDay: PropTypes.object,
    styleOutsideDay: PropTypes.object,
    stylePlaceholder: PropTypes.object,
    styleSelectedDay: PropTypes.object,
    styleYear: PropTypes.object,
}

Datepicker.defaultProps = {
    doubleLeft: DoubleLeft,
    doubleRight: DoubleRight,
    id: "default",
    label: "",
    onChange: () => {},
    placeholder: "",
    left: Left,
    right: Right,
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
    styleYear: {},
}

export default Datepicker