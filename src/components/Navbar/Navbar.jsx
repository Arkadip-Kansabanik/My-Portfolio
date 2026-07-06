import { Link } from "react-scroll";
import portfolio from "../../data/portfolio";

function Navbar() {
  const menuItems = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "education",
    "contact",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-2xl font-bold text-cyan-400 cursor-pointer"
        >
          Arkadip
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">

          {menuItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-cyan-400"
                className="cursor-pointer capitalize hover:text-cyan-400 transition"
              >
                {item}
              </Link>
            </li>
          ))}

        </ul>

        {/* Resume */}

        <a
          href={portfolio.resume}
          download
          className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold text-black transition"
        >
          Resume
        </a>

      </div>
    </nav>
  );
}

export default Navbar;