import React from "react";
import classes from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals-from-max.jpg";

/*
Notes:
1.) Using default HTML5 <header/>
2.) If "-" style: className={classes["main-image"]}
3.) <img/> elements are inline
*/

function Header(props) {
    return(
        <React.Fragment>
        <header className={classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
          <img src={mealsImage} alt='A table full of delicious food!' />
        </div>
      </React.Fragment>
    );
  };

export default Header;