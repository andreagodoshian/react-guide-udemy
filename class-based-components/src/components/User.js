import { Component } from 'react';
import classes from './User.module.css';

/*
1.) Classes are part of modern JavaScript; classes are not specific to React.
2.) HOWEVER! The render method (is* specific to React
3.) {Component} is required; it adds important properties (LIKE "PROPS")
4.) Class-based & Functional *can* mix, but usually it's one or the other.
5.) componentWillUnmount() - if we hide (unmount) the list
*/
class User extends Component {

  // we are rendering three dummy users, so it logs for all three
  componentWillUnmount() {
    console.log('User will unmount!');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  } 
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;