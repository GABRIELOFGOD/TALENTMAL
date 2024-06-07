import OfferCards from "./OfferCards";
import Icon1 from "../assets/icons/icon1.svg";
import Icon2 from "../assets/icons/icon2.svg";
import Icon3 from "../assets/icons/icon3.svg";

const Offer = () => {
  return (
    <main>
      <section className="w-[67rem] mx-auto">
        <h1 className="text-center text-[64px] font-black -tracking-[3px] text-[var(--talentmal-color-one)]">What we offer.</h1>
        <p className="text-center text-[24px] text-[var(--talentmal-color-one)] leading-[140%] -tracking-[1px]">
          TalentMAL, offers streamlined talent acquisition and project management
          for businesses, while we connects top-tier talent with exciting
          opportunities, increased visibility and networking.
        </p>
      </section>

      <section className="mt-[3rem] lg:flex lg:items-center lg:justify-center lg:gap-5">
        <OfferCards
          icon={Icon1}
          title="Recruitment"
          detail="We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. "
        />

        <OfferCards
          icon={Icon2}
          title="Outsourcing"
          detail="We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. "
        />

        <OfferCards
          icon={Icon3}
          title="Consultation"
          detail="We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. "
        />
      </section>
    </main>
  );
};

export default Offer;
