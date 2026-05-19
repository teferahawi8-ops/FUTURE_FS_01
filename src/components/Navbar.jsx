import { useState } from "react"
import { FaSun, FaMoon, FaGithub, FaBars, FaTimes } from "react-icons/fa"
import { Download } from "lucide-react"

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-black text-white px-8 py-5 flex justify-between items-center border-b border-gray-800 sticky top-0 z-50">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-500">
        Hawi
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>

      {/* Right Side Actions (Desktop) */}
      <div className="hidden md:flex items-center gap-4">

        {/* CV Button */}
        <a
          href="/cv.pdf"
          download="Hawi_Tefera_CV.pdf"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
        >
          <Download size={18} />
          CV
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/teferahawi8-ops"
          target="_blank"
          className="text-2xl hover:text-blue-500"
        >
          <FaGithub />
        </a>

        {/* Dark Mode Toggle */}
        <div
          className="text-2xl cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>

      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-6 py-10 md:hidden border-t border-gray-800">

          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          {/* CV Button Mobile */}
          <a
            href="/cv.pdf"
            download="Hawi_Tefera_CV.pdf"
            className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg"
          >
            <Download size={18} />
            Download CV
          </a>

        </div>
      )}

    </nav>
  )
}

export default Navbar