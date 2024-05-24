import { NavLink } from "react-router-dom";
import nav_logo from "../assets/doogle_nav_logo.png";
import x_icon from "../assets/x_icon.svg";
import telegram_icon from "../assets/telegram_icon.svg";
import burger_menu from "../assets/burger_menu.svg";
import { useRef, useState } from "react";

function NavigationBar() {
  const [mobile, setMobile] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setMobile(false));

  return (
    <nav className="relative p-4 w-full font-bold text-[14px] bg-gray-200 bg-opacity-5">
      <div className=" flex px-4 gap-12 items-center justify-between md:justify-between">
        <div className="logo flex items-center gap-2">
          <div className="size-12 rounded-full bg-[#A0968A] flex justify-center">
            <img className="h-[40px]" src={nav_logo} alt="" />
          </div>
          <p className="lg:text-[22px]">DOOGLE INU</p>
        </div>
        <ul className=" gap-4 hidden lg:flex ">
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="home"
            onClick={() => {
              window.scrollTo({
                //@ts-ignore
                top: document.querySelector("#home").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="doogle-swap"
          >
            Doogle Swap
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="doogle-ecosystem"
            onClick={() => {
              window.scrollTo({
                //@ts-ignore
                top: document.querySelector("#platformservices").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            Doogle Ecosystem
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="doogle-chain"
          >
            Doogle Chain
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="doogle-metaverse"
            onClick={() => {
              window.scrollTo({
                //@ts-ignore
                top: document.querySelector("#dooglemetaverse").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            Doogle Metaverse
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="Airdrop"
            onClick={() => {
              window.scrollTo({
                //@ts-ignore
                top: document.querySelector("#airdrop").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            Airdrop <span className="gradient-text">(new)</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="buy-doogle"
            onClick={() => {
              window.open(
                "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x1D7db9F46cbcB1DA570a89bd36558c6DDFBa569D&chain=base",
                "_blank"
              );
            }}
          >
            Buy Doogle
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="FAQs"
            onClick={() => {
              window.scrollTo({
                //@ts-ignore
                top: document.querySelector("#faqs").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            FAQs
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="blogs"
            onClick={() => {
              window.open("https://medium.com/@doogleinu", "_blank");
            }}
          >
            Blogs
          </NavLink>
        </ul>
        <div className="lg:hidden" onClick={() => setMobile(true)}>
          <img src={burger_menu} alt="" />
        </div>
        <div className="socials hidden lg:flex gap-4">
          <a
            href="https://twitter.com/doogleinu"
            target="_blank"
            className="size-8 p-1 rounded-full bg-[#f06e10]"
          >
            <div className="bg-[#eb853b] w-full h-full rounded-full flex items-center justify-center ">
              <img src={x_icon} alt="" />
            </div>
          </a>
          <a
            href="https://twitter.com/doogleinu"
            target="_blank"
            className="size-8 p-1 rounded-full bg-[#f06e10]"
          >
            <div className="bg-[#eb853b] w-full h-full rounded-full flex items-center justify-center ">
              <img src={telegram_icon} alt="" />
            </div>
          </a>
        </div>
      </div>
      <div
        className={`absolute lg:hidden top-0 left-0 w-full ${
          mobile ? "flex" : "hidden"
        } flex-col p-4 bg-black`}
        ref={ref}
      >
        <ul className="relative gap-4 flex flex-col ">
          <button
            onClick={() => setMobile(false)}
            className="absolute text-xl top-2 right-2"
          >
            X
          </button>
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="home"
            onClick={() => {
              window.scrollTo({
                //@ts-ignore
                top: document.querySelector("#home").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="doogle-swap"
          >
            Doogle Swap
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="doogle-ecosystem"
            onClick={() => {
              window.scrollTo({
                //@ts-ignore
                top: document.querySelector("#platformservices").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            Doogle Ecosystem
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="doogle-chain"
          >
            Doogle Chain
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="doogle-metaverse"
            onClick={() => {
              window.scrollTo({
                //@ts-ignore
                top: document.querySelector("#dooglemetaverse").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            Doogle Metaverse
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="Airdrop"
            onClick={() => {
              window.scrollTo({
                //@ts-ignore
                top: document.querySelector("#airdrop").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            Airdrop <span className="gradient-text">(new)</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="buy-doogle"
            onClick={() => {
              window.open(
                "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x1D7db9F46cbcB1DA570a89bd36558c6DDFBa569D&chain=base",
                "_blank"
              );
            }}
          >
            Buy Doogle
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="FAQs"
            onClick={() => {
              window.scrollTo({
                //@ts-ignore
                top: document.querySelector("#faqs").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            FAQs
          </NavLink>
          <NavLink
            onClick={() => {
              window.open("https://medium.com/@doogleinu", "_blank");
            }}
            className={({ isActive }) => (isActive ? "gradient-text" : "")}
            to="blogs"
          >
            Blogs
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;

import { useEffect, RefObject } from "react";

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  onClickOutside: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }
    // Bind
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}
