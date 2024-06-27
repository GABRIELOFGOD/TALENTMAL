import WhyJoinCard from '../components/WhyJoinCard'
import { studentTestimony, talentPool, whyJoin } from '../utils/dummy'

import { FaSquareXTwitter } from "react-icons/fa6";
import { IoReturnUpForward } from "react-icons/io5";

import TestimonyCard from '../components/TestimonyCard'

const Freelancer = () => {
  return (
    <div className=" md:py-10">
      <div className="flex flex-col md:px-28 md:flex-row px-10 py-10 gap-10">
        <div className="">
          <p className="text-black w-fit font-normal text-[12px] rounded-full py-2 mb-5 px-4 bg-bgGray bg-opacity-10">over 3 million ready-to-work creatives</p>
          <p className="md:text-[56px] text-[32px] leading-[35.2px] font-semibold tracking-tighter mb-5 md:leading-[61.6px]">Take control of your future and explore endless possibilities.</p>
          <p className="text-light tracking-tighter text-[14px] md:text-2xl">Take control of your career and dive into a realm of endless opportunities. Showcase your talents, expand your portfolio, and connect with visionary employers from across industries. </p>
        </div>
        <div className="h-full my-auto"><img className="h-full my-auto" src="/images/freelancer.png" alt="" /></div>
      </div>
      <div className="w-full py-10 md:px-28 flex px-10 flex-col justify-between">
        <p className="font-bold text-[32px] mb-5 md:text-2xl">Why you should join our community</p>
        <div className="flex md:grid md:grid-cols-2 justify-between gap-5 flex-wrap">
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

      <div className='freelance-form px-8 gap-3 md:px-28 my-10 flex text-white flex-col justify-center items-center h-[300px]'>
        <p className="font-normal tracking-tighter text-[32px] text-center md:text-[56px]">Your next job is in our pool</p>
        <p className="md:text-2xl text-[16px] tracking-tight md:w-[850px] text-center">Join TalentMAL today and revolutionize the way you work. Let's embark on this journey together and unlock a future filled with success and innovation.</p>
        <button className='rounded-full bg-black text-white py-2 px-6'>Join TalentMAL</button>
      </div>

      <div className='px-10 md:px-28'>
        <div>
          <p className="font-bold text-start md:text-center py-5 text-[32px] md:text-2xl">How to join our talent pool</p>
          <p className='md:text-2xl text-[16px] text-light md:text-center'>Become a part of our community in three easy steps</p>
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

      <div className='py-10 md:py-20'>
        <div className="flex flex-col md:flex-row px-10 gap-10 md:px-20 justify-between">
          <div>
            <p className="font-bold text-[32px] md:text-[48px]">Talent testimonial</p>
            <p className='font-normal text-xl'>See what our users are saying.</p>
          </div>
          <div className='flex my-auto gap-2'>
            <div><FaSquareXTwitter size={40} /></div>
            <p className='text-2xl font-normal'>Follow Skillhub on X</p>
            <div><IoReturnUpForward size={20} /></div>
          </div>
        </div>
        <div className='my-10 flex gap-10 wait overflow-x-scroll w-full'>
          <div className='flex gap-10'>
            {
              studentTestimony.map((test, i) => (
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
  )
}

export default Freelancer