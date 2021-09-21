import React from "react";
import { storiesOf } from "@storybook/react"

import Datepicker from "../components/Datepicker";

const stories = storiesOf("Example", module);

stories.add("Ex1", () => {
    return (
        <div>
          <h1>React Datepicker</h1>
          <h2>By default</h2>
          <Datepicker/>
        </div>
    )
});