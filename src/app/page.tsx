import Nav from "./Nav/page"
import Hero from "./Hero/page"
import Highlight from "./Highlight/page"
import dynamic from "next/dynamic";

const NoSR = dynamic(() => import("../app/Highlight/page"), { ssr: false });

export default function paga(){
  return (
    <>

    <Nav />
 
    <Hero />

    <NoSR />
    
    
    
    </>
  )
}