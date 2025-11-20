import heroImg from "../assets/illustration-hero.svg";
import ButtonCompBlue from "./ButtonCompBlue";
export default function HeroSection() {
  return (
    <div className="py-6 flex items-center flex-col lg:h-[50%] lg:flex-row-reverse lg:items-center h-dvh md:h-1/2 overflow-x-hidden ">
      <div className="w-[85%] lg:w-1/2 p-5 lg:relative overflow-y-visible">
        <img
          src={heroImg}
          alt="illustration-hero"
          className="lg:absolute top-0  z-30"
        />
        <div className="hidden lg:block h-60 w-screen bg-[#4678ec] rounded-b-full"></div>
      </div>

      <div className="flex flex-col gap-6 text-center h-full lg:w-1/2 lg:self-start lg:text-start ">
        <text className="text-3xl font-bold lg:text-7xl">
          A Simple Bookmark Manager
        </text>
        <text className="text-gray-500 font-semibold m-4 lg:text-4xl">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </text>
        <div className="flex gap-3 items-center justify-center">
          <ButtonCompBlue text={"Get It On Chrome"} />

          <button className="px-3.5 py-2.5 rounded bg-[#bec0c2] text-black hover:border hover:border-[#bec0c2] hover:bg-white ">
            Get it on Firefox
          </button>
        </div>
      </div>
    </div>
  );
}
