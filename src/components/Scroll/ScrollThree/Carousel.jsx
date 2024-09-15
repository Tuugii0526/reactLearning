import {useState,useEffect} from 'react'
export const Carousel=()=>{
  const [articles,setArticles]=useState([])
  const fetchBlogs=async()=>{
    const response=await fetch('https://dev.to/api/articles')
    const data =await response.json()
    setArticles(data)
  }
  useEffect(()=>{
   fetchBlogs()
  },[])
    return 
    
}