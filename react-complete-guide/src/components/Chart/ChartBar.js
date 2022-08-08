import React from "react";
import "./ChartBar.css"

// notes about this component:
// setting in-line style for .jsx files is a bit different...
// style={{}}  <--it needs to be dynamic && an object
// "background-color" would be "backgroundColor"

function ChartBar(props) {

    let barFillHeight = "0%";

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%"};

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )

}

export default ChartBar;