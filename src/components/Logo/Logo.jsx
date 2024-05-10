const Logo = () => {
  return (
    <div>
      <span className="relative">
        <span
          className="block absolute top-20 left-60 w-2 h-3.5 bg-black"
          aria-hidden="true"
        ></span>
        <h1 className="relative text-8xl font-extrabold">Kapusta</h1>
        <span
          className="block absolute top-4 left-60 w-2 h-3.5 bg-black"
          aria-hidden="true"
        ></span>
      </span>

      <p className="uppercase text-gray-darkest font-bold text-base tracking-[.18em] pl-16 pt-2">
        Smart Finance
      </p>
    </div>
  );
};

export default Logo;
