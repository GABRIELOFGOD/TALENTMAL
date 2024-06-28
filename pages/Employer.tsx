import { exployTalent } from "../utils/dummy";

import WhyJoinCard from "../components/WhyJoinCard";

const Employer = () => {
  return (
    <div className="md:py-10">
      <div className="flex flex-col md:flex-row md:gap-[7rem] md:max-w-[100rem] mx-auto px-4 md:px-0">
        <div className="md:w-1/2">
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <p className="text-[12px] md:text-[18px] bg-[var(--talentmal-color-four)] w-[15.1rem] md:w-[20rem] tracking-[0.005em] text-center rounded-full my-4 md:my-0 md:py-1 md:mb-2">
              Over 3 million ready-to-work creatives
            </p>
          </div>
          <p className="md:text-[56px] text-[32px] leading-[35.2px] font-semibold tracking-tighter mb-5 md:leading-[61.6px] text-center md:text-start">
            For First Time Founders and Experienced Business Leaders
          </p>
          <p className="text-light tracking-tight text-[14px] md:text-2xl text-center md:text-start">
            Find the perfect match for your project needs with our diverse pool
            of skilled freelancers. From developers to designers unleash the
            potential of our curated talent network. Say goodbye to recruitment
            hassles and hello to seamless collaboration.
          </p>
        </div>

        <div className="md:w-1/2 mt-[2rem] md:mt-0">
          <img className="w-full my-auto" src="/images/employer.png" alt="" />
        </div>
      </div>

      {/*  */}
      <div className="w-full mt-[2rem] md:mt-[4rem] flex-col justify-between max-w-[100rem] mx-auto px-4 md:px-0">
        <div>
          <p className="font-bold md:text-[32px] text-center mb-2 text-2xl">
            EXPLORE OUR TALENT POOL
          </p>
          <p className="font-normal text-[16px] md:text-[24px] text-center mt-3">
            Our talents are grouped into categories and we focus only on
            mid-level (3-5 years) and senior level (6+ years) talents
          </p>
        </div>

        {/*  */}
        <div className="md:grid md:grid-cols-2 mt-[3rem] md:mt-[6rem] flex justify-between gap-[3rem] md:gap-[7rem] flex-wrap">
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

      <div className="freelance-form gap-3 px-5 mt-[4rem] py-20 flex text-white flex-col justify-center items-center md:h-[436px]">
        <p className="font-normal tracking-wide text-[32px] leading-[41.6px] text-center md:text-[56px]">
          Welcome to a New Era of Productivity
        </p>
        <p className="md:text-2xl text-[16px] tracking-wide md:w-[887px] my-3 text-center">
          Unlock access to a pool of exceptional talent ready to bring your
          vision to life. From seasoned professionals to rising stars, find the
          ideal fit for your projects and propel your business to new heights.
        </p>
        <button className="rounded-full tracking-wide shadow-sm bg-[#343434] text-white py-2 px-6 mt-4 border border-white">
          Start hiring
        </button>
      </div>

      {/*  */}
                {/*
      <div className='freelance-form gap-3 px-5 md:px-28 my-10 py-20 flex text-white flex-col justify-center items-center md:h-[300px]'>
        <p className="font-normal tracking-tighter text-[32px] text-center md:text-[56px]">Welcome to a new era of productivity</p>
        <p className="md:text-2xl text-[16px] tracking-tight md:w-[850px] text-center">Unlock access to a pool of exceptional talent ready to bring your vision to life. From seasoned professionals to rising stars, find the ideal fit for your projects and propel your business to new heights.</p>
        <button className='rounded-full shadow-sm bg-black text-white py-2 px-6'>Start hiring</button>
      </div>

      <div className="flex flex-col md:flex-row md:px-28 px-8 md:py-20 gap-10">
        <div className="my-auto flex-[2]">
          <p className="text-black text-center md:text-start font-normal tracking-tight text-2xl"> In addition to the previously mentioned roles, TalentMAL also offers expertise in sourcing and vetting talent for various other positions. Our commitment to helping you find the right fit extends beyond the predefined categories. We understand that every business has unique needs, and we are dedicated to assisting you in finding the perfect candidate for your specific requirements.</p>
        </div>
        <div className="h-full w-full flex-1 my-auto"><img className="h-full w-full my-auto" src="/images/emlaptop.png" alt="" /></div>
      </div> */}

      <div className="max-w-[100rem] mx-auto mt-[4rem] px-4 md:px-0 flex flex-col md:flex-row md:gap-[7rem]">
        <div className="md:my-auto md:w-1/2">
          <p className="text-black text-center md:text-start font-normal text-[20px] md:text-2xl tracking-wide">
             In addition to the previously mentioned roles, TalentMal also
            offers expertise in sourcing and vetting talent for various other
            positions. Our commitment to helping you find the right fit extends
            beyond the predefined categories. We understand that every business
            has unique needs, and we are dedicated to assisting you in finding
            the perfect candidate for your specific requirements.
          </p>
        </div>
        <div className="h-full md:w-1/2 mt-[4rem] my-auto">
          <img className="my-auto" src="/images/emlaptop.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Employer;
