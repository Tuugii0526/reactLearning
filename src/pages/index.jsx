import { ArtBucketList } from "@/components/AddingInteractivity/ArtBucketList";
import { ArtBucketListImmer } from "@/components/AddingInteractivity/ArtBucketListImmer";
import { Container } from "@/components/AddingInteractivity/Container";
import { RenderingTakesASnapshotInTime } from "@/components/AddingInteractivity/RenderingTakesASnapshotInTime";
import { ReplacingArray } from "@/components/AddingInteractivity/ReplacingArray";
import { SculptorList } from "@/components/AddingInteractivity/SculptorList";
import { StateAsASnapshot } from "@/components/AddingInteractivity/StateAsASnapshot";
import { StateOverTime } from "@/components/AddingInteractivity/StateOverTime";
import { AvoidDeeplyNestedState } from "@/components/ManagingState/AvoidDeeplyNestedState";
import { ImmerUsingReducerToDo } from "@/components/ManagingState/Extracting-state-logic-into-a-reducer/ImmerUsingReducerToDo";
import { UsingReducerToDo } from "@/components/ManagingState/Extracting-state-logic-into-a-reducer/UsingReducerToDo";
import { GroupRelatedState } from "@/components/ManagingState/GroupRelatedState";
import { ImmerAvoidDeeplyNestedState } from "@/components/ManagingState/ImmerAvoidDeeplyNestedState";
import { ContextAlternativeToPassingProps } from "@/components/ManagingState/Passing-data-deeply-with-context/ContextAlternativeToPassingProps";
import { DifferentComponentsAtTheSamePositionResetState } from "@/components/ManagingState/Preserving-resetting-state/DifferentComponentsAtTheSamePositionResetState";
import { FixMisplacedStateInTheList } from "@/components/ManagingState/Preserving-resetting-state/FixMisplacedStateInTheList";
import { RenderTheSecondCounter } from "@/components/ManagingState/Preserving-resetting-state/RenderTheSecondCounter";
import { SameComponentAtTheSamePosition } from "@/components/ManagingState/Preserving-resetting-state/SameComponentAtTheSamePosition";
import { StateIsTiedToAPositionInTheRenderTree } from "@/components/ManagingState/Preserving-resetting-state/StateIsTiedToAPositionInTheRenderTree";
import TeacherSameComponentAtTheSamePosition from "@/components/ManagingState/Preserving-resetting-state/TeacherSameComponentAtTheSamePosition";
import EditProfile from "@/components/ManagingState/Problem1ReactingToInput";
import { ReactingToInputWithState } from "@/components/ManagingState/ReactingToInputWithState";
import MovingDot from "@/components/ManagingState/TeacherGroupRelatedState";
import { FilterableProductTable } from "@/components/QuickStart/ThinkingInReact/FilterableProductTable";
import { ScrollOne } from "@/components/Scroll/ScrollOne/ScrollOne-AppearsAsSoonAsScroll";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // return <div className="w-full h-screen grid grid-cols-1 justify-items-center items-center gap-3 overflow-scroll lg:grid-cols-3 md:grid-cols-2 ">
  //   <StateAsASnapshot/>
  //   <RenderingTakesASnapshotInTime/>
  //   <Container>
  //     <StateOverTime/>
  //   </Container>
  // <SculptorList/>
  // <ReplacingArray/>
  // <ArtBucketList/>
  // <ArtBucketListImmer/>
  // <Container>
  //   <ReactingToInputWithState/>
  // </Container>
  // <Container>
  // <EditProfile/>
  // </Container>

  // </div>


  // return <GroupRelatedState/>

  // return <AvoidDeeplyNestedState/>
     
  // return <ImmerAvoidDeeplyNestedState/>
  return <div className="w-full h-screen grid grid-cols-1 justify-items-center items-center gap-3 overflow-scroll lg:grid-cols-3 md:grid-cols-2 ">
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
