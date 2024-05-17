import { useAuth } from "../hooks";
import { UserMenu } from "./UserNav";
import { Link } from "react-router-dom";
import kapustaLogo from "../assets/logo.svg";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header className="h-14 px-4 mx-auto flex items-center justify-between bg-white">
        <Link to="/">
          <img src={kapustaLogo} alt="Kapusta logo" />
        </Link>

        <div>{isLoggedIn && <UserMenu />}</div>
      </header>
    </>
  );
};

export default Navigation;
