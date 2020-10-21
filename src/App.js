import React, {Component} from 'react';
import Navbar from './components/Navbar'
import Users from './components/users/Users'
import axios from 'axios'
import './App.css';

class App extends Component {

  state = {
     users: [],
     isLoading: false
  }
  async componentDidMount () {
    this.setState({ isLoading: true})
    const res = await axios.get('https://api.github.com/users')
    this.setState({ users: res.data, isLoading: false})
  }
  render(){
    return (
      <div>
        <Navbar />
        <div className="container">
          <Users users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
