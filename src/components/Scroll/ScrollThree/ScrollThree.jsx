import {useState,useEffect} from 'react'
import {  Carousel } from './Carousel'
export const ScrollThree=()=>{
  const [articles,setArticles]=useState([])
  const fetchBlogs=async()=>{
    const response=await fetch('https://dev.to/api/articles')
    const data =await response.json()
    setArticles(data.filter(d=>d.cover_image))
  }
  useEffect(()=>{
   fetchBlogs()
  },[])
    return <div className='max-w-lg'>
    <Carousel >
      {articles.map((a)=>(
        <img src={a.cover_image} alt="" />
      ))}
    </Carousel>
    </div>

}
// {
//     articles.map(article=>{
//         return <ArticleCard article={article}/>
//     })
// }