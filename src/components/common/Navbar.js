'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import DropDown from './DropDown';
import DropDwn from './DropDwn';
import { useRouter } from 'next/router';



export default function Navbar() {

  const router = useRouter();

  const { pathname } = router;


  const isLinkActive = (linkPath) => {
    return pathname === linkPath;
  };





  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to update the state based on screen width
  const updateScreenWidth = () => {
    setIsSmallScreen(window.innerWidth < 768); // Adjust the screen width breakpoint as needed
  };

  // Add an event listener to update the screen width state on window resize
  useEffect(() => {
    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);
  return (
<div className='max-w-[90%] mx-auto'>

  <div className='flex flex-row justify-between p-3 items-start'>

  <div className="">
      <a className="font-semibold"><h1 className='  text-blue-500  text-3xl'>Lab<span className=' text-black text-3xl'>Sky</span> </h1></a>
    </div>




  { isSmallScreen ?<div>

    <DropDwn/>
  </div>

    :  <div className='flex flex-row space-x-6'>

<Link href='/'>
    <div className={` font-bold hover:text-blue-700  ${isLinkActive('/') ? 'text-blue-500' : ''}`}>Home</div>
    
    </Link>


    <Link href='/about'>
    <div className={` font-bold hover:text-blue-700  ${isLinkActive('/about') ? 'text-blue-500' : ''}`}>About</div>
    
    </Link>


    <Link href='/services'>
    <div className={` font-bold hover:text-blue-700  ${isLinkActive('/services') ? 'text-blue-500' : ''}`}>Services</div>
    
    </Link>



    <Link href='/contact'>
    <div className={` font-bold hover:text-blue-700  ${isLinkActive('/contact') ? 'text-blue-500' : ''}`}>Contact</div>
    
    </Link>

    <Link href='https://github.com/TenexDesigns/Labsky'>
    <div className=' font-bold hover:text-blue-700'>Source Code</div>
    
    </Link>

      
      </div>}







  </div>




    {/* <div className="navbar bg-base-100 flex-row justify-center ">
    
    
    <div className="flex-1">
      <a className="font-semibold"><h1 className='  text-blue-500  text-3xl'>Lab<span className=' text-black text-3xl'>Sky</span> </h1></a>
    </div>




{}

<div className='  hidden  lg:flex flex-row justify-around text-2xl font-semibold '>

<div className=' hover:text-blue-500 hover:bg-gray-500 hover:px-2 hover:py-1 hover:rounded-2xl'>
      <button onClick={()=>{}}>
      <Link href="/">
      Home
      </Link>
    
      </button>
    </div>  

    <div className=' hover:text-blue-500 hover:bg-gray-500 hover:px-2 hover:py-1 hover:rounded-2xl'>
      <button onClick={()=>{}}>
      <Link href="/about">
     About
      </Link>
      </button>
    </div>  

    <div className=' hover:text-blue-500 hover:bg-gray-500 hover:px-2 hover:py-1 hover:rounded-2xl'>
      <button onClick={()=>{}}>
      <Link href="/services">
      Services
      </Link>
      </button>
    </div>  


    <div className=' hover:text-blue-500 hover:bg-gray-500 hover:px-2 hover:py-1 hover:rounded-2xl'>
      <button onClick={()=>{}}>
      <Link href="/contact">
      Contact
      </Link>
      </button>
    </div>  


    <div className=' hover:text-blue-500 hover:bg-gray-500 hover:px-2 hover:py-1 hover:rounded-2xl'>
      <button onClick={()=>{}}>
    <Link href='https://github.com/TenexDesigns/' target='_blank'>
      Source Code
   </Link>
      </button>
    </div>  
    
 

    </div>








  </div> */}

  </div>


  )
}
