import banner_star from "../assets/banner_star.svg";

function HeadBanner() {
  return (
    <div className="hidden lg:block bg-[#1a1f2e] w-full">
      <div className=" container mx-auto px-4 flex justify-between w-full ">
        <div className="flex gap-2 ">
          <p className=" text-nowrap">I am a doogle</p>
          <img src={banner_star} alt="" />
        </div>
        <div className="flex gap-2 ">
          <p className=" text-nowrap">I am a meme doogler</p>
          <img src={banner_star} alt="" />
        </div>
        <div className="flex gap-2 ">
          <p className=" text-nowrap">I am a meme doogleinu</p>
          <img src={banner_star} alt="" />
        </div>
        <div className="flex gap-2 ">
          <p className=" text-nowrap">Go go to the moon</p>
          <img src={banner_star} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeadBanner;
