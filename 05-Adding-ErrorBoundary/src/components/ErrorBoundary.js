import { Component } from 'react';

class ErrorBoundary extends Component() {
   constructor() {
    super();
    this.state = {
        hasError: false,
    };
   }


   // this triggers when error occurs in child
  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if(this.state.hasError) {
        return <p>Oops!!...Something went wrong!</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;