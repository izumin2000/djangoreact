import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { UserPUT } from '../../api/UserAPI';
import { Link, useParams } from 'react-router-dom';
import { UserGET } from '../../api/UserAPI';
import { useNavigate } from 'react-router-dom';

type UserType = {
    user_id: number;
    user_name: string;
    user_age: string;
    user_email: string;
};

export const UserUpdate = () => {
    const initialState: UserType = {
        user_id: 0,
        user_name: '',
        user_age: '',
        user_email: '',
    };

    const [user, UserSet] = useState<UserType>(initialState);
    const [loading, setLoading] = useState<Boolean>(true);
    const { id: idString } = useParams<{ id: string }>();
    if (idString !== undefined) {
        var id = parseInt(idString);
    }

    useEffect(() => {
        if (id !== undefined) {
            UserGET(id)
            .then(d => {
                UserSet(d);
                setLoading(false);
            })
            .catch((e: any) => {
                throw new Error(e);
            });
        }
    }, []);

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data: any) => {
        if (id !== undefined) {
            const user = await UserPUT(data, id);
            navigate(`/user/detail/${user.id}`);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        UserSet(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <h1>ユーザーの編集</h1>
            <div>
                {loading ? (
                    <h2>loading....</h2>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="user_id">ID</label>
                            <input
                                id="user_id"
                                {...register('user_id')}
                                type="text"
                                name="user_id"
                                value={user.user_id}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="user_name">名前</label>
                            <input
                                id="user_name"
                                {...register('user_name')}
                                type="text"
                                name="user_name"
                                value={user.user_name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="user_age">年齢</label>
                            <input
                                id="user_age"
                                {...register('user_age')}
                                type="number"
                                name="user_age"
                                value={user.user_age}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="user_email">メールアドレス</label>
                            <input
                                id="user_email"
                                {...register('user_email')}
                                type="email"
                                name="user_email"
                                value={user.user_email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit">変更</button>
                    </form>
                )}
            </div>
        </div>
    );
};