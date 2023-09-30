import Link from 'next/link';
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from 'next/router';

function DropDwn() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const router= useRouter();
    const handleButtonClick1 = () => {
        router.push('/'); // Navigates to the '/about' page
      };

      

      const handleButtonClick2 = () => {
        router.push('/about'); // Navigates to the '/about' page
      };


  


      const handleButtonClick3 = () => {
        router.push('/services'); // Navigates to the '/about' page
      };
      const handleButtonClick4 = () => {
        router.push('/contact'); // Navigates to the '/about' page
      };


      const handleButtonClick5 = () => {
        router.push('https://github.com/TenexDesigns/Labsky'); // Navigates to the '/about' page
      };


      
  return (
    <div className="dropdown">
  
  <button onClick={toggleDropdown} className=' border-2 border-gray-400 focus:border-4 focus:border-gray-500 px-2 py-1'>
        <RxHamburgerMenu style={{ color:'#111827', fontSize: '27px' }}  />
        </button>

{isOpen ? 
 <ul tabIndex={0} className="dropdown-content space-y-3  z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
   <li>
        <button className='btn ' onClick={handleButtonClick1}>
    <div className=' hover:text-blue-500 font-bold   hover:rounded-2xl'>
   
      <Link href="/">
      Home
      </Link>
    

    </div> 
    </button> 
</li>


<li>
        <button className='btn ' onClick={handleButtonClick2}>
    <div className=' hover:text-blue-500 font-bold   hover:rounded-2xl'>
   
      <Link href="/about">
   About
      </Link>
    

    </div> 
    </button> 
</li>


<li>
        <button className='btn ' onClick={handleButtonClick3}>
    <div className=' hover:text-blue-500 font-bold   hover:rounded-2xl'>
   
      <Link href="/services">
   Services
      </Link>
    

    </div> 
    </button> 
</li>



<li>
        <button className='btn ' onClick={handleButtonClick4}>
    <div className=' hover:text-blue-500 font-bold   hover:rounded-2xl'>
   
      <Link href="/contact">
     Contact
      </Link>
    

    </div> 
    </button> 
</li>




<li>
<Link href="https://github.com/TenexDesigns/Labsky" target='_blank'>  
    <div className=' hover:text-blue-500 font-bold   hover:rounded-2xl'>
   
      
   Source Code
   
    

    </div> 
    </Link>
</li>

   



  </ul>: ''}



</div>
  )
}

export default DropDwn