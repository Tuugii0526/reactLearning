export const Exp=({isCircle,content})=>{
    return <div className={`${isCircle ? 'rounded-full ': 'rounded-lg'} w-9 h-9 rounded-full bg-green-300 text-center` }>{content}</div>
}