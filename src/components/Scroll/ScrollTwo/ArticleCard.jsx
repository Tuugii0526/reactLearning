
export const ArticleCard=({article})=>{
    return <div className=" h-[150px] rounded-md flex flex-col justify-around items-center ring-1">
      <img src={article?.cover_image} className="h-1/2 w-full"></img>
      <p className="text-center"> {article?.title}</p>
    </div>
}