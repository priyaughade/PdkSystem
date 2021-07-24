import React from 'react';
import User from './User'
import { USER_PER_PAGE }  from '../util/constants'

const Users = ({users,page} ) => {
    // console.log(USER_PER_PAGE)
    const startIndex = (page-1)* USER_PER_PAGE
    const selectedUsers = users.slice(startIndex,startIndex+USER_PER_PAGE);
    return selectedUsers.map(user => (
        <User user={user}  key={user.id} />
    ))
}

export default Users;
