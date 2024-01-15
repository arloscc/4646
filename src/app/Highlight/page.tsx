"use client";
import React from "react";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import * as feather from 'react-feather';
import Link from "next/link";

export default function Highlight() {
  return (
    <>
      <div className="h-svh">
        <div>
          <h1 className="p-8 cor text-4xl font-md justify-center flex">
            MEMBERS.
          </h1>
        </div>
        <div className="flex justify-evenly">
          <div className="justify-center flex gap-40">
            <div className="justify-center flex flex-col content-center items-center ">
              <Image
                className="rounded-full w-40 hover:scale-110 duration-300"
                src="/mitaka.png"
                width={1920}
                height={1080}
                alt="Picture of the author"
              />
              <div className=" flex flex-col content-center items-center">
                <h1 className="p-4 cor ">ixta.edit(oninstagram)</h1>
                <h1 className="p-4 cor ">LEADER/FOUNDER</h1>
              </div>
            </div>

            <div className="justify-center flex flex-col content-center items-center">
              <Image
                className="rounded-full w-40 hover:scale-110 duration-300"
                src="/gojo.jpg"
                width={1920}
                height={1080}
                alt="Picture of the author"
              />
              <div className="justify-center">
                <div className=" flex flex-col content-center items-center">
                  <h1 className="p-4 cor ">fumiicry(oninstagram)</h1>
                  <h1 className="p-4 cor ">LEADER</h1>
                </div>
              </div>
            </div>
          </div>
          {/* <ReactPlayer  suppressHydrationWarning={true}  url='/'  /> */}
        </div>

        
     <Link href="https://www.instagram.com/4646.unit/">

<h1 className="cor font-semibold top-20 items-center relative flex justify-center hover:scale-100 scale-90 duration-300 hover:text-indigo-800 ">
    <feather.Instagram />
        Members on following 
</h1>
     </Link>
<h1 className="cor font-semibold top-20 items-center relative flex justify-center text-xs">click to see</h1>

         
      </div>
    </>
  );
}
