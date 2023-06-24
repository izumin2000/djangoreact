import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserGET, UserDELETE } from '../../api/UserAPI';
import { useNavigate } from 'react-router-dom';

type UserType = {
    user_id: number;
    user_name: string;
    user_age: string;
    user_email: string;
};

export const UserDetail = () => {
    const initialState = {
        user_id: 0,
        user_name: '',
        user_age: '',
        user_email: '',
    };

    const [user, UserSet] = useState<UserType>(initialState)
    const [loading, setLoading] = useState(true);
    const { id: idString } = useParams<{ id: string }>();

    const [id, setId] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (idString !== undefined) {
            setId(parseInt(idString));
        }
    }, [idString]);

    useEffect(()=>{
        if (id !== undefined) {
            UserGET(id)
            .then(d => {
                UserSet(d);
                setLoading(false);
            })
            .catch(e => {
                throw new Error(e);
            })
        }
    },[])

    const navigate = useNavigate();
    function UserDelete() {
        if (id !== undefined) {
            UserDELETE(id)
            .then(() => {
                navigate("/user");
            });
        }
    }
    
    return(
        <div>
            {loading ?
                <h1>loading....</h1>
                :
                <div>
                    <div>
                        <h2>学籍番号：{user.user_id}</h2>
                        <h2>名前：{user.user_name}</h2>
                        <h2>年齢：{user.user_age}</h2>
                        <h2>Eメール：{user.user_email}</h2>
                    </div>
                    <div>
                        <Link to={`/user/detail/${id}/update`}>変更</Link>
                        <br />
                        <Link to={`/user`} onClick={UserDelete}>削除</Link>
                    </div>
                </div>
            }
        </div>
    )
}