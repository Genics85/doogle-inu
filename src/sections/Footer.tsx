import nav_logo from "../assets/doogle_nav_logo.png";
import x_icon from "../assets/x_icon.svg";
import telegram_icon from "../assets/telegram_icon.svg";

function Footer() {
  return (
    <footer className="text-white pt-24  ">
      <div className="container p-4 mx-auto gap-5  text-[14px] lg:text-[16px] flex flex-col-reverse lg:flex-row w-full lg:items-center 2xl:px-0 justify-between">
        <div className="flex flex-col gap-2 ">
          <div className="logo flex items-center gap-2">
            <div className="size-[60px] rounded-full bg-[#A0968A] flex justify-center">
              <img className="h-[53px] " src={nav_logo} alt="" />
            </div>
            <p className="text-[24px] font-semibold text-nowrap 2xl:text-[28px]">
              DOOGLE INU
            </p>
          </div>
          <p className="">Get connected us on all social media platforms</p>
          <div className="flex gap-2">
            <a
              href="https://t.me/doogleinu"
              target="_blank"
              className="bg-black size-8 rounded-full flex items-center justify-center "
            >
              <img src={telegram_icon} alt="" />
            </a>
            <a
              href="https://twitter.com/doogleinu"
              target="_blank"
              className="bg-black size-8 rounded-full flex items-center justify-center "
            >
              <img src={x_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-white font-semibold text-center">
            Donation address for Doogle team:
          </p>
          <p>0x41c80fAff3288F8f8fcbC4283aF917f561e27BbA</p>
        </div>
        <div className="flex gap-12 text-[#d1cdcd] w-full lg:w-fit font-semibold">
          <div className="flex flex-col">
            <p className="mb-4 text-white font-bold">Products</p>
            <a
              href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x1D7db9F46cbcB1DA570a89bd36558c6DDFBa569D&chain=base"
              target="_blank"
            >
              Doogle Swap
            </a>
            <p>Doogle</p>
            <a href="mailto:doogleinu@gmail.com" target="_blank">
              Contact
            </a>
            <a href="https://medium.com/@doogleinu" target="_blank">
              Blog
            </a>
          </div>
          <div className="flex flex-col">
            <p className="mb-4 text-white font-bold">Useful links</p>
            <a href="https://medium.com/@doogleinu" target="_blank">
              Doogle Blog
            </a>
            <p>Doogle.io</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
