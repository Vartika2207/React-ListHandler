import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

class Users extends Component {
  constructor() {
    // super should be added when we add constructor to class and extend class
    // it calls the super class which is inherited
    super();
    this.state= {
      showUsers: true
    };
  }

  toggleUsersHandler() {
   //this.state.showUsers = false --> NOT DONE THIS WAY

    // this set state is provided by Component, it takes an object
    // its doesn't overrides the prev state but merge it
    this.setState((curState) => {
      return {showUsers: !curState.showUsers};
    });
  }

  render() {
    // helper functions can be defined inside render
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        {/* to make 'this' keyword refer to surrounding class which bu default wouldn't
        when menthod is called on event click*/}
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}



// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     // overrides the old state
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
