import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="card-border rounded-xl p-5 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4"
        >
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white-50 text-lg sm:text-xl md:text-2xl font-semibold mt-2 underline decoration-neon-blue">{title}</h3>
          <p className="text-blue-50 text-sm sm:text-base md:text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;