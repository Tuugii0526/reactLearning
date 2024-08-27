export const Box=({minusOrPlus})=>{
    const colors=['bg-green-500','bg-red-100','bg-blue-600','bg-gray-600','bg-orange-500','bg-amber-300','bg-lime-500','bg-teal-400','bg-violet-500']
    const backgroundColor=colors[Math.floor(Math.random()*colors.length)]
    return  <div className={`flex justify-center items-center w-[200px] h-[22vh] rounded-xl ${backgroundColor} ${minusOrPlus}`}>Content</div>
}