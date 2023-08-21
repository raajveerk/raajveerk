import React from 'react'
import portraitlg from "../images/portrait-lg.png"
import portraitmd from "../images/portrait-md.png"
import pythonBase from "../images/python-base.svg"
import jsBase from "../images/js-base.svg"
import javaBase from "../images/java-base.svg"
import reactBase from "../images/react-base.svg"
import "../index.css"

export const Hero = () => {
  return (
    <section className='h-screen w-full flex justify-center bg-transparent pt-[35px] font-pop md:pt-[35px]'>
        <div className='z-10 xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[725px] sm:max-w-[540px] cursor-default max-w-[350px] w-screen md:flex hidden justify-between'>
                {/* <div className='absolute top-[225px] left-[-495px] bg-gradient-to-br from-grad-uno via-grad-dos to-grad-tres w-[550px] h-[450px] blobHero blur-3xl opacity-70'></div> */}
            <div className='items-start justify-start text-white xl:pt-[96px] lg:pt-[66px] md:pt-[64px]'>
                <p className='text-left font-medium text-xl pl-1'>Waddup! My name is</p>
                <h1 className='text-left lg:text-8xl md:text-7xl font-bold sm:mt-[-50px] lg:mt-[-70px] pb-[10px] head'>Raajveer<span className='text-[1.8em] font-bold'>.</span></h1>
                <p className='text-left font-medium text-xl mt-10 pl-1'>and I'm a</p>
                <h1 className='text-left xl:text-7xl lg:text-6xl md:text-5xl font-bold mt-[15px] xl:leading-[0.7em] lg:leading-[0.75em] md:leading-[0.8em] headDos'>Full Stack<br /><span className='sm:leading-[0.7em] md:text-5xl lg:text-6xl xl:text-7xl lg:leading-[1em]'>Web Developer</span><span className='text-[1.8em] font-bold'>.</span></h1>
            </div>
            <div className='h-[600px] max-w-full cursor-default '>
                <div className='relative xl:h-[450px] xl:w-[375px] md:h-[405px] md:w-[335px]'>
                    <img className='lg:absolute lg:block sm:hidden top-0 right-0 z-30' src={portraitlg} alt="portraitLarge" />
                    <img className='md:absolute lg:hidden top-0 right-[0px] z-30' src={portraitmd} alt="portraitMedium" />
                    <img className='md:absolute sm:hidden md:block xl:top-[20px] lg:top-[18px] lg:right-[45px] rotate-12 xl:right-[55px] md:top-[20px] md:right-[40px] lg:scale-150 scale-110 z-20 pyb' src={pythonBase} alt="Python" />
                    <img className='md:absolute sm:hidden md:block xl:top-[70px] lg:top-[70px] lg:left-[85px] -rotate-[24deg] lg:scale-150 xl:left-[100px] md:top-[55px] md:left-[110px] scale-110 z-20 jvb' src={javaBase} alt="Java" />
                    <img className='md:absolute sm:hidden md:block xl:top-[175px] lg:top-[155px] lg:right-[20px] lg:scale-150 rotate-[8deg] md:top-[135px] md:right-[25px] xl:right-[35px] scale-110 z-20 jsb' src={jsBase} alt="Js" />
                    <img className='md:absolute sm:hidden md:block xl:top-[200px] lg:top-[200px] lg:left-[45px] md:top-[160px] md:left-[70px] lg:scale-150 xl:left-[70px] scale-110 z-20 rcb' src={reactBase} alt="ReactJs" />
                    <div className='absolute xl:top-[200px] right-0 xl:w-[375px] xl:h-[250px] lg:w-[355px] lg:h-[202px] md:w-[305px] md:h-[200px] md:top-[160px] lg:top-[200px] bg-grad-tres bg-opacity-100 backdrop-blur-lg rounded-2xl z-10'></div>
                </div>
            </div>
        </div>
        <div className='z-10 cursor-default sm:max-w-[540px] px-0 max-w-[350px] md:hidden flex flex-col'>
            <div className='items-end justify-end sm:w-[540px] w-[350px] text-white cursor-default'>
                <p className='text-right font-medium text-md pr-1'>Waddup! My name is</p>
                <h1 className='text-right font-bold sm:text-7xl text-6xl sm:mt-[-55px] mt-[-45px] pb-[10px] head'>Raajveer<span className='text-[1.8em] font-bold'>.</span></h1>
                <p className='text-right font-medium text-md sm:mt-[20px] mt-[20px] pr-1'>and I'm a</p>
                <h1 className='text-right font-bold sm:mt-[15px] mt-[10px] sm:text-6xl text-4xl pb-[15px] sm:leading-10 leading-7 pr-1 headDos'>Full Stack<br /><span>Web Developer</span><span className='text-[2em] font-bold'>.</span></h1>
            </div>
            <div className='h-[450px] sm:mt-[60px] sm:w-[540px] w-[350px] cursor-default mt-[50px]'>
                <div className='relative h-[405px]'>
                    <img className='absolute block top-0 sm:right-[115px] right-[20px] z-30' src={portraitmd} alt="portraitMedium" />
                    <img className='absolute sm:top-[40px] sm:right-[145px] top-[10px] right-[60px] z-20 pyb' src={pythonBase} alt="Python" />
                    <img className='absolute sm:top-[80px] sm:left-[200px] top-[80px] left-[110px] z-20 jvb' src={javaBase} alt="Java" />
                    <img className='absolute sm:top-[160px] sm:right-[115px] top-[140px] right-[35px] z-20 jsb' src={jsBase} alt="Js" />
                    <img className='absolute sm:top-[180px] sm:left-[155px] top-[180px] left-[50px] z-20 rcb' src={reactBase} alt="ReactJs" />
                    <div className='absolute h-[200px] w-full top-[160px] right-0 bg-grad-tres rounded-2xl'></div>
                </div>
            </div>
        </div>
    </section>
  )
}
