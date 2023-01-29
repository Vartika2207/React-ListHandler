import { Fragment, Component } from 'react';
import UsersContext from '../store/users-context';
import classes from './UserFinder.module.css'
import Users from './Users';

class UserFinder extends Component {
  // we tell react that UserFinder should have access to UsersContext
  // static contextType property can only be set once
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  // it only runs once when component was initially rendered first time
  componentDidMount() {
    //sending ttp request....
    this.setState({filteredUsers: this.context.users});
  }

  // this below below be automatically called by react when UserFinder is re-evaluated
  componentDidUpdate(prevProps, prevState){
    // this if statement is to avoid infinite loops, as this mount run when UserFinder re-ran
    // and when UserFinder re-run this also run, hence infinite loo[]
    if(prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) => 
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event){
    this.setState({
      searchTerm: event.target.value
    });
  }

  render () {
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



// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//          <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;