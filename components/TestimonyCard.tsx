import { TesimonyProp } from "../utils/dummy";

const TestimonyCard = ({ name, image, position, testimony }: TesimonyProp) => {
  return (
    <div className="bg-ath p-4 md:w-[824px] flex flex-col gap-2 rounded-md md:rounded-[32px]">
      <div className="flex gap-3">
        <div className="rounded-full h-12 overflow-hidden my-auto w-12">
          <img className="w-full" src={image} />
        </div>
        <div>
          <p className="text-[28px]">{name}</p>
          <p className="text-text">{position}</p>
        </div>
      </div>
      <p className="text-light">{testimony}</p>
    </div>
  );
};

export default TestimonyCard;
