import React, { Component } from 'react'
import User from './User'
class Users extends Component {
    render() {
        const {users} = this.props;
        console.log(users);
        return (
            <div>
            {
                users.map(user=>{
                    return(
                        <User name={user.name} department= {user.department} semester= {user.semester}/>
                    )
                })
            }
            </div>
        )
    }
}
export default Users;
