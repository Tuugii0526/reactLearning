export const Container=({children})=>{
    return <div className="min-w-[300px] min-h-[200px] h-fit shadow-sm ring-1 p-3 rounded-sm flex flex-col items-center justify-center gap-2  relative overflow-y-hidden pt-8">
  {children}

    </div>
}