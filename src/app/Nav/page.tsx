import Image from "next/image"
import Link

from "next/link"
export default function Nav(){
    return(
        <>
        <div className="p-4">

        <div className="flex justify-between items-center">
            <Link href="/"><Image className="w-28 filter"
      src="/logo.png"
      width={500}
      height={500}
      alt="Picture of the author"
      /></Link>
    <div className="font-semibold">
            <Link className="p-4 text-black hover:text-slate-600" href="/">Home</Link>
            <Link className="p-4" href="">About</Link>
    </div>
        </div>
      </div>
        
        
        
        </>
    )
}