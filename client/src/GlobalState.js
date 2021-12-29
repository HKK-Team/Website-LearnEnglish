import React, {createContext, useState,useEffect} from 'react';
import DictionnaryAPI from './apiUsers/dictionnaryApi';

export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    const state = {
        dictionnaryApi:DictionnaryAPI()
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    );
}