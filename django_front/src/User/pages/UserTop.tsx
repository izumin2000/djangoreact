import React, { useState, useEffect } from 'react'
import { UsersGET } from '../../api/UserAPI'
import { UserContent } from '../../components/UserContent'
import { Link } from 'react-router-dom'

type UserType = {
    user_id: number;
    user_name: string;
    user_age: string;
    user_email: string;
};

export const UserTop = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        UsersGET()
            .then(d => {
                setUsers(d)
                setLoading(false)
            })
            .catch(e => {
                throw new Error(e)
            })
    }, [])

    return (
        <div>
            {
                loading ?
                <h1>loading...</h1>
                :
                <div>
                    <Link to={`/user/new`}>作成</Link>
                    <div>
                        {users.map((userItem: UserType) => <UserContent {...userItem} key={userItem.user_id} />)}
                    </div>
                </div>
            }
        </div>
    )
}