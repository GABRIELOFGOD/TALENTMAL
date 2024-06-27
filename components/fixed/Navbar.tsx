import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [navShow, setNavShow] = useState<boolean>(false);

  return (
    <main className="flex items-center justify-between sticky top-0 left-0 w-full bg-white z-50 md:px-10 md:py-5 px-6 py-3 shadow-md">
      <Link onClick={()=>setNavShow(false)} className="flex gap-2 my-auto" to="/">
        <div className="my-auto w-8 h-8 md:w-12 md:h-12">
          <img className="w-full h-full" src="/images/logo.png" alt="" />
        </div>
        <p className="my-auto text-xl font-semibold text-light">TalentMal</p>
      </Link>

<<<<<<< HEAD
      <ul className={`flex flex-col md:flex-row absolute md:relative ${navShow ? 'top-14' : 'top-[-1000px]'} duration-300 md:top-0 left-0 w-full md:w-fit bg-white md:bg-transparent py-10 px-5 md:py-0 md:px-0 md:items-center gap-5 text-lg md:text-xl text-light font-medium my-auto`}>
=======
      <ul
        className={`flex flex-col md:flex-row absolute md:relative ${
          navShow ? "top-16" : "top-[-1000px]"
        } duration-300 md:top-0 left-0 w-full md:w-fit bg-white md:bg-transparent py-10 px-5 md:py-0 md:px-0 md:items-center gap-5 text-lg md:text-[1rem] text-light font-medium my-auto`}
      >
>>>>>>> 2c287cd211be8aa645e725c016551c519a711158
        <li>
          <Link onClick={() => setNavShow(false)} to="/employer">
            For Employer
          </Link>
        </li>
        <li>
          <Link onClick={() => setNavShow(false)} to="/freelancer">
            For Frelancers
          </Link>
        </li>
        <li>
          <a onClick={() => setNavShow(false)} href="#about-us">
            About Us
          </a>
        </li>
<<<<<<< HEAD
        <div className="flex md:hidden items-center gap-5 text-[17px]">
          <button onClick={()=>setNavShow(false)} className="bg-[var(--talentmal-color-two)] text-xs md:text-base text-white py-2 px-3 md:py-3 md:px-7 rounded-full hover:scale-105 active:bg-[#818181] duration-300">
=======
        <div className="flex items-center gap-5 text-[17px]">
          <button
            onClick={() => setNavShow(false)}
            className="md:hidden bg-[var(--talentmal-color-two)] text-xs md:text-base text-white py-2 px-4 md:py-3 md:px-7 rounded-full hover:scale-105 active:bg-[#818181] duration-300"
          >
>>>>>>> 2c287cd211be8aa645e725c016551c519a711158
            <Link to="/">Place a call</Link>
          </button>
          <button
            onClick={() => setNavShow(false)}
            className="md:hidden bg-[var(--talentmal-color-three)] text-xs md:text-base text-white py-2 px-4 md:py-3 md:px-7 rounded-full hover:scale-105 active:bg-[#111111] duration-300"
          >
            <Link to="/">Hire Talent</Link>
          </button>
        </div>
      </ul>

      <div className="flex items-center gap-5 text-xs md:text-[17px]">
<<<<<<< HEAD
        <button onClick={()=>setNavShow(false)} className="bg-[var(--talentmal-color-two)]  text-xs md:text-base hidden md:flex text-white py-2 px-4 md:py-3 md:px-7 rounded-full hover:scale-105 active:bg-[#111111] duration-300">
=======
        <button
          onClick={() => setNavShow(false)}
          className="bg-[var(--talentmal-color-two)] text-white py-2 px-5 md:py-4 md:px-7 rounded-full hover:scale-105 active:bg-[#818181] duration-300"
        >
>>>>>>> 2c287cd211be8aa645e725c016551c519a711158
          <Link to="/">Place a call</Link>
        </button>
        <button
          onClick={() => setNavShow(false)}
          className="bg-[var(--talentmal-color-three)] text-xs md:text-base hidden md:flex text-white py-2 px-4 md:py-3 md:px-7 rounded-full hover:scale-105 active:bg-[#111111] duration-300"
        >
          <Link to="/">Hire Talent</Link>
        </button>
        <button onClick={() => setNavShow(!navShow)} className="flex md:hidden">
          {navShow ? <IoClose size={25} /> : <MdOutlineMenu size={25} />}
        </button>
      </div>
    </main>
  );
};

export default Navbar;
