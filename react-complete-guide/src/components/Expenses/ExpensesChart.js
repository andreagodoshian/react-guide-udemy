import React from "react";

import Chart from "../Chart/Chart";

function ExpensesChart(props) {

    const monthlyDataPoints = [
        {label: "Jan", value: 0}, {label: "Feb", value: 0},
        {label: "Mar", value: 0}, {label: "Apr", value: 0},
        {label: "May", value: 0}, {label: "Jun", value: 0},
        {label: "Jul", value: 0}, {label: "Aug", value: 0},
        {label: "Sep", value: 0}, {label: "Oct", value: 0},
        {label: "Nov", value: 0}, {label: "Dec", value: 0}
    ];

    for (const x of props.expenses) {
        const index = x.date.getMonth(); // January is 0
        monthlyDataPoints[index].value += x.amount;
    }

    return (
        <Chart dataPoints={monthlyDataPoints} />
    )

};

export default ExpensesChart;