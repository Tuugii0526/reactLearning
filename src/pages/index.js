import { Inter } from "next/font/google";

import Game from "@/components/LearningReact/TicTacToe/Game";
// import { ScrollOne } from "@/components/Scroll/ScrollOne/ScrollOne-AppearsAsSoonAsScroll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return(
    <Game/>
  )

}
