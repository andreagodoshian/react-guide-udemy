import { Component } from 'react';

/*
Class-Based is good *IF* you want to "try-catch" errors
Currently, there isn't a Functional equivalent of ErrorBoundary.js

        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
*/

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;