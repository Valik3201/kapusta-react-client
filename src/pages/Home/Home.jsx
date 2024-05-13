import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import LoginForm from "../../components/LoginForm/LoginForm";
import cabbage from "../../assets/cabbage.svg";
import cabbage2 from "../../assets/cabbage-2.svg";

const Home = () => {
  return (
    <>
      <Header />

      <section className="bg-gray-light rounded-bl-[110px] w-full h-72 md:h-[526px] md:bg-desktop-cabbages bg-top-4 bg-no-repeat md:bg-175% lg:bg-100%">
        <div className="container mx-auto">
          <div className="flex justify-center lg:justify-end relative">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-end px-5 lg:pr-24  gap-[50px] md:gap-20 lg:gap-40 pt-[86px] md:pt-20 lg:pt-[117px]">
              <Logo />
              <LoginForm />
            </div>
          </div>

          <div className="md:pb-10">
            <div className="md:bg-desktop-cabbages-2 md:bg-no-repeat md:bg-top md:ml-24 lg:ml-56 md:-mt-10 lg:-mt-16 md:bg-100% md:h-[142px] md:w-[183px]"></div>
          </div>

          <img
            src={cabbage2}
            alt="Cabbage"
            className="absolute top-32 -right-4 w-20 h-24 ml-9 m-4 md:hidden"
          />

          <img
            src={cabbage}
            alt="Cabbage"
            className="w-20 h-24 ml-9 m-4 md:hidden"
          />
        </div>
      </section>
    </>
  );
};

export default Home;