import { useState } from "react";
import bookmarkLogo from "../assets/logo-bookmark.svg";
import bookmarkFooter from "../assets/logo-bookmark-footer.svg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between align-middle items-center relative opacity-90  mx-auto p-6">
      {isOpen ? (
        <img
          src={bookmarkFooter}
          alt="logo"
          className="aspect-auto opacity-100 z-20 "
        />
      ) : (
        <img
          src={bookmarkLogo}
          alt="Logo"
          className=" aspect-auto opacity-100 "
        />
      )}

      {/* mobile - view */}
      {isOpen ? (
        <div>
          <button
            className="fixed top-7 right-10 z-50 md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-4 h-0.5 absolute bg-amber-100 -rotate-45"></div>
            <div className="w-4 h-0.5 absolute bg-amber-100 rotate-45"></div>
          </button>
          <div className="fixed flex flex-col gap-4 justify-center text-white left-0 top-0 w-dvw h-dvh bg-veryDarkBlue z-0">
            <button className="hover:text-red-500">Features</button>
            <button className="hover:text-red-500">DownLoad</button>
            <button className="hover:text-red-500">FAQ</button>
            <button className="hover:text-red-500">Login</button>
          </div>
        </div>
      ) : (
        <button
          className="Hamburger absolute right-8 flex flex-col gap-1 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="Hamburger-top w-4 h-0.5 bg-black"></div>
          <div className="Hamburger-middle w-4 h-0.5 bg-black"></div>
          <div className="Hamburger-bottom w-4 h-0.5 bg-black"></div>
        </button>
      )}

      <div className="hidden md:flex gap-8 align-middle ">
        <button>Features</button>
        <button>Download</button>
        <button>FAQ</button>
        <button className="bg-[#FF4C4C] text-amber-50 px-2 py-1 rounded-md hover:text-[#FF4C4C] hover:bg-white hover:border hover:border-[#FF4C4C] ">
          Login
        </button>
      </div>
    </div>
  );
}

export default NavBar;
