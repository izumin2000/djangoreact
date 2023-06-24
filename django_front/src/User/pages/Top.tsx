import React, { useState, useEffect } from 'react';
import { viewTest1, viewTest2 } from '../../api/UserAPI';
import { useForm } from 'react-hook-form';


export const Top = () => {
    const initialView = {
        "name" : "none",
        "acronym" : "none",
        "histryL" : []
    };

    const [view, SetView] = useState(initialView);
    const [loading1, setLoading1] = useState(true);

    const viewTestTry1 = () => {
        viewTest1()
        .then(d => {
            SetView(d);
            setLoading1(false);
        })
        .catch(e => {
            throw new Error(e);
        })
    }

    useEffect(()=>{viewTestTry1()},[])

    const { register, handleSubmit } = useForm();
    const viewTestTry2 = async (data: any) => {
        const _ = await viewTest2(data)
        .then(d => {
            SetView(d);
        })
    };

    const checkINIAD = () => {
        if (view.acronym == "III") {
            return <h3>クリア！</h3>;
        }
    }

    const acronymHistory = () => {
        return view.histryL.map(histry => <p>{ histry }</p>).reverse();
    }
    
    return(
        <div>
            {loading1 ?
                <h1>loading....</h1>
                :  
                <div>
                    <h1>INIADすごろく</h1>
                    <hr></hr>
                    <h2>{view.name}</h2>
                    <h2>{view.acronym}</h2>
                    { checkINIAD() }
                    <button onClick={viewTestTry1}>すごろくを回す</button>
                    <form onSubmit={handleSubmit(viewTestTry2)}>
                        <label htmlFor="words">取得する単語数</label>
                        <input id="words" {...register('words')} type="number" />
                        <button type="submit">回す</button>
                    </form>
                    <h2>履歴</h2>
                    { acronymHistory() }
                </div>
            }
        </div>
    );
}