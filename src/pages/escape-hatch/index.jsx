import { Container } from "@/components/AddingInteractivity/Container"
import { AccessingAnotherComponentsDomNodes } from "@/components/EscapeHatches/manipulating-the-dom-with-refs/AccessingAnotherComponentsDomNodes"
import { WithoutFlushSync } from "@/components/EscapeHatches/manipulating-the-dom-with-refs/WithoutFlushSync"
import { FocusingTextInputWithRef } from "@/components/EscapeHatches/manipulating-the-dom-with-refs/FocusingTextInputWithRef"
import Form from "@/components/EscapeHatches/manipulating-the-dom-with-refs/ImperativeHandle"
import { ManagingAListOfRefsUsingRefCallback } from "@/components/EscapeHatches/manipulating-the-dom-with-refs/ManagingAListOfRefsUsingRefCallback"
import FixABrokenChatInput from "@/components/EscapeHatches/ReferencingValuesWithRefs/FixABrokenChatInput"
import { StopwatchOne } from "@/components/EscapeHatches/ReferencingValuesWithRefs/StopwatchOne"
import { StopwatchTwo } from "@/components/EscapeHatches/ReferencingValuesWithRefs/StopwatchTwo"
import Link from "next/link"
import { FlushSync } from "@/components/EscapeHatches/manipulating-the-dom-with-refs/FlushSync"

 const Page=()=>{
    return <div className="w-full h-screen grid grid-cols-1 justify-items-center items-center gap-[60px] overflow-scroll lg:grid-cols-3 md:grid-cols-2">
         <div className="h-10 w-1/2 fixed z-10 bg-white inset-x-0 mx-auto flex justify-around top-2 ">
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
 
 <Container>
    <FocusingTextInputWithRef/>
 </Container>
   <ManagingAListOfRefsUsingRefCallback/>
  <Container>
    <AccessingAnotherComponentsDomNodes/>
    </Container> 
  <Container>
    <Form/>
  </Container>
  <WithoutFlushSync/>
  <FlushSync/>
    </div>
}
export default Page