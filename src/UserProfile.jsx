// Question 1: Exploring State and Props in Class Components

import React, { Component } from "react";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };

       this.changeName = this.changeName.bind(this);
    }
    // Task 1: Code Correction
    changeName() {
        this.setState(prevState => ({
            name: prevState.name === 'Alex' ? 'Charlie' : 'Alex'
        }));
    }

    render() {
        return (
            <div id="user-profile">
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <div>
                    <button onClick={this.changeName}>Change Name</button>
                </div>
            </div>
        );
    }
}

export default UserProfile;