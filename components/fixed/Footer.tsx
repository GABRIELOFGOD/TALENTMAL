import {
  BsArrowRight,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
<<<<<<< HEAD
    <div className='flex flex-col w-full gap-8 p-10 bg-white'>
      <div className="flex gap-10 flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-4">
          <Link className="flex gap-2 my-auto" to='/'>
            <div className="my-auto w-12 h-12"><img className="w-full h-full" src="/images/logo.png" alt="" /></div>
            <p className="my-auto text-xl font-semibold text-light">TalentMAL</p>
          </Link>
          <p className="text-xl font-normal">No 1 Ilofa road GRA, Ilorin, Kwara state</p>
        </div>
        <div className="font-normal text-xl flex flex-col gap-4">
          <Link to='mailto:hello@talentmal.org'>mail hello@talentmal.org</Link>
          <Link to='tel:+2347038251963'>+2347038251963</Link>
        </div>
        <div className="font-normal flex flex-col gap-4 text-base">
          <Link to='employer'>For Recruiter</Link>
          <Link to='freelancer'>For Freelancer</Link>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-[18px]">Join our talent pool</p>
          <div className="flex w-full">
            <input type="text" className="h-12 border border-neutral-300 w-full px-3 rounded-l-md" placeholder="Enter email to get started" />
            <button className="rounded-r-md px-4 font-semibold bg-black text-white h-12">
              <BsArrowRight />
            </button>
=======
    <div>
      <div className="flex flex-col w-full gap-8 p-10 bg-[#232323] mt-[5rem]">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col gap-4">
            <Link className="flex gap-2 my-auto" to="/">
              <div className="my-auto w-12 h-12">
                <img className="w-full h-full" src="/images/logo.png" alt="" />
              </div>
              <p className="my-auto text-xl font-medium text-white tracking-wider">
                TalentMal
              </p>
            </Link>
            <p className="text-xl font-normal text-[#c4c4c4]">
              No 1 Ilofa Road GRA, Ilorin, Kwara State.
            </p>
          </div>

          {/*  */}
          <div className="font-normal text-xl flex flex-col gap-4">
            <p className="text-[22px] font-semibold text-white">
              Connect with us
            </p>
            <Link to="mailto:hello@talentmal.org" className="text-[#c4c4c4]">
              hello@talentmal.org
            </Link>
            <Link to="tel:+2347038251963" className="text-[#c4c4c4]">
              +2347038251963
            </Link>

            <div className="flex gap-4">
              <Link
                className="rounded-full bg-[#333333] text-white h-10 w-10 flex justify-center items-center"
                to=""
              >
                <BsTwitterX />
              </Link>
              <Link
                className="rounded-full bg-[#333333] text-white h-10 w-10 flex justify-center items-center"
                to=""
              >
                <BsInstagram />
              </Link>
              <Link
                className="rounded-full bg-[#333333] text-white h-10 w-10 flex justify-center items-center"
                to=""
              >
                <BsLinkedin />
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col gap-4 text-[18px] font-medium text-white tracking-wide">
            <Link to="employer">For Recruiter</Link>
            <Link to="freelancer">For Freelancer</Link>
          </div>

          {/*  */}
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-[22px] text-white">
              Join our talent pool
            </p>
            <p className="text-[18px] font-medium text-[#c4c4c4] tracking-wide">
              Get started.
            </p>
            <div className="flex w-full">
              <input
                type="text"
                className="h-12 w-full px-3 rounded-l-md outline-none text-[#333333]"
                placeholder="enter email"
              />
              <button className="rounded-r-md px-4 font-semibold bg-[#333333] text-white h-12">
                <BsArrowRight />
              </button>
            </div>
>>>>>>> 2c287cd211be8aa645e725c016551c519a711158
          </div>
        </div>
      </div>

      <div className="bg-[#333333] py-2">
        <p className="text-sm font-normal text-white tracking-wider text-center">
          © 2023 TalentMal. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
