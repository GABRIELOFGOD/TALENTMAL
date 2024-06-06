import OfferCards from "./OfferCards";
import Icon1 from "../assets/icons/icon1.svg";

const Offer = () => {
  return (
    <main>
      <section className="w-[67rem] mx-auto">
        <h1 className="text-center">What we offer.</h1>
        <p className="text-center">
          Skillhub, offers streamlined talent acquisition and project management
          for businesses, while we connects top-tier talent with exciting
          opportunities, increased visibility and networking.
        </p>
      </section>

      <section>
        <OfferCards
          icon={Icon1}
          title="Recruitment"
          detail="We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even physical workspaces if required. "
        />
      </section>
    </main>
  );
};

export default Offer;
