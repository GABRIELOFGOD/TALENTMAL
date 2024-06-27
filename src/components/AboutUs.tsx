import Frame5 from "../assets/homepage/aboutus.svg";
import Icon6 from "../assets/icons/icon6.svg";

const AboutUs = () => {
  return (
    <main className="lg:flex gap-5">
      <section className="lg:w-1/2 px-4">
        <div>
          <h1
            className="text-[32px] md:text-[58px] lg:text-[64px] font-medium lg:font-black -tracking-[3px] text-[var(--talentmal-color-one)]"
            id="about-us"
          >
            About Us.
          </h1>
          <p className="hidden md:block text-[14px] md:text-[18px] lg:text-[24px] md:leading-[130%] leading-[18.2px] md:-tracking-[1px] text-[var(--talentmal-color-three)]">
            TalentMal matches vetted Junior level/Mid-level/Senior level experts
            in Africa to global tech companies and startups. Our aim is to
            enable companies to have access to a broader pool of candidates
            regardless of location or governmental restrictions.
          </p>
          <p className="md:hidden text-[14px] leading-[18.2px] text-[var(--talentmal-color-three)]">
          TalentMal matches vetted Junior level/Mid-level/Senior level experts
            in Africa to global tech companies and startups. Our aim is to
            enable companies to have access to a broader pool of candidates
            regardless of location or governmental restrictions.
          </p>
        </div>

        <div className="my-[3rem]">
          <img src={Icon6} alt="" className="lg:w-[42px] w-[19px] md:w-[38px]" />
          <h2 className="text-[24px] md:text-[28px] lg:text-[32px] md:font-bold font-medium -tracking-[1px]">
            Our Vision
          </h2>
          <p className="text-[14px] md:text-[18px] lg:text-[24px] md:leading-[130%] leading-[18.2px] md:-tracking-[1px] text-[var(--talentmal-color-three)]">
            Our vision is to become the leading global platform for working with
            and hiring non-technical talent in Africa.
          </p>
        </div>
      </section>

      <section className="lg:w-1/2 bg-[var(--talentmal-color-six)] flex items-center justify-center py-10">
        <img src={Frame5} alt="about us image" />
      </section>
    </main>
  );
};

export default AboutUs;
