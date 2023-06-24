import React from 'react';
import { useForm } from 'react-hook-form';
import { UserADD } from '../../api/UserAPI';
import { useNavigate } from 'react-router-dom';

export const UserNew = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data: any) => {
        const user = await UserADD(data);
        navigate(`/user/detail/${user.id}`);
    };

    return (
        <div>
            <h1>ユーザーの追加</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="user_id">ID</label>
                    <input id="user_id" {...register('user_id')} type="text" />
                </div>
                <div>
                    <label htmlFor="user_name">名前</label>
                    <input id="user_name" {...register('user_name')} type="text" />
                </div>
                <div>
                    <label htmlFor="user_age">年齢</label>
                    <input id="user_age" {...register('user_age')} type="number" />
                </div>
                <div>
                    <label htmlFor="user_email">メールアドレス</label>
                    <input id="user_email" {...register('user_email')} type="email" />
                </div>
                <button type="submit">追加</button>
            </form>
        </div>
    )
}