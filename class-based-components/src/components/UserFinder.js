import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

/*
1.) Functional has TWO state slices, so need to merge them
2.) searchChangeHandler
3.) <Users users={this.state.filteredUsers} />
4.) onChange={this.searchChangeHandler.bind(this)}
5.) We're done!! Wait... but no hooks?? (useEffect)
^^que the life-cycle methods

Doesn't this make useEffect(..., [searchTerm]) look nice?? ;)

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) => 
        user.name.includes(this.state.searchTerm))
      })
    }
  }

  6.) Speaking of life-cycle methods...
  componentDidMount() - http request, get from database
  ^^only runs once^^
*/

const DUMMY_USERS = [
  { id: 'u1', name: 'Daria' },
  { id: 'u2', name: 'Jane' },
  { id: 'u3', name: 'Trent' },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: ""
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) => 
        user.name.includes(this.state.searchTerm))
      })
    }
  }

  searchChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value
    })
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