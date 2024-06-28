import { BiCloudUpload } from "react-icons/bi";
import { GoRocket } from "react-icons/go";
import WifiIcon from "../src/assets/icons/wifi-02.svg"

const FreelancerForm = () => {
  return (
    <div>
      <section className="freelance-form gap-5 px-5 md:mt-[4rem] mt-[2rem] py-20 flex text-white flex-col justify-center items-center md:h-[436px]">
        <button className="flex items-center justify-center gap-2 rounded-full tracking-wide shadow-sm bg-[#343434] text-white py-2 px-6 mt-4 border border-white">
          <img src={WifiIcon} alt="" />
          Our community
        </button>
        <p className="md:text-[56px] text-[28px] leading-[38.4px] text-white md:leading-[72.8px] md:max-w-[62.5rem] tracking-wide text-center font-normal">
          Join our Amazing Community and Find Yourself at the Center of
          Oppourtunities
        </p>
      </section>

      {/*  */}
      <section>
        <div className="max-w-[100rem] mx-auto md:mt-[4rem] mt-[2rem] px-4 md:px-0">
          <p className="text-primary md:text-[90px] md:text-start text-center text-[32px] font-extrabold tracking-[0.001em]">
            Join Our Community
          </p>
          <p className="md:text-3xl text-[18px] font-normal md:text-start text-center mt-2 text-light tracking-[0.010em]">
            Help Us Match You with the Perfect Opportunities by Providing Your
            Employment Details
          </p>
          {/* <div className='freelance-form h-fit flex px-10 flex-col justify-between items-center py-16'>
        <p className='md:text-[56px] text-[32px] leading-[38.4px] text-white md:leading-[72.8px] text-center md:w-[1127px] font-normal'>Join our amazing community and find yourself at the center of oppourtunities</p>
      </div>
      <div className="flex md:px-28 px-8 py-10 flex-col gap-10 md:gap-20">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <p className="text-primary md:text-[50px] text-[32px] font-extrabold">Join Our Community</p>
            <p className="text-2xl font-normal text-light">Help Us Match You with the Perfect Opportunities by Providing Your Employment Details</p>
          </div>
          <div></div> */}
        </div>
      </section>

      {/* FORM STARTS HERE.... */}

      <form>
        <div className="max-w-[100rem] mx-auto md:mt-[5rem] mt-[2rem] px-4 md:px-0">
          <section className="w-full md:flex md:gap-[6rem]">
            <div className="md:w-1/2">
              <p className="md:text-[40px] text-[28px] md:text-start text-center font-[600] text-primary tracking-[0.002em]">
                What is this for?
              </p>
              <p className="md:text-2xl text-base md:text-start text-center font-normal text-light tracking-[0.005em]">
                Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap
                maker algorand algorand holo elrond.{" "}
              </p>
            </div>

            <div className="md:w-1/2 flex flex-col gap-5 mt-[1.5rem] md:mt-0">
              <div className="flex gap-5 items-center justify-center md:justify-start">
                <p className="md:text-[18px] font-semibold my-auto text-primary">
                  1/7
                </p>
                <p className="md:text-[40px] text-[24px] font-[600] text-center md:text-start text-primary tracking-[0.002em]">
                  Your Personal Information
                </p>
              </div>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
                <input
                  placeholder="First Name"
                  className="rounded-md border border-neutral-500 px-3 w-full h-[3rem] outline-none tracking-[0.002em]"
                  type="text"
                />
                <input
                  placeholder="Last Name"
                  className="rounded-md border border-neutral-500 px-3 w-full h-[3rem] outline-none tracking-[0.002em]"
                  type="text"
                />
                <input
                  placeholder="Email"
                  className="rounded-md border border-neutral-500 px-3 w-full h-[3rem] outline-none tracking-[0.002em]"
                  type="text"
                />
                <select className="rounded-md border border-neutral-500 px-3 w-full h-[3rem] outline-none tracking-[0.002em]">
                  <option disabled selected value="">
                    Gender
                  </option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>
            </div>
          </section>

          {/*  */}

          <section className="w-full md:flex md:gap-[6rem] mt-[2rem] md:mt-[4rem]">
            <div className="md:w-1/2">
              <p className="md:text-[40px] text-[28px] md:text-start text-center font-[600] text-primary tracking-[0.002em]">
                What if I'm unemployed?
              </p>
              <p className="md:text-2xl text-base md:text-start text-center font-normal text-light tracking-[0.005em]">
                Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap
                maker algorand algorand holo elrond.{" "}
              </p>
            </div>

            <div className="md:w-1/2 flex flex-col gap-5 mt-[1.5rem] md:mt-0">
              <div className="flex gap-5 items-center justify-center md:justify-start">
                <p className="md:text-[18px] font-semibold my-auto text-primary">
                  2/7
                </p>
                <p className="md:text-[40px] text-[24px] font-[600] text-center md:text-start text-primary tracking-[0.002em]">
                  Employment Information
                </p>
              </div>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
                <input
                  placeholder="Annual Salary Expectation (USD)"
                  className="rounded-md border border-neutral-500 px-3 w-full h-[3rem] outline-none tracking-[0.002em]"
                  type="text"
                />
                <select className="rounded-md border border-neutral-500 px-3 w-full h-[3rem] outline-none tracking-[0.002em]">
                  <option disabled selected value="">
                    Employment status
                  </option>
                  <option value="">Employed</option>
                  <option value="">Unemployed</option>
                  <option value="">Dismissed</option>
                  <option value="">Retired</option>
                </select>
                <input
                  disabled
                  placeholder="Current Organisation"
                  className="rounded-md disabled:border-neutral-200 disabled:placeholder-neutral-200 border border-neutral-500 px-3 w-full h-[3rem] outline-none tracking-[0.002em]"
                  type="text"
                />
                <input
                  disabled
                  placeholder="Role /Job Title"
                  className="rounded-md disabled:border-neutral-200 disabled:placeholder-neutral-200 border border-neutral-500 px-3 w-full h-[3rem] outline-none tracking-[0.002em]"
                  type="text"
                />
                <input
                  placeholder="Years of Professional experience"
                  className="rounded-md border border-neutral-500 px-3 w-full h-[3rem] outline-none tracking-[0.002em]"
                  type="text"
                />
              </div>
            </div>
          </section>

          {/*  */}

          <section className="w-full md:flex md:gap-[6rem] mt-[2rem] md:mt-[4rem]">
            <div className="md:w-1/2">
              <p className="md:text-[40px] text-[24px] font-[600] text-center md:text-start text-primary tracking-[0.002em]">
                Why does this matter?
              </p>
              <p className="md:text-2xl text-base md:text-start text-center font-normal text-light tracking-[0.005em]">
                Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap
                maker algorand algorand holo elrond.{" "}
              </p>
            </div>

            <div className="md:w-1/2 flex flex-col gap-5 mt-[1.5rem] md:mt-0">
              <div className="flex gap-5 items-center justify-center md:justify-start">
                <p className="md:text-[18px] font-semibold my-auto text-primary">
                  3/7
                </p>
                <p className="md:text-[40px] text-[24px] font-[600] text-center md:text-start text-primary tracking-[0.002em]">
                  Area of Expertise
                </p>
              </div>
              <div className="flex flex-col px-[3.5rem] md:px-0 gap-2">
                <label className="flex gap-5" htmlFor="ui/ux">
                  <input id="ui/ux" className="my-auto" type="checkbox" />
                  <p className="text-xl tracking-[0.005em]">
                    UI/UX / Web design
                  </p>
                </label>
                <label className="flex gap-5" htmlFor="frontend">
                  <input id="frontend" className="my-auto" type="checkbox" />
                  <p className="text-xl tracking-[0.005em]">
                    Frontend development
                  </p>
                </label>
                <label className="flex gap-5" htmlFor="backend">
                  <input id="backend" className="my-auto" type="checkbox" />
                  <p className="text-xl tracking-[0.005em]">
                    Backend development
                  </p>
                </label>
                <label className="flex gap-5" htmlFor="full">
                  <input id="full" className="my-auto" type="checkbox" />
                  <p className="text-xl tracking-[0.005em]">
                    Fullstack development
                  </p>
                </label>
                <label className="flex gap-5" htmlFor="nocode">
                  <input id="nocode" className="my-auto" type="checkbox" />
                  <p className="text-xl tracking-[0.005em]">
                    Nocode development
                  </p>
                </label>
                <label className="flex gap-5" htmlFor="data">
                  <input id="data" className="my-auto" type="checkbox" />
                  <p className="text-xl tracking-[0.005em]">Data Analysis</p>
                </label>
              </div>
            </div>
          </section>

          {/*  */}

          <section className="w-full md:flex md:gap-[6rem] mt-[2rem] md:mt-[4rem]">
            <div className="md:w-1/2">
              <p className="md:text-[40px] text-[24px] font-[600] text-center md:text-start text-primary tracking-[0.002em]">
                Why does this matter?
              </p>
              <p className="md:text-2xl text-base md:text-start text-center font-normal text-light tracking-[0.005em]">
                Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap
                maker algorand algorand holo elrond.{" "}
              </p>
            </div>

            <div className="md:w-1/2 flex flex-col gap-5 mt-[1.5rem] md:mt-0">
              <div className="flex gap-5 items-center justify-center md:justify-start">
                <p className="md:text-[18px] font-semibold my-auto text-primary">
                  4/7
                </p>
                <p className="md:text-[40px] text-[24px] font-[600] text-center md:text-start text-primary tracking-[0.002em]">
                  Language or Stack
                </p>
              </div>
              <div className="flex flex-col px-[3.5rem] md:px-0 gap-2">
                <label className="flex gap-5" htmlFor="ui/ux">
                  <input id="ui/ux" className="my-auto" type="checkbox" />
                  <p className="text-xl tracking-[0.005em]">
                    UI/UX / Web design
                  </p>
                </label>
                <label className="flex gap-5" htmlFor="frontend">
                  <input id="frontend" className="my-auto" type="checkbox" />
                  <p className="text-xl tracking-[0.005em]">
                    Frontend development
                  </p>
                </label>
                <label className="flex gap-5" htmlFor="backend">
                  <input id="backend" className="my-auto" type="checkbox" />
                  <p className="text-xl tracking-[0.005em]">
                    Backend development
                  </p>
                </label>
                <label className="flex gap-5" htmlFor="full">
                  <input id="full" className="my-auto" type="checkbox" />
                  <p className="text-xl tracking-[0.005em]">
                    Fullstack development
                  </p>
                </label>
                <label className="flex gap-5" htmlFor="nocode">
                  <input id="nocode" className="my-auto" type="checkbox" />
                  <p className="text-xl tracking-[0.005em]">
                    Nocode development
                  </p>
                </label>
                <label className="flex gap-5" htmlFor="data">
                  <input id="data" className="my-auto" type="checkbox" />
                  <p className="text-xl tracking-[0.005em]">Data Analysis</p>
                </label>
              </div>
            </div>
          </section>

          {/*  */}

          <section className="w-full md:flex md:gap-[6rem] mt-[2rem] md:mt-[4rem]">
            <div className="md:w-1/2">
              <p className="md:text-[40px] text-[24px] font-[600] text-center md:text-start text-primary tracking-[0.002em]">
                What is this for?
              </p>
              <p className="md:text-2xl text-base md:text-start text-center font-normal text-light tracking-[0.005em]">
                Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap
                maker algorand algorand holo elrond.{" "}
              </p>
            </div>

            <div className="md:w-1/2 flex flex-col gap-5 mt-[1.5rem] md:mt-0">
              <div className="flex gap-5 items-center justify-center md:justify-start">
                <p className="md:text-[18px] font-semibold my-auto text-primary">
                  5/7
                </p>
                <p className="md:text-[40px] text-[24px] font-[600] text-center md:text-start text-primary tracking-[0.002em]">
                  Resume
                </p>
              </div>
              <div className="flex flex-col w-full items-center justify-center py-6 border-[1.5px] border-dashed rounded-lg border-primary">
                <BiCloudUpload size={28} className="cursor-pointer" />
                <p className="tracking-[0.005em] cursor-pointer mt-3">
                  Drag and drop your file(s) or{" "}
                  <span className="text-[#FF1507] tracking-[0.005em]">
                    browse to upload
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/*  */}

          <section className="w-full md:flex md:gap-[6rem] mt-[2rem] md:mt-[4rem]">
            <div className="md:w-1/2">
              <p className="md:text-[40px] text-[24px] font-[600] text-center md:text-start text-primary tracking-[0.002em]">
                What info do you need?
              </p>
              <p className="md:text-2xl text-base md:text-start text-center font-normal text-light tracking-[0.005em]">
                Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap
                maker algorand algorand holo elrond.{" "}
              </p>
            </div>

            <div className="md:w-1/2 flex flex-col gap-5 mt-[1.5rem] md:mt-0">
              <div className="flex gap-5 items-center justify-center md:justify-start">
                <p className="md:text-[18px] font-semibold my-auto text-primary">
                  6/7
                </p>
                <p className="md:text-[40px] text-[24px] font-[600] text-center md:text-start text-primary tracking-[0.002em]">
                  Social & Portfolio
                </p>
              </div>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
                <input
                  placeholder="Instagram"
                  className="rounded-md border border-neutral-500 px-3 w-full h-[3rem] outline-none tracking-[0.002em]"
                  type="text"
                />
                <input
                  placeholder="LinkedIn"
                  className="rounded-md border border-neutral-500 px-3 w-full h-[3rem] outline-none tracking-[0.002em]"
                  type="text"
                />
                <input
                  placeholder="Github"
                  className="rounded-md border border-neutral-500 px-3 w-full h-[3rem] outline-none tracking-[0.002em]"
                  type="text"
                />
                <input
                  placeholder="Portfolio"
                  className="rounded-md border border-neutral-500 px-3 w-full h-[3rem] outline-none tracking-[0.002em]"
                  type="text"
                />
              </div>
            </div>
          </section>

          {/*  */}

          <section className="w-full md:flex md:gap-[6rem] mt-[2rem] md:mt-[4rem]">
            <div className="md:w-1/2">
              <p className="md:text-[40px] text-[24px] font-[600] text-center md:text-start text-primary tracking-[0.002em]">
                What happens next?
              </p>
              <p className="md:text-2xl text-base md:text-start text-center font-normal text-light tracking-[0.005em]">
                Crypto ipsum bitcoin ethereum dogecoin litecoin. PancakeSwap
                maker algorand algorand holo elrond.{" "}
              </p>
            </div>

            <div className="md:w-1/2 flex flex-col gap-5 mt-[1.5rem] md:mt-0">
              <div className="flex gap-5 items-center justify-center md:justify-start">
                <p className="md:text-[18px] font-semibold text-primary">
                  7/7
                </p>
                <p className="md:text-[40px] text-[24px] font-[600] text-center md:text-start text-primary tracking-[0.002em]">
                  You’re done!!!
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <p className="md:text-2xl text-center md:text-start text-light tracking-[0.005em]">
                  Smack the button and we’ll do the rest
                </p>
                <button
                  type="submit"
                  className="flex items-center justify-center text-[22px] md:text-[24px] md:gap-5 gap-3 md:w-fit bg-bgGray text-white md:py-4 py-2 md:px-[3rem] rounded-full"
                >
                  Submit
                  <GoRocket size={24} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
};

export default FreelancerForm;
