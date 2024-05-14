import { useDispatch } from "react-redux";
import { logOut } from "../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div className="flex items-center gap-4 text-sm text-gray-darkest md:divide-x divide-gray-light-3 transition duration-200 ease-in-out">
      {user && (
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 w- overflow-hidden bg-gray-light-2 rounded-full">
            {user && user.picture && (
              <img src={user.picture} alt="User Avatar" />
            )}
            <svg
              className="absolute w-10 h-10 text-gray-darkest -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>

          <p className="hidden md:block">{user.email}</p>
        </div>
      )}
      <Link onClick={handleLogout}>
        <p className="pl-4 underline hover:text-orange transition duration-200 ease-in-out hidden md:block">
          Exit
        </p>

        <div className="md:hidden">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_19406_1192)">
              <path
                d="M9.99998 14H1.99998V1.99998H9.99998V2.99998H12V0H0V16H12V13H10V14H9.99998Z"
                fill="#CBCCD0"
              />
              <path
                d="M12.293 4.29297L10.8789 5.70702L12.1719 6.99998H7V8.99999H12.1719L10.8789 10.293L12.293 11.707L16 7.99997L12.293 4.29297Z"
                fill="#CBCCD0"
              />
            </g>
            <defs>
              <clipPath id="clip0_19406_1192">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default UserMenu;
