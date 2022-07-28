import React from "react";

import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

// doesn't need props, since hardcoded DUMMY_MEALS
function Meals() {

    return(
        <React.Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </React.Fragment>
    )
}

export default Meals;