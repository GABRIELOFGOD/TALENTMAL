import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <main className="flex items-center justify-between sticky top-0 left-0 w-full bg-white z-50 md:px-10 px-6 py-3 shadow-sm">
      <Link className="flex gap-2 my-auto" to="/">
        <div className="my-auto w-12 h-12">
          <img className="w-full h-full" src="/images/logo.png" alt="" />
        </div>
        <p className="my-auto text-xl font-semibold text-light">TalentMAL</p>
      </Link>

      <ul className="flex items-center gap-5 text-xl text-light font-medium my-auto">
        <li>
          <Link to="/employer">For Employer</Link>
        </li>
        <li>
          <Link to="/freelancer">For Frelancers</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>

      <div className="flex items-center gap-5 text-[17px]">
        <button className="bg-[var(--talentmal-color-two)] text-white py-3 px-7 rounded-full hover:scale-105 active:bg-[#818181] duration-300">
          <Link to="/">Place a call</Link>
        </button>
        <button className="bg-[var(--talentmal-color-three)] text-white py-3 px-7 rounded-full hover:scale-105 active:bg-[#111111] duration-300">
          <Link to="/">Hire Talent</Link>
        </button>
      </div>
    </main>
  );
};

export default Navbar;
