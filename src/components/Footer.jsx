import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div
        className="
          max-w-6xl mx-auto
          flex flex-col gap-4
          md:flex-row md:items-center md:justify-between
        "
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold whitespace-nowrap text-center md:text-left">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Mamudou
          </span>{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Saho
          </span>
        </h2>

        <div className="flex justify-center gap-4">
          <a
            href="https://www.facebook.com/share/1Z9oWjMSAw/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/mamudousaho84?igsh=cDNia3dlbzhnY283&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/mamudou-saho-662389280?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/mamudoudaho2003?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-sky-500 transition"
          >
            <FaTwitter />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-gray-400 text-center md:text-right whitespace-nowrap">
          © {new Date().getFullYear()} Mamudou Saho. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
