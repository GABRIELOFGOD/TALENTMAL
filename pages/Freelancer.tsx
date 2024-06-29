import WhyJoinCard from "../components/WhyJoinCard";
import { studentTestimony, talentPool, whyJoin } from "../utils/dummy";

import { FaSquareXTwitter } from "react-icons/fa6";
import { IoReturnUpForward } from "react-icons/io5";

import TestimonyCard from "../components/TestimonyCard";

const Freelancer = () => {
  return (
    <div className=" md:py-10">
<<<<<<< HEAD
      <div className="flex flex-col md:px-28 md:flex-row px-10 py-10 gap-10">
        <div className="">
          <p className="text-black w-fit font-normal text-[12px] rounded-full py-2 mb-5 px-4 bg-bgGray bg-opacity-10">over 3 million ready-to-work creatives</p>
          <p className="md:text-[56px] text-[32px] leading-[35.2px] font-semibold tracking-tighter mb-5 md:leading-[61.6px]">Take control of your future and explore endless possibilities.</p>
          <p className="text-light tracking-tighter text-[14px] md:text-2xl">Take control of your career and dive into a realm of endless opportunities. Showcase your talents, expand your portfolio, and connect with visionary employers from across industries. </p>
=======
      <div className="flex flex-col md:flex-row md:gap-[7rem] md:max-w-[100rem] mx-auto px-4 md:px-0">
        <div className="md:w-1/2">
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <p className="text-[12px] md:text-[18px] bg-[var(--talentmal-color-four)] w-[15.1rem] md:w-[20rem] tracking-[0.005em] text-center rounded-full my-4 md:my-0 md:py-1 md:mb-2">
              Over 3 million ready-to-work creatives
            </p>
          </div>
          <p className="md:text-[56px] text-[32px] leading-[35.2px] font-semibold tracking-tighter mb-5 md:leading-[61.6px] text-center md:text-start">
            Take Control of Your Future and Explore Endless Possibilities.
          </p>
          <p className="text-light tracking-tight text-[14px] md:text-2xl text-center md:text-start">
            Take control of your career and dive into a realm of endless
            opportunities. Showcase your talents, expand your portfolio, and
            connect with visionary employers from across industries.{" "}
          </p>
        </div>
        <div className="md:w-1/2 mt-[2rem] md:mt-0">
          <img className="h-full my-auto" src="/images/freelancer.png" alt="" />
>>>>>>> parent of e22e12c (Merge branch 'master' into cynthia's-branch)
        </div>
      </div>
<<<<<<< HEAD
      <div className="w-full py-10 md:px-28 flex px-10 flex-col justify-between">
        <p className="font-bold text-[32px] mb-5 md:text-2xl">Why you should join our community</p>
        <div className="flex md:grid md:grid-cols-2 justify-between gap-5 flex-wrap">
=======

      {/*  */}
      <div className="w-full mt-[2rem] md:mt-[4rem] flex-col justify-between max-w-[100rem] mx-auto px-4 md:px-0">
        <p className="font-bold md:text-[32px] text-center mb-5 text-2xl">
          WHY YOU SHOULD JOIN OUR COMMUNITY
        </p>
        <div className="md:grid md:grid-cols-2 mt-[2rem] md:mt-[6rem] flex justify-between gap-[3rem] md:gap-[7rem] flex-wrap">
>>>>>>> parent of e22e12c (Merge branch 'master' into cynthia's-branch)
          {whyJoin.map((why, i) => (
            <WhyJoinCard
              key={i}
              icon={why.icon}
              title={why.title}
              body={why.body}
            />
          ))}
        </div>
      </div>

<<<<<<< HEAD
      <div className='freelance-form px-8 gap-3 md:px-28 my-10 flex text-white flex-col justify-center items-center h-[300px]'>
        <p className="font-normal tracking-tighter text-[32px] text-center md:text-[56px]">Your next job is in our pool</p>
        <p className="md:text-2xl text-[16px] tracking-tight md:w-[850px] text-center">Join TalentMAL today and revolutionize the way you work. Let's embark on this journey together and unlock a future filled with success and innovation.</p>
        <button className='rounded-full bg-black text-white py-2 px-6'>Join TalentMAL</button>
      </div>

      <div className='px-10 md:px-28'>
        <div className=' md:px-28 px-10'>
          <p className="font-bold text-start md:text-center py-5 text-[32px] md:text-2xl">How to join our talent pool</p>
          <p className='md:text-2xl text-[16px] text-light md:text-center'>Become a part of our community in three easy steps</p>
=======
      {/*  */}

      <div className="freelance-form gap-3 px-5 mt-[4rem] py-20 flex text-white flex-col justify-center items-center md:h-[436px]">
        <p className="font-normal tracking-wide text-[32px] leading-[41.6px] text-center md:text-[56px]">
          Your Next Job is in Our Pool
        </p>
        <p className="md:text-2xl text-[16px] tracking-wide md:w-[887px] my-3 text-center">
          Join TalentMal today and revolutionize the way you work. Let's embark
          on this journey together and unlock a future filled with success and
          innovation.
        </p>
        <button className="rounded-full tracking-wide shadow-sm bg-[#343434] text-white py-2 px-6 mt-4 border border-white">
          Join TalentMal
        </button>
      </div>

      {/*  */}

      <div className="max-w-[100rem] mx-auto mt-[4rem] px-4 md:px-0">
        <div>
          <p className="font-bold md:text-[32px] text-center mb-5 text-2xl">
            HOW TO JOIN OUR TALENT POOL
          </p>
          <p className="md:text-2xl text-[16px] text-light text-center">
            Become a part of our community in three easy steps
          </p>
>>>>>>> parent of e22e12c (Merge branch 'master' into cynthia's-branch)
        </div>
        <div className="flex md:px-28 md:grid md:grid-cols-2 justify-center py-10 gap-5 flex-wrap">
          {talentPool.map((why, i) => (
            <WhyJoinCard
              key={i}
              icon={why.icon}
              title={why.title}
              body={why.body}
            />
          ))}
        </div>
      </div>

<<<<<<< HEAD
      <div className=''>
        <div className="flex flex-col md:flex-row px-10 gap-10 md:px-20 justify-between">
          <div>
            <p className="font-bold text-[32px] md:text-[48px]">Talent testimonial</p>
            <p className='font-normal text-xl'>See what our users are saying.</p>
          </div>
          <div className='flex my-auto gap-2'>
            <div><FaSquareXTwitter size={40} /></div>
            <p className='text-2xl font-normal'>Follow Skillhub on X</p>
            <div><IoReturnUpForward size={20} /></div>
=======
      {/*  */}

      <div className="max-w-[100rem] mx-auto mt-[4rem] px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          <div>
            <p className="font-semibold text-[32px] md:text-[48px] text-[#151515] text-center md:text-start">
              Talent Testimonial
            </p>
            <p className="font-normal md:text-xl text-center md:text-start tracking-wide">
              See what our users are saying.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start my-auto gap-3">
            <div className="hidden md:block">
              <FaSquareXTwitter size={40} />
            </div>
            <div className="md:hidden">
              <FaSquareXTwitter size={24} />
            </div>
            <p className="md:text-2xl font-normal">Follow TalentMal on X</p>
            <div>
              <IoReturnUpForward size={20} />
            </div>
>>>>>>> parent of e22e12c (Merge branch 'master' into cynthia's-branch)
          </div>
        </div>
        <div className="my-10 flex gap-10 wait overflow-x-scroll w-full">
          <div className="flex gap-10">
            {studentTestimony.map((test, i) => (
              <TestimonyCard
                key={i}
                name={test.name}
                testimony={test.testimony}
                image={test.image}
                position={test.position}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelancer;
