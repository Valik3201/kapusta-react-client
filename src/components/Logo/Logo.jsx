const Logo = () => {
  return (
    <div>
      <span className="relative">
        <span
          className="block relative top-4 md:top-8 left-[7.5rem] md:left-60 w-1.5 md:w-2 h-2 md:h-3.5 bg-black"
          aria-hidden="true"
        ></span>
        <h1 className="text-5xl md:text-8xl font-extrabold">Kapusta</h1>
        <span
          className="block relative -top-2 md:-top-4 left-[7.5rem] md:left-60 w-1.5 md:w-2 h-2 md:h-3.5 bg-black"
          aria-hidden="true"
        ></span>
      </span>

      <p className="uppercase text-gray-darkest font-bold text-sm md:text-base tracking-[.15em] md:tracking-[.18em] pl-4 md:pl-16 pt-2">
        Smart Finance
      </p>
    </div>
  );
};

export default Logo;
