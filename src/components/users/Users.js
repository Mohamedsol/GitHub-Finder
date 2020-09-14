import React, { Component } from 'react';
import User from './User'


export class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'Mojomnbo',
                avatar_url: 'https://avatars3.githubusercontent.com/u/1?s=400&v=4',
                html_url: 'https://github.com/mojombo'
            },
            {
                id: '2',
                login: 'Mojomnbo',
                avatar_url: 'https://avatars3.githubusercontent.com/u/1?s=400&v=4',
                html_url: 'https://github.com/mojombo'
            },
            {
                id: '3',
                login: 'Mojomnbo',
                avatar_url: 'https://avatars3.githubusercontent.com/u/1?s=400&v=4',
                html_url: 'https://github.com/mojombo'
            }
        ]
    }
    render() {
        return (
            <div style={userStyle}>
               {this.state.users.map(user => (
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
