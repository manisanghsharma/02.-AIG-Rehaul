import {FaGithub} from 'react-icons/fa'
import useWindowSize from '../hooks/useWindowSize.js'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const {width} = useWindowSize();
  return (
    <div className="p-5 w-full h-[80px] bg-[#1b1b1b] flex justify-between items-center">
      <h1 className="flex items-center text-4xl sm:text-5xl font-semibold text-white">
        <img
          className="w-[45px] sm:w-[50px] mr-3 relative bottom-1"
          src="src/assests/robot.png"
        />
        ImaginAI
      </h1>
      {width > 900 ? (
        <>
          <ul className="flex gap-7 text-[18px] cursor-pointer text-white max-md:hidden">
            <Link to={"/about"}>
              <li className="hover:text-[crimson] hover:scale-110 transition-all">
                About
              </li>
            </Link>
            <Link to={'/team'}>
              <li className="hover:text-[crimson] hover:scale-110 transition-all">
                Team
              </li>
            </Link>
            <Link to={'/contact-us'}>
              <li className="hover:text-[crimson] hover:scale-110 transition-all">
                Contact Us
              </li>
            </Link>
          </ul>
          <button onClick={() => window.open("https://www.github.com/manisanghsharma")} className="flex items-center gap-2 text-white text-xl px-6 py-3 bg-[#0A0909] rounded-lg border-2 border-[#0A0909] hover:border-[crimson] hover:scale-105 transition-all max-md:hidden">
            <FaGithub />
            Checkout on Github
          </button>
        </>
      ) : (
        <FaBars className="cursor-pointer text-4xl" />
      )}
    </div>
  );
}
export default Header