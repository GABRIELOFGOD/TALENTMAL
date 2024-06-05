import Logo from "../assets/logos/talentmal.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <main className="flex items-center justify-between lg:py-6">
      <img src={Logo} alt="logo" className="w-[10rem]" />

      <ul className="flex items-center gap-5 text-[20px] text-[var(--talentmal-color-one)]">
        <li>
          <Link to="/">For Employer</Link>
        </li>
        <li>
          <Link to="/">For Frelancers</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
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
