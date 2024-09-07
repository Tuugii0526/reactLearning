import { Container } from "@/components/AddingInteractivity/Container"
import FixABrokenChatInput from "@/components/EscapeHatches/ReferencingValuesWithRefs/FixABrokenChatInput"
import { StopwatchOne } from "@/components/EscapeHatches/ReferencingValuesWithRefs/StopwatchOne"
import { StopwatchTwo } from "@/components/EscapeHatches/ReferencingValuesWithRefs/StopwatchTwo"
import Link from "next/link"

 const Page=()=>{
    return <div className="w-full h-screen grid grid-cols-1 justify-items-center items-center gap-[60px] overflow-scroll lg:grid-cols-3 md:grid-cols-2">
         <div className="h-10 w-1/2 fixed bg-white inset-x-0 mx-auto flex justify-around top-2 ">
          <Link href={"/"}>
          <button className="p-1 ring-1 rounded-sm hover:bg-yellow-400" >Go To Home</button></Link>
          <Link href={"/managing-state"}>
          <button className="p-1 ring-1 rounded-sm hover:bg-yellow-400">Go To Managing state</button></Link>
          </div>
        <Container>
    <StopwatchOne/>
  </Container>
 <Container>
  <StopwatchTwo/>
 </Container>
 <Container>
  <FixABrokenChatInput/>
 </Container>
    </div>
}
export default Page