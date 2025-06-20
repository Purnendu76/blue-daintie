import Image from "next/image";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <div >
      <header className="max-w-screen-xl  mx-auto px-6 sm:px-10 py-3 flex justify-between items-center text-gray-500 text-sm select-none">
        <div className="flex items-center space-x-3">
          <span>+01234 567 890</span>
          <span className="w-px h-4 bg-gray-400"></span>
          <span>Kolkata</span>
          
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-6 sm:px-10 relative">
        <nav className="flex items-center justify-between py-6 relative">
          {/* Left: Logo */}
          <div className="flex items-center space-x-6 z-10">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Blue Dentist logo"
                className="w-[150px] h-[60px] object-contain"
                width={150}
                height={60}
              />
            </Link>
          </div>

          {/* Center: Menu */}
          <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 font-semibold text-sm text-black z-0">
            <li>
              <Link href="/" className="text-blue-500 font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/Services" className="hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="/page" className="hover:text-blue-500">
                Page
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-blue-500">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Right: Appointment Info */}
          <div className="hidden md:flex flex-col items-end space-y-2 z-10">
            <div className="flex items-center text-xs text-white px-3 py-1 rounded">
              <i className="far fa-calendar-alt mr-2"></i>
              <span >Mon - Sat: 9 am - 11:30 pm</span>
            </div>
            <button
              type="button"
              className="bg-white text-black font-semibold rounded-md px-6 py-2 hover:shadow-md transition"
            >
              Make an Appointment
            </button>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default HeaderSection;
