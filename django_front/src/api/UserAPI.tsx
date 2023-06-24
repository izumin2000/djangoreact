const toJson = async (res: any) => {
    const json = await res.json();
    if (res.ok) {
        return json;
    } else {
        throw new Error(json.message);
    }
}

// 全ユーザーを取得
export const UsersGET = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/user/?format=json', {
        method: 'GET',
    })
    return await toJson(res);
}

// 1つのユーザーを取得
export const UserGET = async (id: number) => {
    const res = await fetch(`http://127.0.0.1:8000/api/user/${id}/?format=json`, {
        method: 'GET',
    })
    return await toJson(res);
}

// ユーザーを新規作成
export const UserADD = async (data: any) => {
    const res = await fetch('http://127.0.0.1:8000/api/user/?format=json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await toJson(res) ;
}


// ユーザーを更新
export const UserPUT = async (data: any, id: number) => {
    const res = await fetch(`http://127.0.0.1:8000/api/user/${id}/?format=json`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await toJson(res);
}

// ユーザーを削除
export const UserDELETE = async (id: number) => {
    const res = await fetch(`http://127.0.0.1:8000/api/user/${id}/?format=json`, {
        method: 'DELETE'
    })
    return await res;
}

// ビューを取得
export const viewTest1 = async () => {
    const res = await fetch('http://127.0.0.1:8000/react_app/test1', {
        method: 'GET',
    })
    return await toJson(res);
}

// ビューを取得
export const viewTest2 = async (data: any) => {
    const res = await fetch('http://127.0.0.1:8000/react_app/test2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return await toJson(res);
};