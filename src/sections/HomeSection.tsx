import home_bg from "../assets/home_bg.png";
import NavigationBar from "../components/NavigationBar";
import hero_img from "../assets/doogle_hero_img.png";
import HeadBanner from "../components/HeadBanner";

function HomeSection() {
  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: `url('${home_bg}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    minHeight: "100vh",
    width: "100%",
    zIndex: "-1",
  };

  return (
    <div id="home" className="" style={backgroundImageStyle}>
      <div className=" text-white flex flex-col h-full ">
        <HeadBanner />
        <NavigationBar />
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="container mt-5 mx-auto flex items-center justify-center  ">
            <img className=" size-[250px] lg:size-[350px]" src={hero_img} alt="" />
          </div>
          <div className="container p-3 mx-auto flex flex-col items-center gap-5 justify-center">
            <p className=" text-[30px] font-bold lg:text-[50px] text-center lg:leading-[50px]">
              Welcome to the <span className="text-[#cafc01]">Virtual</span>{" "}
              <br /> world of <span className="text-[#f06e10]">Doogle</span>
            </p>
            <p className="text-[16px] lg:text-[20px] leading-[17.6px] md:leading-[30px] w-full md:w-4/5 text-center ">
              <span className="text-[#cafc01] text-[24px] font-semibold">
                $DOOGLE
              </span>{" "}
              is a dog meme coin. As Dooglers, you get to experience a world where
              humans and dogs become completely one. Transform into one with
              your dog
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
