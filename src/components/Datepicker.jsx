import React, { useState, useEffect } from "react"
import styled from "styled-components"

//Assets
import DoubleLeft from "../assets/double-left.svg"
import DoubleRight from "../assets/double-right.svg"
import Left from "../assets/left.svg"
import Right from "../assets/right.svg"

const CONTAINER = styled.div`
    position: relative;
`

const DATEPICKER = styled.div`
    position: absolute;
    margin-top: 2px;
    padding: 5px 0;
    display: flex;
    width: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #FFF;
    border: solid 1px;
`

const HEADER = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 10px;
`

const IMG = styled.img`
    height: 20px;
    cursor: pointer;
`

const YEAR = styled.div`
    display: flex;
    justify-content: center;
`

const MONTH = styled.div`
    display: flex;
    justify-content: center;
`

const NAMEDAYS = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 5px;
`

const NAMEDAY = styled.div`
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
`

const DAYS = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`

const TODAY = styled.div`
    cursor: pointer;
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
    background-color: #F00;
    color: #FFF;
`

const DAY = styled.div`
    cursor: pointer;
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
`

const OUTSIDEDAY = styled.div`
    color: rgba(0,0,0,.5);
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
`

function Datepicker ({ date }) {
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
        document.getElementById("datepicker").value = displayMonth + "/" + day + "/" + year
        setActive(false)
        window.removeEventListener("keydown", escape)
        window.removeEventListener("click", close)
        document.body.click()
    }

    useEffect((e) => {
        const escape = (e) => {
            if (e.key === "Escape") {
                setActive(false)
                window.removeEventListener("keydown", escape)
                window.removeEventListener("click", close)
                document.getElementById("datepicker").blur()
            }
        }

        const close = (e) => {
            if (!e.target.classList.contains("in")) {
                setActive(false)
                window.removeEventListener("keydown", escape)
                window.removeEventListener("click", close)
            }
        }

        if (active) {
            window.addEventListener("keydown", escape)
            window.addEventListener("click", close)
        }
    },[active])

    return (
        <CONTAINER>
            <input id = "datepicker" onClick = {() => setActive(true)}/>
            {active ?
                <DATEPICKER className = "in">
                    <HEADER className = "in">
                        <IMG className = "in" onClick = {() => changeYear(-1)} src = {DoubleLeft}/>
                        <IMG className = "in" onClick = {() => changeMonth(-1)}  src = {Left}/>
                        <div className = "in">
                            <YEAR className = "in">{year}</YEAR>
                            <MONTH className = "in">{months[month]}</MONTH>
                        </div>
                        <IMG className = "in" onClick = {() => changeMonth(1)} src = {Right}/>
                        <IMG className = "in" onClick = {() => changeYear(1)} src = {DoubleRight}/>
                    </HEADER>
                    <NAMEDAYS className = "in">
                        {days.map((day, index) => (
                            <NAMEDAY className = "in" key = {index}>
                                {day}
                            </NAMEDAY>
                        ))}
                    </NAMEDAYS>
                    <DAYS className = "in">
                        {previousMonthDays.map((previousMonthDay, index) => (
                            <OUTSIDEDAY className = "in" key = {index}>
                                {previousMonthDay}
                            </OUTSIDEDAY>
                        ))}
                        {monthDays.map((monthDay, index) => (
                            (monthDay == seletedDay && months[month].substring(0,3) === seletedMonth && year == seletedYear) ?
                                <TODAY className = "in" key = {index} onClick = {(e) => selectDate(e)}>
                                    {monthDay}
                                </TODAY>
                            :
                                <DAY className = "in" key = {index} onClick = {(e) => selectDate(e)}>
                                    {monthDay}
                                </DAY>
                        ))}
                        {nextMonthDays.map((nextMonthDay, index) => (
                            <OUTSIDEDAY className = "in" key = {index}>
                                {nextMonthDay}
                            </OUTSIDEDAY>
                        ))}
                    </DAYS>
                </DATEPICKER>
            :
                null
            }
        </CONTAINER>
    )
}

export default Datepicker