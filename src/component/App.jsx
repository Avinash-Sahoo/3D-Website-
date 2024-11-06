import { Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Earth";
import { Environment } from "@react-three/drei";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Earth = ()=>{
 
  return(
    <Canvas>
      <ambientLight intensity={1}/>
      <Suspense fallback={null}>
         <Model />
      </Suspense>
      <Environment preset="sunset" />
    </Canvas>
  )
}



const App = ()=>{

  useGSAP(()=>{
    gsap.from("h1",{
      y: 85,
      opacity:0,
      duration:2,
      delay:1,
    })
  })
  return (
 
  <div className="w-[100%] h-[100vh] bg-slate-900 relative mix-blend-difference">
    <h1 className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-1/2 text-zinc-50 text-[120px] md:text-[350px] select-none">Earth</h1>
    <Earth />
    <h1 className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-1/2 text-zinc-50 text-[120px] md:text-[350px] select-none mix-blend-overlay">Earth</h1>
  </div>
  );
}

export default App;
