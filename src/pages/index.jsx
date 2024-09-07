import { ArtBucketList } from "@/components/AddingInteractivity/ArtBucketList";
import { ArtBucketListImmer } from "@/components/AddingInteractivity/ArtBucketListImmer";
import { Container } from "@/components/AddingInteractivity/Container";
import { RenderingTakesASnapshotInTime } from "@/components/AddingInteractivity/RenderingTakesASnapshotInTime";
import { ReplacingArray } from "@/components/AddingInteractivity/ReplacingArray";
import { SculptorList } from "@/components/AddingInteractivity/SculptorList";
import { StateAsASnapshot } from "@/components/AddingInteractivity/StateAsASnapshot";
import { StateOverTime } from "@/components/AddingInteractivity/StateOverTime";
import { ClickMe } from "@/components/EscapeHatches/ReferencingValuesWithRefs/ClickMe";
import EditProfile from "@/components/ManagingState/Problem1ReactingToInput";
import { ReactingToInputWithState } from "@/components/ManagingState/ReactingToInputWithState";
import Link from "next/link";
export default function Home() {
  return <div className="w-full h-screen pt-10 grid grid-cols-1 justify-items-center items-center gap-[60px] overflow-scroll lg:grid-cols-3 md:grid-cols-2  relative">
    <div className="h-10 w-1/2 fixed bg-white inset-x-0 mx-auto flex justify-around top-2">
          <Link href={"/managing-state"}>
          <button className="p-1 ring-1 rounded-sm hover:bg-yellow-400">Go To Managing state</button></Link>
          <Link href={"/escape-hatch"}>
          <button className="p-1 ring-1 rounded-sm hover:bg-yellow-400" >Go To Escaping hatches</button></Link>
          </div>
    <StateAsASnapshot/>
    <RenderingTakesASnapshotInTime/>
    <Container>
      <StateOverTime/>
    </Container>
  <SculptorList/>
  <ReplacingArray/>
  <ArtBucketList/>
  <ArtBucketListImmer/>
  <Container>
    <ReactingToInputWithState/>
  </Container>
  <Container>
  <EditProfile/>
  </Container>
   <Container>
    <ClickMe/>
  </Container>
  </div>
}

  