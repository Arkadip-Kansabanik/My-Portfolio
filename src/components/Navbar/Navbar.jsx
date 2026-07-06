function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Arkadip
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">

          <li className="hover:text-cyan-400 cursor-pointer">
            Home
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            About
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            Skills
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            Projects
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            Experience
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            Education
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            Contact
          </li>

        </ul>

        {/* Resume Button */}
        <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold text-black transition">
          Resume
        </button>

      </div>
    </nav>
  );
}

export default Navbar;