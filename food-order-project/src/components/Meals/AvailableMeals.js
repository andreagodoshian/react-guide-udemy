import React from "react";
import classes from "./AvailableMeals.module.css";

import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

/*
Notes:

1.) Parenthesis: DUMMY_MEALS.map(x => ({x.name}));
*/

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

    const mealsList = DUMMY_MEALS.map(x => (
      <MealItem key={x.id} id={x.id} name={x.name} description={x.description} price={x.price}/>
    ));

    return(
        <React.Fragment>
            <section className={classes.meals}>
                <Card>
                  <ul>{mealsList}</ul>
                </Card>
            </section>
        </React.Fragment>
    )
}

export default AvailableMeals;