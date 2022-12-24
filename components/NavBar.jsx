import React from 'react'
import Link from "next/link"; 
import Image from 'next/image'
function NavBar() {
  return (
   <nav className='bg-white border-gray-200 px-5  py-2.5  dark:bg-white-800 pb-5 pt-4 font-mono'>
      <ul className="flex flex-wrap justify-between items-center">
          <Link href='/'><li className='text-sky-800 font-mono font-extrabold text-3xl'><Image src={"/etherscan.png"} width={50} height={50} />ETHERSCAM</li></Link>
          {/* <Link href = "/about"> <li>About</li> </Link> */}
        </ul>
        
   </nav>
   
  )
}

export default NavBar