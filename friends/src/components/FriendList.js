import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { deleteFriend, updateSingleFriend, toggleShowUpdate } from '../actions';
import SelectedFriend from './SelectedFriend';
import UpdateFriendForm from './UpdateFriendForm';



class FriendsList extends Component {
    toggleStatusUpdate = () => {
        this.props.toggleStatusUpdate();
    };

    handleDeleteFriend = () => {
        const { id } = this.props.friendSelected;
        this.props.deleteFriend(id);
      };
    
      handleShowFriend = friend => {
        this.props.updateSingleFriend(friend);
      };
    



    render () {
        return (
            <div className='Friend-List-Wrapper'>
            <p>
                this is where my friendlist goes.
            </p>

                <ul className='Friend-List-Data'>

                    {this.props.friends.map(friendBeingExamined => {
                        return (
                            <li onClick={() => this.handleShowFriends(friendBeingExamined)} key={friendBeingExamined.id}>
                                {friendBeingExamined.name}
                            </li>
                        );
                    })}
                </ul>
                {Object.keys(this.props.friendSelected).length > 0 ? (
                <SelectedFriend
                    handleShowFriend={this.handleShowFriend}
                    toggleShowUpdate={this.toggleShowUpdate}
                    handleDeleteFriend={this.handleDeleteFriend}
                    selected={this.props.friendSelected}
                />
                ) : null}
                {this.props.showUpdate ? (
                <UpdateFriendForm friend={this.props.friendSelected} />
                ) : null}
                
                    
            
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.friendsListReducer.error,
        deletingFriends: state.friendsListReducer.deletingFriends,
        showUpdate: state.singleFriendReducer.showUpdate,
        friendSelected: state.singleFriendReducer.friendSelected

    }
}

export default connect( mapStateToProps, {deleteFriend, updateSingleFriend, toggleShowUpdate} )(FriendsList);