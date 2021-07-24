import React from 'react'

const User = ( {user}) => {
    // console.log(user)
    return (
        <div>
            <hr/>
            <p>{`First Name:${user.first_name}`} </p>
            <p>{`Last Name:${user.last_name}`} </p>
            <p>{`FirstName:${user.email}`} </p>
            <p><img src={`${user.avatar}`  } /> </p>



        </div>
    )
}

export default User
