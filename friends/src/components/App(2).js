import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import FriendsList from './FriendList';
import FriendForm from './FriendForm';



class App extends Component {
  componentDidMount() {
    this.props.getFriends();
    console.log( this.props.friends)

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-Title">These Are My Friends</h1>
          <FriendForm />
        </header>
        <div className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
          <FriendsList friends={this.props.friends}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { friendsListReducer } = state;
  return {
    friends: friendsListReducer.friends,
    error: friendsListReducer.error,
    gettingFriends: friendsListReducer.gettingFriends
  }
}

export default connect(mapStateToProps, { getFriends })(App);
