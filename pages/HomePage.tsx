import Logos from "../src/components/Logos";
import Offer from "../src/components/Offer";
import Evaluation from "../src/components/Evaluation";
import AboutUs from "../src/components/AboutUs";
import Community from "../src/components/Community";
import FAQ from "../src/components/FAQ";
import Friends from "../src/components/Friends";
import DiamondIcon from "../src/assets/homepage/diamond.svg";
import PeopleIcon from "../src/assets/homepage/people-icon.svg";
import FrameOne from "../src/assets/homepage/Frame1.svg";
import FrameTwo from "../src/assets/homepage/Frame2.svg";

const HomePage = () => {
  return (
<<<<<<< HEAD
    <main className="container mx-auto">
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
=======
    <>
      <main className="max-w-7xl mx-auto overflow-hidden">
        <section className="flex items-center mt-10 justify-between">
          <div className="">
            <p className="text-[12px] bg-[var(--talentmal-color-four)] w-[15.1rem] text-center rounded-full py-1">
              over 3 million ready-to-work creative
            </p>
            <h1 className="mt-7 md:text-[65px] text-[var(--talentmal-color-five)] font-black leading-[110%] -tracking-[4px]">
              Unlocking <br /> Potentials: Connect, <br /> Collaborate, Create
            </h1>
            <p className="mt-7 max-w-[38rem] text-[18px] text-[var(--talentmal-color-one)] leading-[140%] -tracking-[1px]">
              Welcome to TalentMAL, where talent meets opportunity. Whether
              you're a forward-thinking employer seeking top-notch freelancers
              or a skilled professional looking for exciting projects, we've got
              you covered.
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
>>>>>>> 4bed86d1090e51a43506acfe6786c6d63d5f2fc9
          </div>
        </div>

<<<<<<< HEAD
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
=======
          <div className="flex">
            <img
              src={FrameOne}
              alt="image-one"
              className="w-[296px] pt-[4rem]"
            />
            <img
              src={FrameTwo}
              alt="image-two"
              className="w-[296px]"
            />
          </div>
        </section>
>>>>>>> 4bed86d1090e51a43506acfe6786c6d63d5f2fc9

      <section className="mt-[6rem]">
        <Logos />
      </section>

      <section className="mt-[6rem]">
        <Offer />
      </section>

      <section className="mt-[6rem]">
        <Evaluation />
      </section>

      <section className="mt-[6rem]">
        <AboutUs />
      </section>

      <section className="mt-[6rem]">
        <Community />
      </section>

      <div className="container mx-auto">
      <section className="mt-[6rem]">
        <FAQ />
      </section>
      </div>

      <section className="mt-[6rem]">
        <Friends />
      </section>
    </main>
  );
};

export default HomePage;
