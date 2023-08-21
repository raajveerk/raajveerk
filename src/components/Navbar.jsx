import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import "../index.css"
import resume from "../images/RESUME_Raajveer-Khattar.pdf";

export const Navbar = () => {

  return (
    // <div className='w-full md:flex hidden bg-[#130713] bg-transparent justify-center navBarX'>
    //     <div className='xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[725px] sm:max-w-[540px] max-w-[350px] font-pop text-white my-6 w-full'>
    //         <ul className='m-0 p-0 sm:text-lg lg:text-xl text-md font-bold flex md:space-x-[1.8rem] items-center justify-left'>
    //           <li className='hover:scale-110 duration-150 px-4 py-2 bg-grad-tres rounded-lg text-center text-sm items-center font-bold'><a href={resume} download="RESUME_Raajveer-Khattar">RESUME</a></li>
    //           <li className='hover:scale-125 duration-200 cursor-default'><a href="https://www.instagram.com/raajveerkhattar/" target='_blank' rel='noopener noreferrer'><AiOutlineInstagram /></a></li>
    //           <li className='hover:scale-125 duration-200 cursor-default'><a href="https://twitter.com/RkRaajveer" target='_blank' rel='noopener noreferrer'><AiOutlineTwitter /></a></li>
    //           <li className='hover:scale-125 duration-200 cursor-default'><a href="https://www.linkedin.com/in/raajveer-khattar/" target='_blank' rel='noopener noreferrer'><AiOutlineLinkedin /></a></li>
    //           <li className='hover:scale-125 duration-200 cursor-default'><a href="https://github.com/raajveerk" target='_blank' rel='noopener noreferrer'><AiOutlineGithub /></a></li>
    //         </ul>
    //     </div>
    // </div>

    
    <nav className='fixed z-10 w-max left-[50%] font-pop font-bold text-md text-white translate-x-[-50%] px-12 py-8 rounded-[3rem] bottom-[2.5rem] flex gap-[1.55rem] bg-[rgba(255,255,255,0.1)]'>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Skills</a>
      <a href="">Projects</a>
      <a href="">Contact</a>
    </nav>
    
  )
}
