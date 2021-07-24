import React from 'react';
import User from './User'
import { USER_PER_PAGE }  from '../util/constants'

//Used User data for slicing pages  
// as well as display data

const Users = ({users,page} ) => {
    const startIndex = (page-1)* USER_PER_PAGE
    const selectedUsers = users.slice(startIndex,startIndex+USER_PER_PAGE);
    return selectedUsers.map(user => (
        <User user={user}  key={user.id} />
    ))
}

export default Users;
