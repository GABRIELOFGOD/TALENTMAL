import Frame5 from "../assets/homepage/aboutus.svg";
import Icon6 from "../assets/icons/icon6.svg";

const AboutUs = () => {
  return (
    <main className="flex gap-5">
      <section className="w-1/2">
        <div>
          <h1 className="text-[64px] font-black -tracking-[3px] text-[var(--talentmal-color-one)]">
            About Us.
          </h1>
          <p className="text-[24px] leading-[130%] -tracking-[1px] text-[var(--talentmal-color-three)]">
            Skillhub matches vetted Junior level/Mid-level/Senior level experts
            in Africa to global tech companies and startups. Our aim is to
            enable companies to have access to a broader pool of candidates
            regardless of location or governmental restrictions.
          </p>
        </div>

        <div className="my-[3rem]">
          <img src={Icon6} alt="" />
          <h2 className="text-[32px] font-bold -tracking-[1px]">Our Vision</h2>
          <p className="text-[24px] leading-[130%] -tracking-[1px] text-[var(--talentmal-color-three)]">
            Our vision is to become the leading global platform for working with
            and hiring non-technical talent inAfrica.
          </p>
        </div>
      </section>

      <section className="w-1/2 bg-[var(--talentmal-color-six)] flex items-center justify-center py-10">
        <img src={Frame5} alt="about us image" />
      </section>
    </main>
  );
};

export default AboutUs;
