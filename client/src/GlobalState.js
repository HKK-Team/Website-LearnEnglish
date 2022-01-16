import React, {createContext,useState,useEffect} from 'react';
import DictionnaryAPI from './apiUsers/dictionnaryApi';
import UserAPI from './apiUsers/userApi';
// import ListeningApi from './apiUsers/listeningApi';
// import ReadingApi from './apiUsers/readingApi';
// import SpeakingApi from './apiUsers/speakingApi';
// import WritingApi from './apiUsers/writingApi';
import SkillApi from './apiUsers/skillsApi';
import GrammarApi from './apiUsers/grammarApi';
import VocabularyApi from './apiUsers/vocabularyApi'
import axios from 'axios';

export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)
    useEffect(() =>{
        // token login user
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get('/user/refresh_token')
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
        // listeningApi:ListeningApi(),
        // readingApi:ReadingApi(),
        // speakingApi:SpeakingApi(),
        // writingApi:WritingApi(),
        skillApi:SkillApi(),
        grammarApi:GrammarApi(),
        vocabularyApi:VocabularyApi()
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    );
}