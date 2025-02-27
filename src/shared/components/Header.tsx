import logo from "../../assets/logo/logo.png";

const Header = () => {
  return (
    <header>
      <nav className="flex  justify-between items-center px-14 ">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <ul className="flex gap-10">
          <li className="bg-gradient-to-r cursor-pointer from-[#00FF99] to-[#0077CC] bg-clip-text text-transparent font-normal text-base">
            Home
          </li>
          <li className="text-white cursor-pointer font-normal text-base">
            VIP Club
          </li>
          <li className="text-white  cursor-pointer font-normal text-base">
            Contact us
          </li>
        </ul>
        <div>
          <button className="bg-gradient-to-t from-[#00FF99] to-[#0077CC] py-3 text-white font-semibold  px-8  shadow-[0px_10px_50px_0px_rgba(0,255,153,0.3)] rounded-3xl  cursor-pointer  ">
            Log in / Join
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
