import kapustaLogo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="h-14 px-4 flex items-center bg-white">
      <img src={kapustaLogo} className="logo" alt="Kapusta logo" />
    </header>
  );
};

export default Header;
