import { Fragment, Component } from 'react';
import classes from './UserFinder.module.css';

import Users from './Users';
import UsersContext from '../store/users-context';

/*
1.) Functional has TWO state slices, so need to merge them
2.) searchChangeHandler
3.) <Users users={this.state.filteredUsers} />
4.) onChange={this.searchChangeHandler.bind(this)}
5.) We're done!! Wait... but no hooks?? (useEffect)
^^que the life-cycle methods
6.) componentDidUpdate() makes useEffect(..., [searchTerm]) look nice ;)
7.) componentDidMount() - runs once (http request - database)
8.) componentWillUnmount() - see User.js

9.) one ctx allowed: static contextType = UsersContext;
*/

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;

/*
const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;
*/