import star from "../assets/star_polygon.svg";
import doogle_token_star from "../assets/doogle_token_star.png";
import dooglee_airdrop from "../assets/doogle_airdrop.png";
import dooglee_dao from "../assets/doogle_dao.png";
import metaverse_dogs from "../assets/metaverse_dogs.png";
import metaverse_dogs_mobile from "../assets/metaverse_dogs_mobile.png";
import forward_arrow from "../assets/forward_arrow.svg";
import dog_human_game from "../assets/dog_human_game.png";
import doogle_hospital from "../assets/doogle_hospital.png";
import doogle_education from "../assets/doogle_education.png";
import doogle_search_engine from "../assets/doogle_search_engine.png";
import doogle_wallet from "../assets/doogle_wallet.png";
import video from "../assets/doogle_vid.mp4";
import right_chevron from "../assets/right_chevron.svg";
import down_chevron from "../assets/chevron_down.svg";
import { useState } from "react";

import lotto from "../assets/lotto-partner.jpg";
import ether from "../assets/logo-ether-partner.svg";
import dexscreener from "../assets/dexscreener-partner.jpg";
import coingecko from "../assets/coingeck-partner.jpg";
import uniswap from "../assets/uniswap-partner.jpg";

type FAQ = {
  question: string;
  answer: string;
};

const FAQs: FAQ[] = [
  {
    question: "What is doogle",
    answer:
      "Doogle is a metaverse project that allows dog owners interact with their furry friends beyond the physical world. In the metaverse they can get to enjoy different perks and benefits. From Doogle search, Doogle education for dogs, to Doogle hospital for dogs. You get to enjoy a lot of benefits.",
  },
  {
    question: "How Do I get Started",
    answer:
      "To get started, you have to first buy the Doogle coin as this would let you access different services within the Doogle metaverse. After you have purchased your coins, get into the Doogle Metaverse straight away!",
  },
  {
    question: "What chain is doogle on?",
    answer:
      "For now, Doogle operates on the BASE ETH ( BASE Mainetwork). If there are plans for multichain progress an announcement will be made regarding that.",
  },
];

function DoogleInu() {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  const handleFaqSelection = (index: number) => {
    if (index == selectedFaq) {
      setSelectedFaq(null);
      return;
    }
    setSelectedFaq(index);
  };

  return (
    <div className=" bg-[#030600] pt-8 ">
      <div className="container p-4 mx-auto flex flex-col">
        {/* Doogle Inu Tokens */}
        <div className="doogle-tokens z-10 flex flex-col gap-6">
          <h3 className="main-header">DoogleInu Tokens</h3>
          <div className="flex gap-7 lg:gap-5 flex-col lg:flex-row">
            <div className="bg-[#1a1f2e] w-full rounded-lg flex flex-col gap-4 p-5">
              <div className="flex gap-2 items-center self-center">
                <div className="relative">
                  <img src={star} alt="" />
                  <div className="absolute top-0 flex items-center justify-center w-full h-full">
                    <img className="" src={doogle_token_star} alt="" />
                  </div>
                </div>
                <p className="font-bold text-[24px] text-white">DOOGLE TOKEN</p>
              </div>
              <p className="leading-[30px] font-light text-[#d9d9d9]">
                In the heart of the Doogle Metaverse beats the Doogle Token, a
                revolutionary force that pulses with the rhythm of innovation
                and progress. Who wouldn’t want to be part of this? No one, of
                course! This token is not just a piece of digital currency; it's
                the lifeblood that fuels the entire ecosystem for you Dooglers!
                So be happy.
              </p>
              <div className="flex h-full justify-end gap-3 flex-col text-white font-semibold mt-5">
                <a
                  href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x1D7db9F46cbcB1DA570a89bd36558c6DDFBa569D&chain=base"
                  target="_blank"
                  className="bg-[#f06e10] flex items-center justify-center gap-2 h-[48px] w-full rounded-full text-[14px] lg:text-[16px]"
                >
                  Buy Doogle token on Uniswap <img src={forward_arrow} alt="" />
                </a>
                <button
                  onClick={() => {
                    window.open("https://t.me/DoogleBaseBot", "_blank");
                  }}
                  className="bg-[#122252] flex items-center justify-center gap-2 h-[48px] w-full rounded-full text-[14px] lg:text-[16px]"
                >
                  Quick Buy Doogle token by Doogle Bot
                </button>
                <button
                  onClick={() => {
                    window.open(
                      "https://dexscreener.com/base/0x3c1588fb92f3e4bdd0800a518fa18496792a8030",
                      "_blank"
                    );
                  }}
                  className="gradient-button h-[48px] w-full rounded-full text-[14px] lg:text-[16px]"
                >
                  View Doogle token on Dexscreener
                </button>
              </div>
            </div>
            <div
              id="airdrop"
              className="bg-[#1a1f2e] w-full rounded-lg flex flex-col gap-4 p-5"
            >
              <div className="flex gap-2 items-center self-center">
                <div className="relative">
                  <img src={star} alt="" />
                  <div className="absolute top-0 flex items-center justify-center w-full h-full">
                    <img className="" src={dooglee_airdrop} alt="" />
                  </div>
                </div>
                <p className="font-bold text-[24px] text-white">
                  DOOGLE AIRDROP
                </p>
              </div>
              <p className="leading-[30px] font-light text-[#d9d9d9]">
                It's a testament to the generosity and inclusivity at the core
                of the Doogle ethos, and this is because Dooglers like you make
                a huge difference! The Doogle Airdrop marks a pivotal step in
                the evolution of the Doogle Metaverse. So, Dooglers! Come get a
                share out of our airdrop program.
                <br />
                <br />
              </p>
              <div className="flex gap-3 flex-col text-white font-semibold mt-5">
                <a
                  href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x1D7db9F46cbcB1DA570a89bd36558c6DDFBa569D&chain=base"
                  target="_blank"
                  className="bg-[#f06e10] flex items-center justify-center gap-2 h-[48px] w-full rounded-full text-[14px] lg:text-[16px]"
                >
                  Buy Doogle token on Uniswap <img src={forward_arrow} alt="" />
                </a>
                <button
                  onClick={() => {
                    window.open("https://t.me/DoogleBaseBot", "_blank");
                  }}
                  className="bg-[#122252] flex items-center justify-center gap-2 h-[48px] w-full rounded-full text-[14px] lg:text-[16px]"
                >
                  Quick Buy Doogle token by Doogle Bot
                </button>
                <button className="gradient-button h-[48px] w-full rounded-full text-[14px] lg:text-[16px]">
                  View Airdrop on Coingecko
                </button>
              </div>
            </div>
            <div className="bg-[#1a1f2e] w-full rounded-lg flex flex-col gap-4 p-5">
              <div className="flex gap-2 items-center self-center">
                <div className="relative">
                  <img src={star} alt="" />
                  <div className="absolute top-0 flex items-center justify-center w-full h-full">
                    <img className="" src={dooglee_dao} alt="" />
                  </div>
                </div>
                <p className="font-bold text-[24px] text-white">DOOGLE DAO</p>
              </div>
              <p className="leading-[30px] font-light text-[#d9d9d9]">
                Doogle DAO, the essence of true democracy, thrives. This
                autonomous organization represents the pinnacle of decentralized
                governance, where every Doogler like you has a voice and a vote.
                The Doogle DAO is a beacon of hope, showcasing how blockchain
                technology can empower the Doogler community to make collective
                decisions.
              </p>
              <div className="flex gap-3 flex-col text-white font-semibold mt-5 ">
                <a
                  href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x1D7db9F46cbcB1DA570a89bd36558c6DDFBa569D&chain=base"
                  target="_blank"
                  className="bg-[#f06e10] flex items-center justify-center gap-2 h-[48px] w-full rounded-full text-[14px] lg:text-[16px]"
                >
                  Buy Doogle token on Uniswap <img src={forward_arrow} alt="" />
                </a>
                <button
                  onClick={() => {
                    window.open("https://t.me/DoogleBaseBot", "_blank");
                  }}
                  className="bg-[#122252] flex items-center justify-center gap-2 h-[48px] w-full rounded-full text-[14px] lg:text-[16px]"
                >
                  Quick Buy Doogle token by Doogle Bot
                </button>
                <button className="gradient-button h-[48px] w-full rounded-full text-[14px] lg:text-[16px]">
                  Coming soon!!!
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Doogle Metaverse */}
        <div
          id="dooglemetaverse"
          className="relative doogle-metaverse gap-7 flex flex-col pt-8 items-center justify-center"
        >
          <div className=" absolute opacity-10 size-[700px] -top-36 left-1/2 -translate-x-1/2  blur-md radial-gradient-pink"></div>
          <h3 className="main-header">
            Doogle <span className="gradient-text">Metaverse</span>
          </h3>
          <p className="main-paragraph lg:w-[70%]">
            Dive into the whimsical wonderland of Doogle World, where the
            ordinary becomes extraordinary, and the impossible turns into pure,
            unadulterated fun We're not just building an ecosystem here; oh no,
            we're concocting a magical elixir of brilliance!
          </p>
          <div className="w-full relative hidden items-center justify-center lg:flex pt-10">
            <img src={metaverse_dogs} alt="" />
            <div className="z-10 opacity-10 hidden lg:block size-[600px] top-1/4 left-1/2 -translate-x-1/2  blur-md absolute radial-gradient-pink"></div>
          </div>
          <div className="w-full flex items-center pt-16 justify-center lg:hidden">
            <img src={metaverse_dogs_mobile} alt="" />
          </div>
          <button
            onClick={() => {
              window.open("https://t.me/doogleinu", "_blank");
            }}
            className="main-button z-20"
          >
            Go to Metaverse <img src={forward_arrow} alt="" />
          </button>
          <div className="flex flex-col mt-5 gap-3">
            <video className="h-[400px]" loop autoPlay muted>
              <source src={video} type="video/mp4" />
            </video>
            <p style={{ fontStyle: "italic" }} className="text-white italic">
              "DOOGLE CHADS Female Dog Art. She created this as a nanny for her
              children. The Doogle family has a group of talented and creative
              women."
            </p>
          </div>
        </div>

        {/* Doogle platform services */}
        <div
          id="platformservices"
          className="flex items-center flex-col gap-7 pt-24"
        >
          <h3 className="main-header">Doogle platform services</h3>
          <p className="main-paragraph lg:w-[90%] ">
            Welcome to the Doogle Platform, a digital playground where
            imagination runs wild and innovation dances to the rhythm of
            laughter and joy. Here, we're not just crafting services; we're
            weaving a tapestry of experiences that blend the thrill of discovery
            with the warmth of connection for all Dooglers. Here we turn every
            interaction into a memorable adventure for all Dooglers!
          </p>
          <div className="flex flex-col lg:flex-row gap-6 w-full items-center justify-center">
            <div className="flex items-center flex-col gap-3">
              <img src={dog_human_game} alt="" />
              <p className="text-[26px] text-[#cafc01] ibm-plex-mono">
                Doogle Game
              </p>
            </div>
            <div className="flex items-center flex-col gap-3">
              <img src={doogle_hospital} alt="" />
              <p className="text-[26px] text-[#0addfa] ibm-plex-mono">
                Doogle Hospital
              </p>
            </div>
            <div className="flex items-center flex-col gap-3">
              <img src={doogle_education} alt="" />
              <p className="text-[26px] text-[#f06e10] ibm-plex-mono">
                Doogle Education
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              window.open(
                "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x1D7db9F46cbcB1DA570a89bd36558c6DDFBa569D&chain=base",
                "_blank"
              );
            }}
            className="main-button"
          >
            Buy $DOOGLE <img src={forward_arrow} alt="" />
          </button>
        </div>
        {/* Doogle search engine */}
        <div className="flex items-center flex-col lg:flex-row rounded-lg py-10 px-4 lg:px-10 gap-10 bg-[#1a1f2e] mt-20">
          <div className="flex flex-col gap-5">
            <p className="text-[26px] lg:text-[36px] text-center lg:text-start text-white font-semibold">
              Doogle <span className="gradient-text">Search engine</span>
            </p>
            <p className="leading-[30px] font-light text-white">
              In the vast expanse of the Doogle Metaverse, information is king,
              and the Doogle Search Engine reigns supreme. This isn't just a
              tool for finding answers; it's a compass guiding you Dooglers
              through the labyrinthine corridors of the digital world,
              illuminating paths to knowledge, connections, and opportunities
              that were previously hidden in the shadows.
            </p>
            <div className="hidden lg:block">
              <button
                onClick={() => {
                  window.open(
                    "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x1D7db9F46cbcB1DA570a89bd36558c6DDFBa569D&chain=base",
                    "_blank"
                  );
                }}
                className=" main-button lg:flex self-start"
              >
                Buy $DOOGLE <img src={forward_arrow} alt="" />
              </button>
            </div>
          </div>
          <img src={doogle_search_engine} alt="" />
          <button
            onClick={() => {
              window.open(
                "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x1D7db9F46cbcB1DA570a89bd36558c6DDFBa569D&chain=base",
                "_blank"
              );
            }}
            className="px-3 mt-4 flex lg:hidden self-center font-semibold gap-2 text-[24px] lg:self-start text-white rounded-full py-4 bg-[#f06e10]"
          >
            Buy $DOOGLE <img src={forward_arrow} alt="" />
          </button>
        </div>
        {/* Doogle wallet */}
        <div className="flex flex-col-reverse items-center lg:flex-row rounded-lg py-10 px-6 gap-10 bg-[#1a1f2e] mt-20 ">
          <div className="flex flex-col gap-7">
            <img src={doogle_wallet} alt="" />
            <button
              onClick={() => {
                window.open(
                  "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x1D7db9F46cbcB1DA570a89bd36558c6DDFBa569D&chain=base",
                  "_blank"
                );
              }}
              className="px-3 flex lg:hidden font-semibold gap-2 text-[24px] self-center lg:self-start text-white rounded-full py-4 bg-[#f06e10]"
            >
              Buy $DOOGLE <img src={forward_arrow} alt="" />
            </button>
          </div>

          <div className="flex flex-col gap-5 lg:w-1/2">
            <p className="text-[26px] lg:text-[36px] text-center lg:text-start text-white font-semibold">
              Doogle <span className="gradient-text">Wallet</span>
            </p>
            <p className="leading-[30px] font-light text-white">
              Imagine this: You're standing at the threshold of a canine galaxy
              filled with digital gold, waiting for the moment to dive in.
              That's exactly what awaits you with the Doogle Wallet – a cosmic
              treasure chest that's not just a storage unit but a gateway to the
              universe of digital wealth. So, buckle up Dooglers! because with
              Doogle Wallet, you're not just storing value.
            </p>
            <button
              onClick={() => {
                window.open(
                  "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x1D7db9F46cbcB1DA570a89bd36558c6DDFBa569D&chain=base",
                  "_blank"
                );
              }}
              className="main-button self-start"
            >
              Buy $DOOGLE <img src={forward_arrow} alt="" />
            </button>
          </div>
        </div>
        {/* Partners */}
        <div className="container mx-auto pt-20 flex flex-col gap-7">
          <h3 className="main-header">Partners</h3>

          <div className=" grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="bg-white flex items-center justify-center p-1">
              <img src={lotto} alt="" />
            </div>
            <div className="bg-white flex items-center justify-center p-1">
              <img src={dexscreener} alt="" />
            </div>
            <div className="bg-white flex items-center justify-center p-1">
              <img src={ether} alt="" />
            </div>
            <div className="bg-white flex items-center justify-center p-1">
              <img src={coingecko} alt="" />
            </div>
            <div className="bg-white flex items-center justify-center p-1">
              <img src={uniswap} alt="" />
            </div>
          </div>
        </div>
        {/* Frequently Asked Questions */}
        <div
          id="faqs"
          className="flex flex-col gap-7 justify-center items-center pt-24"
        >
          <p className="main-header">
            Frequently Asked <span className="gradient-text">Questions</span>
          </p>
          <p className="leading-[24px] w-full md:w-3/5 text-[#d1cdcd]">
            For Dooglers who have got questions get to see your frequently asked
            questions answered here in this section. Have questions you want
            answered? Then dive in!
          </p>
          <div id="FAQ" className="flex flex-col gap-4 w-full md:w-3/5">
            {FAQs.map((fa, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    handleFaqSelection(i);
                  }}
                  className={`flex text-[#d1cdcd] w-full flex-col gap-2 `}
                >
                  <div className=" flex rounded-sm justify-between items-center w-full bg-[#232228] px-6 py-3">
                    <h3 className=" font-semibold">{fa.question}</h3>
                    <div>
                      <img
                        src={selectedFaq == i ? down_chevron : right_chevron}
                        alt=""
                      />
                    </div>
                  </div>
                  <p
                    className={`${selectedFaq == i ? "" : "hidden"} text-start`}
                  >
                    {fa.answer}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoogleInu;
