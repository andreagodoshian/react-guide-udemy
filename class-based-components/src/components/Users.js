import { Component } from 'react';
import classes from './Users.module.css';

import User from './User';

/*
Remember: NONE of the React Hooks will work in Class-Based components :) :) :)

1.) Use the constructor to initialize state, etc.
2.) In class-based, state HAS to be an object; example: not useState(false)
3.) Therefore, only one "state-slice"
4.) this.state: "state" is a RESERVED word - have to use it
5.) this.setState: special method for interacting with class-based state
^^speaking of, this.setState is also built-in to {Component}
6.) this.setState ALSO only wants an object
7.) If only 1/4 (see notes below), the remaining 3/4 will still be kept
^^this.setState({showUsers: false})
8.) It's okay to put "helper methods" (ex. Java Streams) in render()
9.) <button onClick={this.toggleUsersHandler.bind(this)}>
10.) super() = needed to implement {Component}
*/

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: 'Test',
    };
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error('No users provided!');
    }
  }

  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}


export default Users;

///////////////////////////////

/*
const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;
*/