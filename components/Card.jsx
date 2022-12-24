import React from "react"
import Image from "next/image"
import Link from "next/link"

export function Card3({  info, projectname, from,to,Amount ,type }) {
  return (
    <div className="max-w-sm rounded overflow-hidde shadow-xl">
     
      <div className=" py-4 flex-col font-mono px-6 pr-32">
        <div className="font-bold text-xl mb-2">{projectname}</div>
        <p className="text-gray-700 text-base">{info}</p>
        <p className="text-gray-700 text-base">From:{from}</p>
        <p className="text-gray-700 text-base">To:{to}</p>
        <p className="text-gray-700 text-base">Amount: ${Amount}</p>
        <p className= {`text-gray-700 text-base ${type ===2 ?"bg-green-700 text-base ":"bg-red-300 text-base" }`}>Type:{type}</p>
      </div>
      
    </div>
  )
}