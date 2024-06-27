import { BsArrowRight, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
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
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-ath flex flex-col md:flex-row gap-5 justify-between py-3 px-5">
        <div className="flex gap-4">
          <Link className="rounded-full bg-black text-white h-8 w-8 flex justify-center items-center" to=''>
            <BsTwitterX />
          </Link>
          <Link className="rounded-full bg-black text-white h-8 w-8 flex justify-center items-center" to=''>
            <BsInstagram />
          </Link>
          <Link className="rounded-full bg-black text-white h-8 w-8 flex justify-center items-center" to=''>
            <BsLinkedin />
          </Link>
        </div>
        <div className="my-auto">
          <p className="text-sm font-normal text-bgGray">© 2023 TalentMAL. All rights reserved.</p>
        </div>
        <Link className="flex gap-2 my-auto" to='/'>
          <div className="my-auto w-10 h-10"><img className="w-full h-full" src="/images/logo.png" alt="" /></div>
          <p className="my-auto text-xl font-semibold text-light">TalentMAL</p>
        </Link>
      </div>
    </div>
  )
}

export default Footer