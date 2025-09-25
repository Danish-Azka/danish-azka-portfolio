import React, { useState } from 'react';
import { Link as ScrollLink } from "react-scroll";
import { FaAngleDown, FaBootstrap, FaCode, FaEnvelope, FaLaptopCode, FaPhone, FaSchool } from 'react-icons/fa';
import { IoSquareOutline } from 'react-icons/io5';
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { VscGistSecret } from "react-icons/vsc";
import { PiDeviceRotateBold } from "react-icons/pi";
import img from './image/navimg.png';
import gw from './image/gw.jpg';
import { LiaCss3, LiaHtml5, LiaJs, LiaReact } from 'react-icons/lia';
import { SiExpress, SiPostman, SiSequelize } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { TypeAnimation } from 'react-type-animation';
import { FaBuildingColumns } from 'react-icons/fa6';

const Portfolio = () => {
  const Links = [
    { name: 'Home', link: 'Home' },
    { name: 'Skills', link: 'Skills' },
    { name: 'Projects', link: 'Projects' },
    { name: 'Background', link: 'Background' },
    { name: 'Contact', link: 'Contact' },
  ];

  const [open, setOpen] = useState(false);
  

  return (
    <div className="">
      {/* Navbar */}
      <div className="fixed flex items-center w-full bg-white justify-between px-2">
        <div className="flex items-center justify-center">
          <img className="w-[200px]" src={img} alt="Logo" />
        </div>

        <div
          className={`absolute bg-slate-300 lg:static h-fit py-3 lg:py-0 lg:h-fit left-0 w-full lg:w-fit flex items-center lg:mx-0 transition-all duration-500 ease-in lg:bg-transparent ${
            open ? 'top-[60px] opacity-100' : 'top-[-200px] opacity-100'
          }`}
        >
          <ul className="flex lg:flex-row flex-col gap-2 lg:items-center lg:gap-10 text-lg font-semibold px-5">
  {Links.map((link, index) => (
    <li key={index}>
      <ScrollLink
        to={link.link}        // tanpa #
        smooth={true}
        duration={500}
        offset={-70}          // biar ga ketutup navbar
        onClick={() => setOpen(false)}
        className="cursor-pointer hover:text-slate-500"
      >
        {link.name}
      </ScrollLink>
    </li>
  ))}
</ul>
        </div>

        <div className="flex items-center gap-5" >
          <a href="/Putih Minimalis Sederhana Profesional Administrasi Perkantoran Resume.pdf" download="CV-Danish-Azka-Rahmat.pdf">
            <button className="md:px-5 rounded-xl text-xs py-2 px-2  text-white font-semibold bg-orange-400">Download CV</button>
          </a>
          <div
            onClick={() => setOpen(!open)}
            className={`lg:hidden block font-bold ${open ? 'rotate-45' : ''}`}
          >
            <IoSquareOutline size={18} />
          </div>
        </div>
      </div>

      {/* Home */}
      <div  id="Home"className="w-[92%] mx-auto flex flex-col md:flex-row justify-center items-center pt-4 md:pt-18 ">
        <div className="md:w-3/5 top">
          <div className="flex flex-col gap-3">
            <p className="text-xs md:text-base font-medium text-black">Hi I am</p>
            <p className="text-l md:text-2xl font-bold text-orange-500">
              <TypeAnimation
                sequence={[
                  'Danish Azka Rahmat', 
                  2000,                
                  '17yo',               
                  2000,                
                ]}
                wrapper="span"
                speed={60}              
                repeat={Infinity}        
              />
            </p>
            <h1 className="text-5xl md:text-8xl font-extrabold leading-[1.1] text-black">
              Front-End <br />
              <div>Developer</div>
            </h1>
            <p className="md:pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              nisi tenetur itaque ut ipsa eligendi eaque voluptate, optio illo
              maxime iste aut doloribus aliquid minima reprehenderit sit libero
              voluptas ratione.
            </p>
            <button className="md:w-1/3 text-m rounded-xl py-1 text-white font-semibold  bg-orange-400">
              Hire Me
            </button>
          </div>
        </div>

        <div className="md:w-2/5 flex justify-center">
          <div className="md:w-4/5 flex justify-center bot flex-col gap-2">
            <img src={gw} alt="Danish Azka Rahmat" />

            <div className="flex justify-center items-center gap-4">
              <div className="text-4xl">
                <a
                  href="https://www.instagram.com/azkrmt_?igsh=bTAwa2FrNGkzZTR6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoInstagram />
                </a>
              </div>

              <div className="text-4xl">
                <a
                  href="https://www.linkedin.com/in/danish-azka-rahmat-b03b382aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin />
                </a>
              </div>

              <div className="text-4xl">
                <a
                  href="https://github.com/Danish-Azka/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div  id="Skills"className='w-[92%] mx-auto flex flex-col justify-center items-center md:mt-13 overflow-x-hidden'>
        <p link className='text-4xl md:text-3xl  font-semibold'>Skills</p>
        <p className='text-l '>“Here are the Skills I offer to help you create impactful, responsive, and user-friendly digital experiences."</p>

        <div className="grid mt-4 md:mt-0 md:grid-cols-3 gap-6 w-full md:p-6 ">
            <div className="shadow-md p-5 rounded-lg border">
                <h3 className="text-xl font-bold mb-2 flex items-center justify-between">Web Developing <FaLaptopCode className='text-2xl'/></h3>
                <div className='flex items-center justify-center gap-5 text-6xl flex-wrap'><LiaJs color='#F0DB4F'/> <LiaHtml5 color='#E34C26'/> <LiaCss3 color='#264DE4'/>  <LiaReact color='#61DBFB'/> </div>
            </div>

            <div className="shadow-md p-5 rounded-lg border">
                <h3 className="text-xl font-bold mb-2 flex items-center justify-between">API Integration <VscGistSecret className='text-2xl'/></h3>
                <div className='flex items-center justify-center gap-5 text-6xl flex-wrap'><LiaJs color='#F0DB4F'/> <SiExpress/> <SiSequelize color='#007FFF'/> <SiPostman color='#EF5B25'/></div>
            </div>

            <div className="shadow-md p-5 rounded-lg border">
                <h3 className="text-xl font-bold mb-2 flex items-center justify-between">Responsive Design <PiDeviceRotateBold className='text-2xl'/></h3>
                <div className='flex items-center justify-center gap-5 text-6xl flex-wrap'><LiaHtml5 color='#E34C26'/> <LiaCss3 color='#264DE4'/>  <FaBootstrap color='#563D7C' /> <RiTailwindCssFill color='#61DBFB'/> </div>
            </div>


        </div>
      </div>

      {/* Projects */}
       <div id="Projects" className='w-[92%] mx-auto flex flex-col gap-2 justify-center items-center md:mt-13'>
        <p link className='text-4xl md:text-3xl  font-semibold'>My Projects</p>
        <p className='text-l '>“Here are the Skills I offer to help you create impactful, responsive, and user-friendly digital experiences."</p>
        <div className="grid md:grid-cols-3 gap-6 p-6 h-100 ">

            <div className=" flex flex-col justify-center w-full rounded-lg ">
              <div className="text-xl  font-bold md:mb-2 w-full h-full  md:h-4/5 rounded-lg bg-orange-200">
              </div>
              <div className=' md:h-1/5'>
                <p className='text-xs text-orange-400'>Landing Page</p>
                <p>Simple Responsive Restaurant App</p>
                  <button  className="w-2/4 text-m rounded-xl py-1 text-white font-semibold  bg-orange-400" >
                    <a 
                    href="https://Danish-Azka.github.io/ResFood/"
                    target='_blank'
                    rel='nooper noreferrer'>
                      see more details
                    </a>
                  </button>
              </div>
            </div>
            <div className=" flex flex-col justify-center  rounded-lg ">
              <div className="text-xl font-bold md:mb-2 w-full h-full  md:h-4/5 rounded-lg bg-orange-200">
              </div>
              <div className=' md:h-1/5'>
                <p className='text-xs text-orange-400'>Crud Implemtation</p>
                <p>Table Data With crud</p>
                  <button  className="w-2/4 text-m rounded-xl py-1 text-white font-semibold  bg-orange-400" >
                    <a 
                    href="https://danish-azka.github.io/CrudTable/"
                    target='_blank'
                    rel='nooper noreferrer'>
                      see more details
                    </a>
                   </button> 
              </div>
            </div>
            <div className=" flex flex-col justify-center  rounded-lg ">
              <div className="text-xl font-bold md:mb-2 w-full h-full  md:h-4/5 rounded-lg bg-orange-200">
              </div>
              <div className=' md:h-1/5'>
                <p className='text-xs text-orange-400'>Full-Stack Project</p>
                <p>Rent Car and Sparepart Shop Web with Express Js </p>
                <button  className="w-2/4 text-m rounded-xl py-1 text-white font-semibold  bg-orange-400" >
                    <a 
                    href="https://github.com/Danish-Azka/uts-FrontEnd-Danish-Azka"
                    target='_blank'
                    rel='nooper noreferrer'>
                      see more details
                    </a>
                </button>
              </div>
            </div>
        </div>
      </div>

      {/* Background */}

      <div id="Background" className='mt-10 flex justify-center items-center bg-orange-400 py-10'>
        <div className='w-[92%] mx-auto flex justify-center items-center flex-col gap-2'>
          <p link className='text-4xl md:text-3xl  font-semibold'>My Education And Experience</p>
          <p className='text-l'>“Here are the Skills I offer to help you create impactful, responsive, and user-friendly digital experiences."</p>

          <div className="grid mt-4 md:mt-0 md:grid-cols-2 gap-6 w-full md:p-6 ">

              <div className='flex h-full flex-col gap-5 justify-center items-center'>

                <div className='flex h-full justify-center items-center gap-3'>
                  <div className='flex h-full justify-center items-center p-3 text-3xl border'><FaSchool/></div>
                  <div className='flex flex-col'>
                    <p className='text-xs'>Letris Indonesia 2 Vocational School (2022-2025)</p>
                    <p>I studied at Letris Indonesia Vocational school 2 for 3 years majoring in <b>software engineering</b>.</p>
                  </div>
                </div>
                <div className='flex h-full justify-center items-center gap-3'>
                  <div className='flex h-full justify-center items-center p-3 text-3xl border'><FaBuildingColumns/></div>
                  <div className='flex flex-col'>
                    <p className='text-xs'>Universitas Pembangunan Jaya (2025-2029)</p>
                    <p>I am a student at Universitas Pembangunan Jaya majoring in <b>Informatics</b></p>
                  </div>
                </div>
              </div>

              <div className='flex h-full w-full justify-center items-center'>
                <div className='h-full w-full bg-white rounded-xl flex justify-center items-center p-5'>
                    <div className='flex h-full justify-center items-center gap-3'>
                  <div className='flex justify-center items-center p-3 text-3xl border'><FaCode/></div>
                  <div className='flex flex-col'>
                    <p className='text-xs'>Internship, PT Ebdesk teknologi (3 month) </p>
                    <p>I did an internship for 3 months at PT Ebdesk Teknologi as a <b>Front-End Developer </b>.</p>
                    <a href="/Danish Azka Rahmat - Internship Certificate - FE Developer.pdf" download="Internship-Certificate-Danish-Azka-Rahmat.pdf">
                      <button className="px-5 rounded-xl py-1 text-white font-semibold bg-orange-400 text-xs">Download Certificate</button>
                    </a>
                  </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    <div id="Contact" className="w-full mt-10 flex flex-col justify-center items-center min-h-[400px] relative">
      <div className="h-2/3 w-full flex justify-center items-center py-4">
        <div className="w-[92%] md:w-[80%] bg-slate-200 rounded-xl shadow-xl flex flex-col gap-10 md:gap-0 md:flex-row p-5">
      
      <div className="md:w-1/3 flex flex-col items-center justify-center md:border-r pr-4">
        <p className="text-sm font-semibold mb-2">
          Have a project or question in mind? Just send me a message
        </p>
        <p className="text-xs font-semibold mb-3">
          Do you fancy hi to me or do you want to get started with your project and you need my help? Feel free to contact me. I will reply within 48 hours
        </p>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-orange-200 shadow-md rounded-md"><FaPhone/></div>
            <div className="flex flex-col">
              <p className="text-xs">Call me now</p>
              <p className="text-sm">+62-889-xxx-xxxx</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-orange-200 shadow-md rounded-md"><FaEnvelope/></div>
            <div className="flex flex-col">
              <p className="text-xs">Chat with me</p>
              <p className="text-sm">danishazkarahmatt@gmail.com</p>
            </div>
          </div>
        </div>

         <div className="flex justify-center items-center gap-4 mt-5">
              <div className="text-4xl">
                <a
                  href="https://www.instagram.com/azkrmt_?igsh=bTAwa2FrNGkzZTR6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoInstagram />
                </a>
              </div>

              <div className="text-4xl">
                <a
                  href="https://www.linkedin.com/in/danish-azka-rahmat-b03b382aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin />
                </a>
              </div>

              <div className="text-4xl">
                <a
                  href="https://github.com/Danish-Azka/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub />
                </a>
              </div>
            </div>
      </div>

      <div className="md:w-2/3 px-4">
        <h2 className="text-2xl font-bold mb-6">Just say 👋 Hi</h2>
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded-lg p-1 col-span-2 md:col-span-1"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border rounded-lg p-1 col-span-2 md:col-span-1"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border rounded-lg p-1 col-span-2"
          />
          <select className="border rounded-lg p-1 col-span-2 md:col-span-1">
            <option>Services</option>
            <option>Internship</option>
            <option>Part time worker</option>
            <option>freelance</option>
          </select>
          <select className="border rounded-lg p-1 col-span-2 md:col-span-1">
            <option>Budgets</option>
            <option>$100 - $500</option>
            <option>$500 - $1000</option>
            <option>$1000+</option>
          </select>
          <textarea
            placeholder="Message"
            rows="3"
            className="border rounded-lg p-1 col-span-2"
          ></textarea>
          <button
            type="submit"
            className="col-span-2 bg-orange-400 text-white p-1 rounded-lg hover:bg-orange-300 transition"
          >
            Send Message →
          </button>
        </form>
      </div>
    </div>
  </div>

</div>


    </div>
  );
};

export default Portfolio;
