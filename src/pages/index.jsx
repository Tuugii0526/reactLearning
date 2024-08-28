import { ArtBucketList } from "@/components/AddingInteractivity/ArtBucketList";
import { ArtBucketListImmer } from "@/components/AddingInteractivity/ArtBucketListImmer";
import { Container } from "@/components/AddingInteractivity/Container";
import { RenderingTakesASnapshotInTime } from "@/components/AddingInteractivity/RenderingTakesASnapshotInTime";
import { ReplacingArray } from "@/components/AddingInteractivity/ReplacingArray";
import { SculptorList } from "@/components/AddingInteractivity/SculptorList";
import { StateAsASnapshot } from "@/components/AddingInteractivity/StateAsASnapshot";
import { StateOverTime } from "@/components/AddingInteractivity/StateOverTime";
import EditProfile from "@/components/ManagingState/Problem1ReactingToInput";
import { ReactingToInputWithState } from "@/components/ManagingState/ReactingToInputWithState";
import { FilterableProductTable } from "@/components/QuickStart/ThinkingInReact/FilterableProductTable";
import { ScrollOne } from "@/components/Scroll/ScrollOne/ScrollOne-AppearsAsSoonAsScroll";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div className="w-full h-screen grid grid-cols-1 justify-items-center items-center gap-3 overflow-scroll lg:grid-cols-3 md:grid-cols-2 ">
    {/* <StateAsASnapshot/>
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
  </Container> */}
  <Container>
  <EditProfile/>
  </Container>
  </div>

}
