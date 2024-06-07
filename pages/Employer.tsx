import { exployTalent } from '../utils/dummy'

import WhyJoinCard from '../components/WhyJoinCard'

const Employer = () => {
  return (
    <div className=" py-10">
      <div className="flex px-10 py-10 gap-10">
        <div className="">
          <p className="text-black w-fit font-normal text-[12px] rounded-full py-2 px-4 bg-bgGray bg-opacity-30">over 3 million ready-to-work creatives</p>
          <p className="text-[56px] font-semibold tracking-tighter mb-5 leading-[61.6px]">For first time founders and experienced business leaders</p>
          <p className="text-light tracking-tighter text-2xl">Find the perfect match for your project needs with our diverse pool of skilled freelancers. From developers to designers unleash the potential of our curated talent network. Say goodbye to recruitment hassles and hello to seamless collaboration.</p>
        </div>
        <div className="h-full w-full my-auto"><img className="h-full my-auto" src="/images/employer.png" alt="" /></div>
      </div>
      <div className="w-full py-10 px-10 flex flex-col justify-between">
        <div className='py-5'>
          <p className="font-bold text-2xl">Explore our talent pool</p>
          <p className="font-normal text-xl">Our talents are grouped into categories and we focus only on mid-level (3-5 years) and senior level (6+ years) talents</p>
        </div>
        <div className="md:grid md:grid-cols-3 py-10 flex px-10 justify-between gap-10 flex-wrap">
          {exployTalent.map((why, i) => (
            <WhyJoinCard
              key={i}
              icon={why.icon}
              title={why.title}
              body={why.body}
            />
          ))}
        </div>
      </div>

      <div className='freelance-form gap-3 my-10 flex text-white flex-col justify-center items-center h-[300px]'>
        <p className="font-normal tracking-tighter text-[56px]">Welcome to a new era of productivity</p>
        <p className="text-2xl w-[850px] tracking-tighter text-center">Unlock access to a pool of exceptional talent ready to bring your vision to life. From seasoned professionals to rising stars, find the ideal fit for your projects and propel your business to new heights.</p>
        <button className='rounded-full bg-black text-white py-2 px-6'>Start hiring</button>
      </div>

      <div className="flex px-10 py-20 gap-10">
        <div className="my-auto flex-[2]">
          <p className="text-black font-normal tracking-tighter text-2xl"> In addition to the previously mentioned roles, TalentMAL also offers expertise in sourcing and vetting talent for various other positions. Our commitment to helping you find the right fit extends beyond the predefined categories. We understand that every business has unique needs, and we are dedicated to assisting you in finding the perfect candidate for your specific requirements.</p>
        </div>
        <div className="h-full w-full flex-1 my-auto"><img className="h-full w-full my-auto" src="/images/emlaptop.png" alt="" /></div>
      </div>

      {/* <div className=''>
        <div className="flex px-20 justify-between">
          <div>
            <p className="font-bold text-[48px]">Talent testimonial</p>
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
                name={test.name}
                testimony={test.testimony}
                image={test.image}
                position={test.position}
              />
            ))}
          </div>
        </div>
      </div> */}
      
    </div>
  )
}

export default Employer