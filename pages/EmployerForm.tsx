import { BiCloudUpload } from 'react-icons/bi'
import { GoRocket } from 'react-icons/go'

const EmployerForm = () => {
  return (
    <div>
      <div className='freelance-form h-fit flex flex-col justify-between items-center py-16'>
        <p className='text-[56px] text-white leading-[72.8px] text-center md:w-[900px] font-normal'>Secure talented professionals at competitive rates</p>
      </div>
      <div className="flex px-10 py-10 flex-col gap-20">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <p className="text-primary text-[50px] font-extrabold">Hire Talent</p>
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
              <p className="text-[18px] font-medium my-auto text-primary">1/5</p>
              <p className="text-[40px] font-medium text-primary">Your Personal Information</p>
            </div>
            <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
              <input placeholder='First Name' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
              <input placeholder='Last Name' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
              <input placeholder='Email' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
              <input placeholder='Phone number' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
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
        </div> */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-[40px] font-medium text-primary">Why does this matter?</p>
            <p className="text-2xl font-normal text-light">Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap maker algorand algorand holo elrond. </p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className="flex gap-3">
              <p className="text-[18px] font-medium my-auto text-primary">2/5</p>
              <p className="text-[40px] font-medium text-primary">Employment Information</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
                <input placeholder='Role hiring for' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
                <select className='rounded-md border border-neutral-500 px-3 w-full h-10'>
                  <option disabled value="">Level of commitment</option>
                  <option value="">Full time</option>
                  <option value="">Per time</option>
                  <option value="">Remote</option>
                  <option value="">Contract</option>
                </select>
                <select className='rounded-md border border-neutral-500 px-3 w-full h-10'>
                  <option disabled value="">Employment status</option>
                  <option value="">Employed</option>
                  <option value="">Unemployed</option>
                  <option value="">Dismissed</option>
                  <option value="">Retired</option>
                </select>
                <input placeholder='Years of Professional experience' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="date" />
              </div>
              <textarea name="" className='rounded-md border border-neutral-500 px-3 w-full h-[150px]' placeholder='Job description' id=""></textarea>
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
              <p className="text-[18px] font-medium my-auto text-primary">3/5</p>
              <p className="text-[40px] font-medium text-primary">Company Information</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
                <input placeholder='Company name' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
                <input placeholder='Company email' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
              </div>
              <input placeholder='Company website' className='rounded-md border border-neutral-500 px-3 w-full h-10' type="text" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-[40px] font-medium text-primary">What do you mean?</p>
            <p className="text-2xl font-normal text-light">Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap maker algorand algorand holo elrond. </p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className="flex gap-3">
              <p className="text-[18px] font-medium my-auto text-primary">4/5</p>
              <p className="text-[40px] font-medium text-primary">Other information</p>
            </div>
            <div className='flex flex-col w-full items-center justify-center py-6 border-[1.5px] border-dashed rounded-lg border-primary'>
              <BiCloudUpload size={20} />
              <p>Drag and drop your file(s) or <span className='text-[#FF1507]'>browse to upload</span></p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
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
        </div> */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-[40px] font-medium text-primary">What happens next?</p>
            <p className="text-2xl font-normal text-light">Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap maker algorand algorand holo elrond. </p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className="flex gap-3">
              <p className="text-[18px] font-medium my-auto text-primary">5/5</p>
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

export default EmployerForm