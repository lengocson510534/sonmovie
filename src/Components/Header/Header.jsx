import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

  const [hasMenu, setHasMenu] = useState(false)
  return (
    <header className="h-20 left-0 fixed bg-gradient-to-br from-[rgba(0,0,0,.7)] to-transparent top-0 w-full z-[100]">
      <div className="flex items-center justify-between px-5 md:max-w-7xl md:mx-auto h-full relative">
        <div>
          <h2 className="text-2xl text-red-600 uppercase font-black">sonmovie</h2>
        </div>
        <ul className={` ${hasMenu ? `left-0` : `-left-full`} transition-all ease-linear delay-300 absolute text-center top-20 bg-red-600 h-screen w-4/5 z-[99]  md:flex md:items-center md:gap-x-7 md:text-lg md:bg-transparent md:relative md:top-0 md:w-auto md:left-0 md:transition-none md:h-full md:font-semibold`}>
          <Link to={"/"}>
            <li className="py-5 md:hover:text-red-500"
              onClick={() => setHasMenu(!hasMenu)}
            >Home</li>
          </Link>
          <Link to={"/movie"}>
            <li className="py-5 md:hover:text-red-500"
              onClick={() => setHasMenu(!hasMenu)}
            >Movies</li>
          </Link>
          <Link to={"/tv"}>
            <li className="py-5 md:hover:text-red-500"
              onClick={() => setHasMenu(!hasMenu)}
            >TV Series</li>
          </Link>
          <li className="py-5 md:hover:text-red-500"
            onClick={() => setHasMenu(!hasMenu)}
          >Contact</li>
        </ul>
        <div className="flex items-center gap-x-5">
          <i className='bx bx-search text-2xl w-10 h-10 border-2 rounded-full md:flex items-center justify-center cursor-pointer hidden'></i>
          <i className='bx bx-bell text-2xl w-10 h-10 border-2 rounded-full md:flex items-center justify-center cursor-pointer hidden ' ></i>
          <i className='bx bxs-user text-2xl w-10 h-10 border-2 rounded-full md:flex items-center justify-center cursor-pointer hidden' ></i>
          <i className={`bx ${hasMenu ? `bx-x` : 'bx-menu'} text-2xl w-10 h-10 border-2 rounded-full flex items-center justify-center cursor-pointer md:hidden`}
            onClick={() => setHasMenu(!hasMenu)}></i>
        </div>
      </div>
    </header>
  );
}

export default Header