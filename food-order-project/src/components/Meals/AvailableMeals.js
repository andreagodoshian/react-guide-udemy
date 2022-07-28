import React from "react";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Cheemsburbger',
      description: 'Approved by yellow-dog-funny',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

// doesn't need props, since hardcoded DUMMY_MEALS
function AvailableMeals(){

    const mealsList = DUMMY_MEALS.map(x => {
        <li>{x.name}</li>
    });

    return(
        <React.Fragment>
            <section className={classes.meals}>
                <ul>
                    {mealsList}
                </ul>
            </section>
        </React.Fragment>
    )
}

export default AvailableMeals;