import { useEffect, useState } from "react";
import { Article } from "../../components/Article/Article";
import {useSelector,useDispatch} from 'react-redux';
import { getArticlesAll } from "../../service/action/actionThunk";
import stylesMainPage from './MainPage.module.css'
export const MainPage = () => {
    const state = useSelector(state => state.articles.articles)
    const [loading,setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getArticlesAll())
        setLoading(false)
    },[dispatch])
    if(loading === true) {
      return (
    <h1>Loading...</h1>
      )
    }
  return (
    <main className={stylesMainPage.main}>
    {state && state.map(i => {
     return <Article titleArticle={i.titleArticle} imageArticle={i.imageArticle} avatarUser={i.avatarUser} nameUser={i.nameUser} textArticle={i.textArticle}/>
    })}
    </main>
  );
};
