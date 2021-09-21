import React, { useState, useEffect, Fragment } from "react"
import styled from "styled-components"

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
    margin-bottom: 10px;
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

const DAY = styled.div`
    cursor: pointer;
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
`

function Datepicker () {
    const [active, setActive] = useState(false)
    const [date, setDate] = useState(new Date())
    const [year, setYear] = useState(date.getFullYear())
    const [month, setMonth] = useState(date.getMonth())
    const [nbDays, setnbDays] = useState(40 - new Date(year, month, 40).getDate())
    const [firstDay, setfirstDay] = useState(new Date(year, month, 1).toDateString().substring(0,3))
    const [monthDays, setMonthDays] = useState([])

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    useEffect(() => {
        monthDetails()
    },[])

    const monthDetails = () => {
        const currentMonthDays = []
        const indexBegin = days.indexOf(firstDay)
        const endPreviousMonth = 40 - new Date(year, month - 1, 40).getDate()
        for (let i = indexBegin-1; i >= 0; i--) {
            currentMonthDays.push(endPreviousMonth - i)
        }
        for (let i = 1; i <= nbDays; i++) {
            currentMonthDays.push(i)
        }
        const endArray = 42 - (currentMonthDays.length)
        for (let i = 1; i <= endArray; i++) {
            currentMonthDays.push(i)
        }
        setMonthDays(currentMonthDays)
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

    useEffect((e) => {
        const escape = (e) => {
            console.log(e)
            if (e.key === "Escape") {
                setActive(false)
                window.removeEventListener("keydown", escape)
            }
        }

        if (active) {
            window.addEventListener("keydown", escape)
        }
    })

    const selectDate = (e) => {
        let day = e.target.innerHTML
        day = day.length === 1 ? "0" + day : day
        const displayMonth = ((month + 1).toString().length) === 1 ? "0" + (month + 1) : (month + 1)
        document.getElementById("datepicker").value = displayMonth + "/" + day + "/" + year
        setActive(false)
    }

    return (
        <CONTAINER>
            <input id = "datepicker" onFocus = {() => setActive(true)}/>
            {active ?
                <DATEPICKER>
                    <HEADER>
                        <IMG onClick = {() => changeYear(-1)} src = {DoubleLeft}/>
                        <IMG onClick = {() => changeMonth(-1)}  src = {Left}/>
                        <div>
                            <YEAR>{year}</YEAR>
                            <MONTH>{months[month]}</MONTH>
                        </div>
                        <IMG onClick = {() => changeMonth(1)} src = {Right}/>
                        <IMG onClick = {() => changeYear(1)} src = {DoubleRight}/>
                    </HEADER>
                    <NAMEDAYS>
                        {days.map((day, index) => (
                            <NAMEDAY key = {index}>
                                {day}
                            </NAMEDAY>
                        ))}
                    </NAMEDAYS>
                    <DAYS>
                        {monthDays.map((monthDay, index) => (
                            <DAY key = {index} onClick = {(e) => selectDate(e)}>
                                {monthDay}
                            </DAY>
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