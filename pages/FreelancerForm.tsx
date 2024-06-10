import { BiCloudUpload } from 'react-icons/bi'
import { GoRocket } from 'react-icons/go'

const FreelancerForm = () => {
  return (
    <div>
      <div className='freelance-form h-fit flex flex-col justify-between items-center py-16'>
        <p className='text-[56px] text-white leading-[72.8px] text-center md:w-[1127px] font-normal'>Join our amazing community and find yourself at the center of oppourtunities</p>
      </div>
      <div className="flex px-10 py-10 flex-col gap-20">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <p className="text-primary text-[50px] font-extrabold">Join Our Community</p>
            <p className="text-2xl font-normal text-light">Help Us Match You with the Perfect Opportunities by Providing Your Employment Details</p>
          </div>
          <div></div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-[40px] font-medium text-primary">What's this for?</p>
            <p className="text-2xl font-normal text-light">Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap maker algorand algorand holo elrond. </p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className="flex gap-3">
              <p className="text-[18px] font-medium my-auto text-primary">1/7</p>
              <p className="text-[40px] font-medium text-primary">Your Personal Information</p>
            </div>
            <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
              <input placeholder='First Name' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
              <input placeholder='Last Name' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
              <input placeholder='Email' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
              <select className='rounded-md border border-neutral-500 px-3 w-full h-10'>
                <option disabled value="">Gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-[40px] font-medium text-primary">What if i am unemployed?</p>
            <p className="text-2xl font-normal text-light">Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap maker algorand algorand holo elrond. </p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className="flex gap-3">
              <p className="text-[18px] font-medium my-auto text-primary">2/7</p>
              <p className="text-[40px] font-medium text-primary">Employment Information</p>
            </div>
            <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
              <input placeholder='Annual Salary Expectation (USD)' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
              <select className='rounded-md border border-neutral-500 px-3 w-full h-10'>
                <option disabled value="">Employment status</option>
                <option value="">Employed</option>
                <option value="">Unemployed</option>
                <option value="">Dismissed</option>
                <option value="">Retired</option>
              </select>
              <input disabled placeholder='Current Organisation' className='rounded-md disabled:border-neutral-200 disabled:placeholder-neutral-200 border border-neutral-500 px-3 w-full h-10' type="text" />
              <input disabled placeholder='Role /Job Title' className='rounded-md disabled:border-neutral-200 disabled:placeholder-neutral-200 border border-neutral-500 px-3 w-full h-10' type="text" />
              <input placeholder='Years of Professional experience' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-[40px] font-medium text-primary">Why does this matter?</p>
            <p className="text-2xl font-normal text-light">Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap maker algorand algorand holo elrond. </p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className="flex gap-3">
              <p className="text-[18px] font-medium my-auto text-primary">3/7</p>
              <p className="text-[40px] font-medium text-primary">Area of Expertise</p>
            </div>
            <div className="flex flex-col gap-2">
              <label className='flex gap-3' htmlFor="ui/ux">
                <input id='ui/ux' className='my-auto' type="checkbox" />
                <p className='text-xl'>UI/UX Design / Web design</p>
              </label>
              <label className='flex gap-3' htmlFor="frontend">
                <input id='frontend' className='my-auto' type="checkbox" />
                <p className='text-xl'>Frontend development</p>
              </label>
              <label className='flex gap-3' htmlFor="backend">
                <input id='backend' className='my-auto' type="checkbox" />
                <p className='text-xl'>Backend development</p>
              </label>
              <label className='flex gap-3' htmlFor="full">
                <input id='full' className='my-auto' type="checkbox" />
                <p className='text-xl'>Fullstack development</p>
              </label>
              <label className='flex gap-3' htmlFor="nocode">
                <input id='nocode' className='my-auto' type="checkbox" />
                <p className='text-xl'>Nocode development</p>
              </label>
              <label className='flex gap-3' htmlFor="data">
                <input id='data' className='my-auto' type="checkbox" />
                <p className='text-xl'>Data Analysis</p>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-[40px] font-medium text-primary">Why does this matter?</p>
            <p className="text-2xl font-normal text-light">Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap maker algorand algorand holo elrond. </p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className="flex gap-3">
              <p className="text-[18px] font-medium my-auto text-primary">4/7</p>
              <p className="text-[40px] font-medium text-primary">Language or Stack</p>
            </div>
            <div className="flex flex-col gap-2">
              <label className='flex gap-3' htmlFor="ui/ux">
                <input id='ui/ux' className='my-auto' type="checkbox" />
                <p className='text-xl'>UI/UX Design / Web design</p>
              </label>
              <label className='flex gap-3' htmlFor="frontend">
                <input id='frontend' className='my-auto' type="checkbox" />
                <p className='text-xl'>Frontend development</p>
              </label>
              <label className='flex gap-3' htmlFor="backend">
                <input id='backend' className='my-auto' type="checkbox" />
                <p className='text-xl'>Backend development</p>
              </label>
              <label className='flex gap-3' htmlFor="full">
                <input id='full' className='my-auto' type="checkbox" />
                <p className='text-xl'>Fullstack development</p>
              </label>
              <label className='flex gap-3' htmlFor="nocode">
                <input id='nocode' className='my-auto' type="checkbox" />
                <p className='text-xl'>Nocode development</p>
              </label>
              <label className='flex gap-3' htmlFor="data">
                <input id='data' className='my-auto' type="checkbox" />
                <p className='text-xl'>Data Analysis</p>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-[40px] font-medium text-primary">What is this for?</p>
            <p className="text-2xl font-normal text-light">Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap maker algorand algorand holo elrond. </p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className="flex gap-3">
              <p className="text-[18px] font-medium my-auto text-primary">5/7</p>
              <p className="text-[40px] font-medium text-primary">Resume</p>
            </div>
            <div className='flex flex-col w-full items-center justify-center py-6 border-[1.5px] border-dashed rounded-lg border-primary'>
              <BiCloudUpload size={20} />
              <p>Drag and drop your file(s) or <span className='text-[#FF1507]'>browse to upload</span></p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-[40px] font-medium text-primary">What info do you need?</p>
            <p className="text-2xl font-normal text-light">Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap maker algorand algorand holo elrond. </p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className="flex gap-3">
              <p className="text-[18px] font-medium my-auto text-primary">6/7</p>
              <p className="text-[40px] font-medium text-primary">Social & Portfolio</p>
            </div>
            <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
              <input placeholder='Instagram' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
              <input placeholder='LinkedIn' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
              <input placeholder='Github' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
              <input placeholder='Portfolio' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-[40px] font-medium text-primary">What happens next?</p>
            <p className="text-2xl font-normal text-light">Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap maker algorand algorand holo elrond. </p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className="flex gap-3">
              <p className="text-[18px] font-medium my-auto text-primary">7/7</p>
              <p className="text-[40px] font-medium text-primary">You’re done!!!</p>
            </div>
            <div className='flex flex-col gap-10'>
              <p className='text-2xl text-light'>Smack the button and we’ll do the rest</p>
              <button className='flex gap-3 w-fit bg-bgGray text-white py-2 px-20 rounded-full'>
                <p className='text-xl'>Submit</p>
                <div className='my-auto'><GoRocket /></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-10 flex md:grid gap-10 md:grid-cols-2 px-10 flex-col-reverse">
        <div className='flex flex-col gap-10'>
          <div className="flex flex-col gap-5">
            <p className="text-primary text-[50px] font-extrabold">Join Our Community</p>
            <p className="text-2xl font-normal text-light">Help Us Match You with the Perfect Opportunities by Providing Your Employment Details</p>
          </div>
          <div className="flex gap-10 flex-col">
            {
              whatDoesOne.map((word, i) => (
                <WhatDoes
                  key={i}
                  heading={word.heading}
                  text={word.text}
                />
              ))
            }
          </div>
        </div>
        <div className='flex flex-col gap-10'>
          <div>
            <div className="flex gap-3">
              <p className="text-[18px] font-medium my-auto text-primary">1/7</p>
              <p className="text-[40px] font-medium text-primary">Your Personal Information</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default FreelancerForm