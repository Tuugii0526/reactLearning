import { Container } from "@/components/AddingInteractivity/Container"
import { ImmerUsingReducerToDo } from "@/components/ManagingState/Extracting-state-logic-into-a-reducer/ImmerUsingReducerToDo"
import { UsingReducerToDo } from "@/components/ManagingState/Extracting-state-logic-into-a-reducer/UsingReducerToDo"
import { ContextAlternativeToPassingProps } from "@/components/ManagingState/Passing-data-deeply-with-context/ContextAlternativeToPassingProps"
import { DifferentComponentsAtTheSamePositionResetState } from "@/components/ManagingState/Preserving-resetting-state/DifferentComponentsAtTheSamePositionResetState"
import { FixMisplacedStateInTheList } from "@/components/ManagingState/Preserving-resetting-state/FixMisplacedStateInTheList"
import { RenderTheSecondCounter } from "@/components/ManagingState/Preserving-resetting-state/RenderTheSecondCounter"
import { SameComponentAtTheSamePosition } from "@/components/ManagingState/Preserving-resetting-state/SameComponentAtTheSamePosition"
import { StateIsTiedToAPositionInTheRenderTree } from "@/components/ManagingState/Preserving-resetting-state/StateIsTiedToAPositionInTheRenderTree"
import TeacherSameComponentAtTheSamePosition from "@/components/ManagingState/Preserving-resetting-state/TeacherSameComponentAtTheSamePosition"
import Link from "next/link"

const Page=()=>{
    return <div className="w-full h-screen pt-20 grid grid-cols-1 justify-items-center items-center gap-[60px] overflow-scroll lg:grid-cols-3 md:grid-cols-2 relative">
           <div className="h-10 w-1/2 bg-white fixed inset-x-0 mx-auto flex justify-around top-2">
          <Link href={"/"}>
          <button className="p-1 ring-1 rounded-sm hover:bg-yellow-400">Go To Home</button></Link>
          <Link href={"/escape-hatch"}>
          <button className="p-1 ring-1 rounded-sm hover:bg-yellow-400" >Go To Escaping hatches</button></Link>
         
          </div>
 <Container>
      <StateIsTiedToAPositionInTheRenderTree/>
    </Container>
    <Container>
      <RenderTheSecondCounter/>
    </Container>
    <SameComponentAtTheSamePosition/>
  <TeacherSameComponentAtTheSamePosition/>
  <DifferentComponentsAtTheSamePositionResetState/>
  <FixMisplacedStateInTheList/>
  <Container>
    <UsingReducerToDo/>
  </Container>
  <Container>
    <ImmerUsingReducerToDo/>
  </Container>
    <div className="min-w-[300px]  h-fit shadow-sm ring-1 p-3 rounded-sm ">
    <ContextAlternativeToPassingProps/>
    </div>
    </div>
}
export default Page