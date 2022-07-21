import React from "react";
import "./Chart.css"

import ChartBar from "./ChartBar";

// notes about this component:
// please don't forget "key" (@Id) - it's literally just a list

function Chart(props) {

    const dataPointValues = props.dataPoints.map(x => x.value);
    const overallMax = Math.max(...dataPointValues);
    // spread operator needed: array -> list

    return (
        <div className="chart">
            {props.dataPoints.map(x => (
                <ChartBar key={x.label}
                value={x.value}
                label={x.label}
                maxValue={overallMax}/>
            ))}
        </div>
    )

}

export default Chart;