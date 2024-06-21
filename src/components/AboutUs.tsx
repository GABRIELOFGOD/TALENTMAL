import Frame5 from "../assets/homepage/aboutus.svg";
import Icon6 from "../assets/icons/icon6.svg";

const AboutUs = () => {
  return (
    <main className="lg:flex gap-5">
      <section className="lg:w-1/2 px-2">
        <div>
          <h1 className="text-[32px] lg:text-[64px] font-medium lg:font-black -tracking-[3px] text-[var(--talentmal-color-one)]">
            About Us.
          </h1>
          <p className="hidden lg:block text-[14px] lg:text-[24px] lg:leading-[130%] leading-[18.2px] -tracking-[1%] lg:-tracking-[1px] text-[var(--talentmal-color-three)]">
            TalentMAL matches vetted Junior level/Mid-level/Senior level experts
            in Africa to global tech companies and startups. Our aim is to
            enable companies to have access to a broader pool of candidates
            regardless of location or governmental restrictions.
          </p>
          <p className="lg:hidden text-[14px] lg:text-[24px] lg:leading-[130%] leading-[18.2px] -tracking-[1%] lg:-tracking-[1px] text-[var(--talentmal-color-three)]">
            TalentMAL matches vetted Junior level/Mid-level/Senior level experts
            in Africa to global tech companies and startups. Our aim is to
            enable companies to have access to a broader pool of candidates
            regardless of location or governmental restrictions.
          </p>
        </div>

        <div className="my-[3rem]">
          <img src={Icon6} alt="" className="w-[31px] lg:w-full" />
          <h2 className="text-[24px] lg:text-[32px] lg:font-bold font-medium -tracking-[1px]">Our Vision</h2>
          <p className="text-[14px] lg:text-[24px] lg:leading-[130%] leading-[18.2px] -tracking-[1%] lg:-tracking-[1px] text-[var(--talentmal-color-three)]">
            Our vision is to become the leading global platform for working with
            and hiring non-technical talent inAfrica.
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
