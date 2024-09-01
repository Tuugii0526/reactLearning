import { useContext } from "react";
import { LevelContext } from "./LevelContext";
const Section =({children})=>{
    const level=useContext(LevelContext)
return (<section className="section">
    <LevelContext.Provider value={level+1}>
        {children}
    </LevelContext.Provider>
</section>);
}
const Heading=({children})=>{
    const level=useContext(LevelContext)
switch (level){
    case 1 :
        return <h1 className="text-3xl">{children}</h1>;
    case 2:
        return <h2 className="text-2xl">{children}</h2>;
    case 3:
        return <h3 className="text-xl">{children}</h3>;
    case 4:
        return <h4 className="text-lg">{children}</h4>;
    case 5:
        return <h5 className="text-base">{children}</h5>;
    case 6:
        return <h6 className="text-sm">{children}</h6>;
    default:
        throw Error('Unknown level'+level);
}
}
export const ContextAlternativeToPassingProps=()=>{
    
return<Section >
<Heading >Title</Heading>
<Section >
  <Heading >Heading</Heading>
  <Heading >Heading</Heading>
  <Heading >Heading</Heading>
  <Section >
    <Heading >Sub-heading</Heading>
    <Heading >Sub-heading</Heading>
    <Heading >Sub-heading</Heading>
    <Section >
      <Heading>Sub-sub-heading</Heading>
      <Heading>Sub-sub-heading</Heading>
      <Heading >Sub-sub-heading</Heading>
    </Section>
  </Section>
</Section>
</Section>
}