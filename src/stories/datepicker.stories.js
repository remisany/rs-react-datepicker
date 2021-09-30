import React from "react";
import { storiesOf } from "@storybook/react"

import Datepicker from "../components/Datepicker";

const stories = storiesOf("Example", module);

stories.add("Ex1", () => {
  const date = new Date()
    return (
        <div>
          <h1>React Datepicker</h1>
          <h2>By default</h2>
          <Datepicker
            date = {date}
            id = "default"
          />
        </div>
    )
});

stories.add("Ex2", () => {
  const date = new Date()

  const customDatePicker = {
    borderRadius: "5px",
    border: "none",
    backgroundColor: "rgba(240, 67, 41, .3)",
    fontFamily: "Roboto",
    fontSize: "15px",
    padding: "0",
    rowGap: "5px"
  }

  const customSelectedDay = {
    backgroundColor: "#594B94"
  }

  const customHeader = {
    borderRadius: "5px 5px 0 0",
    padding: "4px 0",
    backgroundColor: "rgba(240, 67, 41, .5)"
  }

  const customContainerNumberDay = {
    padding: "4px 0"
  }

  return (
    <div>
    <h1>React Datepicker</h1>
    <h2>Customized</h2>
    <Datepicker
      label = "Date picker customized:"
      placeholder = "Click to open"
      date = {date}
      styleDatePicker = {customDatePicker}
      styleSelectedDay = {customSelectedDay}
      styleHeader = {customHeader}
      styleContainerNumberDay = {customContainerNumberDay}
    />
    </div>
  )
});