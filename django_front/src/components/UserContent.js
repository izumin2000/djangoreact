import React from 'react';
import { Link } from 'react-router-dom';
// import { UserType } from '../../src/User/pages/UserTop'


// type UserType = {
//     id: number;
//     user_id: number;
//     user_name: string;
//     user_age: string;
//     user_email: string;
// };

export const UserContent = (User) => {
    return(
        <div>
            <Link to={`detail/${User.id}`}> <h1>{User.user_name}</h1> </Link> 
        </div>
    )
}