import classes from './User.module.css';
import { Component } from 'react';


// Component class adds couple of propertise like this
class User extends Component{
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}


// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
