import { ArtBucketList } from "@/components/AddingInteractivity/ArtBucketList";
import { ArtBucketListImmer } from "@/components/AddingInteractivity/ArtBucketListImmer";
import { Container } from "@/components/AddingInteractivity/Container";
import { RenderingTakesASnapshotInTime } from "@/components/AddingInteractivity/RenderingTakesASnapshotInTime";
import { ReplacingArray } from "@/components/AddingInteractivity/ReplacingArray";
import { SculptorList } from "@/components/AddingInteractivity/SculptorList";
import { StateAsASnapshot } from "@/components/AddingInteractivity/StateAsASnapshot";
import { StateOverTime } from "@/components/AddingInteractivity/StateOverTime";
import { FilterableProductTable } from "@/components/LearningReact/ThinkingInReact/FilterableProductTable";
import { ScrollOne } from "@/components/Scroll/ScrollOne/ScrollOne-AppearsAsSoonAsScroll";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div className="w-full h-screen grid grid-cols-3 justify-items-center items-center overflow-scroll">
    <StateAsASnapshot/>
    <RenderingTakesASnapshotInTime/>
    <Container>
      <StateOverTime/>
    </Container>
  <SculptorList/>
  <ReplacingArray/>
  <ArtBucketList/>
  <ArtBucketListImmer/>
  </div>

}
