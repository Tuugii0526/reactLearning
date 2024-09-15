import {useState,useEffect} from 'react'
import { ArticleCard } from './ArticleCard'
export const InfiniteScroll=()=>{
    const [articles,setArticles]=useState([])
    const [page,setPage]=useState(1)
    const fetchArticles=async()=>{
       try {
         const articles=await fetch(`https://dev.to/api/articles?page=${page}&per_page=9`)
         const data=await articles.json()
         setArticles(pre=>[...pre,...data])
       } catch (error) {
        console.log(error)
       }
    }
    const handleScroll=()=>{
      console.log('scroll height:',document.documentElement.scrollHeight)
      console.log('inner height',window.innerHeight)
      console.log('scroll top',document.documentElement.scrollTop)
      console.log(window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight)
     if(window.innerHeight+document.documentElement.scrollTop>=(document.documentElement.scrollHeight/10)*9)
     {
      setPage((p)=>p+1)
     }
    }
    useEffect(()=>{
   fetchArticles()
    },[page])
    useEffect(()=>{
   window.addEventListener('scroll',handleScroll)
   return ()=>window.removeEventListener('scroll',handleScroll)
    },[])
    return <div className="w-full h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {articles.map(article=>{
        return <ArticleCard key={article?.id} article={article}/>
      })}
    </div>
}
