import { useDispatch } from "react-redux";
import { logOut } from "../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks";
import Modal from "./Modal";

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

      <Modal
        type={"logout"}
        handleConfirm={handleLogout}
        message={"Do you really want to leave?"}
      />
    </div>
  );
};

export default UserMenu;
