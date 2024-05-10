import "./index.css";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <>
      <Header />

      <section className="bg-gray-light rounded-bl-[110px] w-full h-[526px] lg:bg-desktop-cabbages bg-top-4 bg-no-repeat bg-100%">
        <div className="container mx-auto">
          <div className="flex items-center justify-end pr-24 w-full gap-40 pt-[117px]">
            <Logo />
            <LoginForm />
          </div>

          <div className="pb-10">
            <div className="lg:bg-desktop-cabbages-2 bg-no-repeat bg-top ml-56 -mt-16 bg-100% h-[142px] w-[183px]"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
