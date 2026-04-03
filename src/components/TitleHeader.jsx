const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl text-center bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
