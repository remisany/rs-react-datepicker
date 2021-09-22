# rs-react-datepicker

## Date picker pluggin for [project 14 : Pass a jQuery library to React](https://github.com/remisany/RemiSany_14_08092021)

A simple react date picker

1. [Installation](#Installation)
2. [Examples of use](#Example)
3. [Default option](#Default)

<div id='Installation'>

## Installation

You can install rs-react-datepicker with npm:
`npm i rs-react-datepicker`

For import rs-react-datepicker:
`import {Datepicker} from "rs-react-datepicker"`

<div id='Example'>

## Examples of use

### Example 1: by default

```js
const date = new Date()

<Datepicker
    date = {date}
/>
```

![Alt text](/examples/By_default.PNG)

### Example 2: customized

```js
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

<Datepicker
    date = {date}
    styleDatePicker = {customDatePicker}
    styleSelectedDay = {customSelectedDay}
    styleHeader = {customHeader}
    styleContainerNumberDay = {customContainerNumberDay}
/>
```

![Alt text](/examples/Customized.PNG) 

<div id='Default'>

## Default option

### Default content

```js
Datepicker.defaultProps = {
    doubleLeft: DoubleLeft, // To change the default double left image
    doubleRight: DoubleRight, // To change the default double right image
    label: "", // To change the label
    left: Left, // To change the default left image
    placeholder: "" // To change the placeholder
    right: Right, // To change the default right image
    styleArrow: {}, // To customize the img style
    styleContainerNameDay: {}, // To customize the container style that contains the day names
    styleContainerNumberDay: {}, // To customize the container style that contains the day numbers
    styleDatePicker: {}, // To customize the datepicker container style
    styleHeader: {}, // To customize the header style of datepicker
    styleHover: {}, // To customize the hover day style
    styleInput: {}, // To customize the input
    styleLabel: {} // To change the label style
    styleMonth: {}, // To customize the style of the month displayed
    styleNameDay: {}, // To customize the style of the day names
    styleNumberDay: {}, // To customize the style of the days of the current month
    styleOutsideDay: {}, // To customize the style of days that do not belong to the current month
    stylePlaceholder: {} // To change the placeholder style
    styleSelectedDay: {}, // To customize the selected day style
    styleYear: {}, // To customize the style of the year displayed
}
```

### Default type

```js
Datepicker.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired, // REQUIRED - To set up date
    doubleLeft: PropTypes.string,
    doubleRight: PropTypes.string,
    label: PropTypes.string,
    left: PropTypes.string,
    placeholder: PropTypes.string,
    right: PropTypes.string,
    styleArrow: PropTypes.object,
    styleContainerNameDay: PropTypes.object,
    styleContainerNumberDay: PropTypes.object,
    styleDatePicker: PropTypes.object,
    styleHeader: PropTypes.object,
    styleHover: PropTypes.object,
    styleInput: PropTypes.object,
    styleLabel: PropType.object,
    styleMonth: PropTypes.object,
    styleNameDay: PropTypes.object,
    styleNumberDay: PropTypes.object,
    styleOutsideDay: PropTypes.object,
    stylePlaceholder: PropTypes.object,
    styleSelectedDay: PropTypes.object,
    styleYear: PropTypes.object,
}
```