import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";

const NavBarItem = ({ title, classProps, children }) => (
  <li className={`mx-4 cursor-pointer ${classProps}`}>
    {title === "Tutorials" ? (
      <a
        href="https://youtu.be/gyMwXuJrbJQ?feature=shared"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    ) : title === "Market" ? (
      <a href="https://etherscan.io/" target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    ) : title === "Exchange" ? (
      <a
        href="https://beincrypto.com/convert/inr-to-ethereum/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    ) : title === "Login" ? null : (
      children || title
    )}
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const handleMenuToggle = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="Logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} classProps="my-2 text-lg" />
        ))}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={handleMenuToggle}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={handleMenuToggle}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={handleMenuToggle} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classProps="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
