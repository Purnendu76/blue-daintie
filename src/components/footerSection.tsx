import Image from "next/image";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';

const FooterSection = () => {
  return (
    <div className="bg-[#000A2D] text-white">
      <footer>
        <div className="max-w-7xl mx-auto px-6 py-10 md:flex md:justify-between md:space-x-20 ">
          {/* Column 1: Logo + Description */}
          <div className="md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Blue Dentist logo"
                className="w-[150px] h-[60px] object-contain"
                width={150}
                height={60}
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex space-x-6 text-lg">
              <a aria-label="Facebook" className="hover:text-pink-500" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a aria-label="Twitter" className="hover:text-pink-500" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a aria-label="WhatsApp" className="hover:text-pink-500" href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Helpful Links */}
          <div className="md:w-1/5 mt-10 md:mt-0">
            <h3 className="text-lg font-semibold border-b-2 border-pink-500 inline-block pb-1">
              Helpful Link
            </h3>
            <ul className="mt-4 space-y-2 text-sm font-normal">
              <li><a className="hover:text-pink-500" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-pink-500" href="#">Support</a></li>
              <li><a className="hover:text-pink-500" href="#">FAQ</a></li>
              <li><a className="hover:text-pink-500" href="#">Terms &amp; Conditions</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="md:w-1/5 mt-10 md:mt-0">
            <h3 className="text-lg font-semibold border-b-2 border-pink-500 inline-block pb-1">
              Support
            </h3>
            <ul className="mt-4 space-y-2 text-sm font-normal px-2">
              <li><a className="" href="#">Privacy Policy</a></li>
              <li><a className="" href="#">Support</a></li>
              <li><a className="" href="#">FAQ</a></li>
              <li><a className="" href="#">Terms &amp; Conditions</a></li>
            </ul>
          </div>

          {/* Column 4: Contact + Form */}
          <div className="md:w-1/4 mt-10 md:mt-0">
            <h3 className="text-lg font-semibold border-b-2 border-pink-500 inline-block pb-1 mb-4">
              Contact Us
            </h3>
            <form className="flex max-w-xs">
              <input
                type="email"
                placeholder="Your Email Address..."
                className="flex-grow rounded-l-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
              <button
                type="submit"
                className="bg-[#FF657C] text-white text-sm font-medium px-5 rounded-r-md hover:bg-pink-600 transition-colors duration-300 "
              >
                SignUp
              </button>
            </form>
            <div className="mt-6 text-sm font-normal space-y-2">
              <p>Kolkata, 700102</p>
              <p>+01234 567 890</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs font-normal space-y-4 md:space-y-0">
            {/* Left: Logo + Label */}
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Footer Logo"
                width={30}
                height={30}
                className="object-contain"
              />
              <span>Dental</span>
            </div>

            {/* Right: Copyright */}
            <span>Copyright © 2025. All rights reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
