import React, {Component} from 'react'; 
import Navbar from './components/Navbar';
import Users from './components/Users'
import './App.css';

class App extends Component{
  state = {
    users: [
      {
        id: 1,
        name: "ACK",
        department : "Computer Science ",
        semester : 7,
      },
      {
        id:2,
        name: "AA",
        department: "Computer Engineering",
        semester: 5,
      }
    ]
  }
  deleteUser = (id) => {
    this.setState({
      users : this.state.users.filter(user => id !== user.id)
    })
  }
  render(){
    return (
      <div className="container">
        <Navbar title="User App"/>
        <hr/>
        <Users deleteUser ={this.deleteUser} users= {this.state.users}/>

      </div>
    );
  }
}

export default App;

/*

import React, {Component} from 'react';
import Ninjas from './ninjas';

class App extends Component{
  render()
  {return (
    <div className="App">
       <h1>Merhaba</h1>
       <Ninjas />
    </div>
  );
}
}

export default App;

*/