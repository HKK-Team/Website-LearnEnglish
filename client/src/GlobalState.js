import React, {createContext,useState,useEffect} from 'react';
import DictionnaryAPI from './apiUsers/dictionnaryApi';
import UserAPI from './apiUsers/userApi';
import axios from 'axios';

export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)
    useEffect(() =>{
        // token login user
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get('http://localhost:5000/user/refresh_token')
                console.log(res)
                setToken(res.data.accesstoken)
                setTimeout(() => {
                    refreshToken()
                }, 10 * 60 * 1000)
            }
            refreshToken()
        }
    },[])


    const state = {
        token:[token, setToken],
        userApi:UserAPI(token),
        dictionnaryApi:DictionnaryAPI(),
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    );
}