import { useState } from "react";
import googleLogo from "../../assets/google-logo.svg";

const InputWithValidation = ({
  value,
  onChange,
  onBlur,
  placeholder,
  type,
  error,
}) => {
  return (
    <div className="relative mb-6">
      <label className="block mb-3 text-sm text-black">
        {error && <span className="text-red">* </span>}
        {placeholder}:
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className="bg-gray-light-2 text-black text-sm rounded-full block w-full p-4 focus:outline-none focus:ring-2 focus:ring-orange"
        required
      />
      {error && (
        <p className="absolute pt-1 text-red text-xs">
          This is a required field
        </p>
      )}
    </div>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
  };

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleRegistration = () => {
    console.log("Registration logic");
  };

  const validateEmail = () => {
    return email.trim() === "" && emailTouched;
  };

  const validatePassword = () => {
    return password.trim() === "" && passwordTouched;
  };

  return (
    <div className="bg-white shadow-form rounded-[1.88rem] px-5 md:px-20 py-14">
      <h2 className="text-gray-darkest text-xs text-center">
        You can log in with your Google Account:
      </h2>
      <button className="block mx-auto bg-gray-light-2 rounded-full shadow-google mt-5 mb-8 px-5 py-3 hover:bg-gray-lighter transition duration-200 ease-in-out">
        <img src={googleLogo} alt="Google logo" />
        <span className="sr-only">Google</span>
      </button>
      <h2 className="text-gray-darkest text-xs mb-5">
        Or log in using an email and password, after registering:
      </h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <InputWithValidation
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          placeholder="Email"
          type="email"
          error={validateEmail()}
        />
        <InputWithValidation
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          placeholder="Password"
          type="password"
          error={validatePassword()}
        />

        <div className="grid grid-cols-2 gap-4 mt-10">
          <button
            onClick={handleLogin}
            className="bg-gray-light text-xs font-bold uppercase text-gray-darkest px-2 py-4 rounded-2xl shadow-form-btn hover:bg-orange hover:text-white hover:shadow-form-btn-hover transition duration-200 ease-in-out"
          >
            Log in
          </button>
          <button
            onClick={handleRegistration}
            className="bg-gray-light text-xs font-bold uppercase text-gray-darkest px-2 py-4 rounded-2xl shadow-form-btn hover:bg-orange hover:text-white hover:shadow-form-btn-hover transition duration-200 ease-in-out"
          >
            Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
