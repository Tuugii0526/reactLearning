import {Box} from './Box'
export const ScrollOne=({number})=>{
    const triggerBottom=window.innerHeight/5*4
   const boxes=[]
   for(let i=0;i<number;i++)
   {
    boxes.push(<Box key={i} minusOrPlus={i%2 ? 'translate-x-[500px]':'-translate-x-[500px]'}/>)
   }

   const checkBoxes=()=>{
    boxes.forEach(box=>{
        const boxTop=box.getBoundingClientRect().top;
        if(boxTop<triggerBottom)
        {
            box.classList.add('show')
        }
        else
        {
            box.classList.remove('show')
        }
    })
   }
   window.addEventListener('scroll',checkBoxes)
    return <div className="container w-full h-fit m-auto *:my-1 flex flex-col items-center bg-slate-300 overflow-scroll">
    <h1>Scroll to see 👀 the animation</h1>
   {
    boxes
   }
    </div>
}