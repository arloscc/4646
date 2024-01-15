import Image from "next/image"
import Link from "next/link"

export default function Hero(){
    return(
        <>
<div className="h-svh" >
<div className="flex justify-center z-50">
<div className="text-4xl font-normal cor absolute h-[70svh] items-center flex  flex-wrap  left-16">
    <div>
    <h1>4646 </h1>
    <h1>Amv Maker Communtiy .</h1>
    <button className="bg-gradient-to-r from-indigo-950 to-blue-800 hover:bg-gradient-to-l text-white hover:text-slate-400 duration-500 scale-75 hover:scale-90  p-2 text-base rounded-xl "><Link href="https://discord.gg/CMAd8t9n">Join Discord Server</Link></button>
    </div>
</div>
</div>
  
    


        <div className="justify-center h-[73svh] top-0  items-center  flex flex-wrap">
        <Image className="blur-sm -z-10 absolute"
      src="/hero.png"
      width={1920}
      height={1080}
      alt="Background"
      />
      </div>





      </div>
        
        
        </>
    )
}