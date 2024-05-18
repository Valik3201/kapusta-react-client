import LoginForm from "../../components/LoginForm/LoginForm";
import Background from "../../components/Background/Background";


const Home = () => {
  return (
    <>
          <div className="flex justify-center lg:justify-end relative">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-end px-5 lg:pr-24  gap-[50px] md:gap-20 lg:gap-40 pt-[86px] md:pt-20 lg:pt-[117px]">
              <Background/>
              <LoginForm />
            </div>
          </div>
    </>
  );
};

export default Home;
