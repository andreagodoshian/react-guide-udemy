import { Component } from 'react';
import classes from './User.module.css';

/*
1.) Classes are part of modern JavaScript; classes are not specific to React.
2.) HOWEVER! The render method (is* specific to React
3.) {Component} is required; it adds important properties (LIKE "PROPS")
4.) Class-based & Functional *can* mix, but usually it's one or the other.
*/
class User extends Component {
  
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }

}

export default User;