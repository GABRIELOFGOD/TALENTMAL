import Navbar from "../src/components/Navbar";
import Logos from "../src/components/Logos";
import Offer from "../src/components/Offer";
import DiamondIcon from "../src/assets/homepage/diamond.svg";
import PeopleIcon from "../src/assets/homepage/people-icon.svg";
import FrameOne from "../src/assets/homepage/Frame1.svg";
import FrameTwo from "../src/assets/homepage/Frame2.svg";

const HomePage = () => {
  return (
    <main className="container mx-auto">
      <header>
        <Navbar />
      </header>

      <section className="flex items-center w-full mt-10">
        <div className="w-3/5">
          <p className="text-[12px] bg-[var(--talentmal-color-four)] w-[15.1rem] text-center rounded-full py-1">
            over 3 million ready-to-work creative
          </p>
          <h1 className="mt-7 lg:text-[93px] text-[var(--talentmal-color-five)] font-black w-[58.8rem] leading-[110%] -tracking-[8px]">
            Unlocking <br /> Potentials: Connect, <br /> Collaborate, Create
          </h1>
          <p className="mt-7 w-[49rem] text-[22px] text-[var(--talentmal-color-one)] leading-[140%] -tracking-[1px]">
            Welcome to TalentMAL, where talent meets opportunity. Whether you're
            a forward-thinking employer seeking top-notch freelancers or a
            skilled professional looking for exciting projects, we've got you
            covered.
          </p>
          <button className="mt-6 bg-[var(--talentmal-color-three)] text-white flex items-center gap-2 py-3 px-7 rounded-full hover:scale-105 active:bg-[#818181] duration-300">
            Join TalentMAL
            <img src={DiamondIcon} alt="" className="w-[24px]" />
          </button>

          <div className="mt-6 flex items-center gap-2">
            <img src={PeopleIcon} alt="" className="w-[78px]" />
            <p className="text-[14px] -tracking-[0.5px]">
              Join over 10k+ freelancers and recruiters experiencing the power
              of Skillhub
            </p>
          </div>
        </div>

        <div className="w-2/5 flex relative">
          <img
            src={FrameOne}
            alt="image-one"
            className="w-[21.5rem] pt-[4rem]"
          />
          <img
            src={FrameTwo}
            alt="image-two"
            className="w-[21.5rem] absolute left-[16.8rem]"
          />
        </div>
      </section>

      <section className="mt-[6rem]">
        <Logos />
      </section>

      <section className="mt-[6rem]">
        <Offer />
      </section>
      
    </main>
  );
};

export default HomePage;
