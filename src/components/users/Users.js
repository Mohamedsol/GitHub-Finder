import React, { Component } from 'react';
import User from './User'


export class Users extends Component {
    render() {
        return (
            <div style={userStyle}>
               {this.props.users.map(user => (
                   <User user={user} />
               ))} 
            </div>
        )
    }
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns : 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
