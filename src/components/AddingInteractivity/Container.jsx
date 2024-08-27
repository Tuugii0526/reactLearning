export const Container=({children})=>{
    return <div className="min-w-[300px] h-[200px] shadow-sm ring-1 p-3 rounded-sm flex flex-col items-center justify-center gap-2 overflow-y-auto ">
  {children}

    </div>
}