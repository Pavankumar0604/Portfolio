const Logo = () => {
  return (
    <div className="flex items-center gap-3 group scale-100 hover:scale-105 transition-transform duration-300">
      <div className="relative size-10 flex-center bg-neon-blue/10 rounded-xl border border-neon-blue/30 overflow-hidden shadow-lg shadow-neon-blue/5">
        <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-transparent group-hover:from-neon-blue/40 transition-colors" />
        <span className="text-neon-blue font-black text-xl tracking-tighter relative z-10 select-none">PK</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-white-50 font-black text-base sm:text-xl tracking-tight group-hover:text-neon-blue transition-colors">Pavan Kumar</span>
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-blue-50 font-bold group-hover:text-white-50 transition-colors">Software Engineer</span>
      </div>
    </div>
  );
};

export default Logo;
