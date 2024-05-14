import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { fetchGoogleUserProfile } from "../redux/auth/operations";
import googleLogo from "../assets/google-logo.svg";

const GoogleLogin = () => {
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      dispatch(fetchGoogleUserProfile(codeResponse.access_token));
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <>
      <button
        onClick={login}
        className="block mx-auto bg-gray-light-2 rounded-full shadow-google mt-5 mb-8 px-5 py-3 hover:bg-gray-lighter transition duration-200 ease-in-out"
      >
        <img src={googleLogo} alt="Google logo" />
        <span className="sr-only">Google</span>
      </button>
    </>
  );
};

export default GoogleLogin;
