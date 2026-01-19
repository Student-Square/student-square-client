"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Search, Sun, Moon, X, Users, Target, FileText, Heart, MapPin, Eye, Briefcase, Globe, BookOpen, Calendar, Award, Building, Handshake } from "lucide-react";
import menuData from "./menuData";

const Header = () => {

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // Theme management using next-themes
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [donateRipple, setDonateRipple] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const [openSubIndex, setOpenSubIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
      setOpenSubIndex(-1);
    } else {
      setOpenIndex(index);
      setOpenSubIndex(-1);
    }
    // Keep navbar open on mobile when clicking submenu
    setNavbarOpen(true);
  };
  
  const handleSubSubmenu = (subIndex: number) => {
    if (openSubIndex === subIndex) {
      setOpenSubIndex(-1);
    } else {
      setOpenSubIndex(subIndex);
    }
    // Keep navbar open on mobile when clicking sub-submenu
    setNavbarOpen(true);
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-[#131B4C]/80  shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container max-w-[1600px] ">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 min-w-[clamp(140px,17vw,195px)] sm:min-w-[clamp(140px,18vw,200px)] lg:min-w-[clamp(160px,20vw,220px)] xl:min-w-[clamp(150px,18vw,210px)] 2xl:min-w-[clamp(140px,16vw,200px)]">
              <Link href="/" className="block w-full py-4 lg:py-4">
                <Image
                  alt="Logo"
                  width={520}
                  height={70}
                  className="block w-full logo-float min-h-[clamp(34px,6vw,54px)] sm:min-h-[clamp(35px,6vw,55px)] lg:min-h-[clamp(40px,7vw,60px)] xl:min-h-[clamp(38px,6.5vw,58px)] 2xl:min-h-[clamp(36px,6vw,56px)] object-contain"
                  src="/images/logo/ss_logo.png"
                  style={{ color: 'transparent' }}
                />
              </Link>
            </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={navbarToggleHandler}
              className="ring-primary absolute top-1/2 right-2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden z-50"
                  aria-label="navbarOpen"
                  name="navbarOpen"
                >
                  {navbarOpen ? (
                    <X className="h-6 w-6 text-black dark:text-white" />
                  ) : (
                    <>
                      <span className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
                      <span className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
                      <span className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
                    </>
                  )}
                </button>

            {/* Mobile Drawer Overlay */}
            {navbarOpen && (
              <div
                className="fixed inset-0 bg-black/40 backdrop-blur-[1px] lg:hidden"
                onClick={() => setNavbarOpen(false)}
              />
            )}

            {/* Navigation Menu - Centered / Drawer on <xl */}
            <div className="flex w-full items-center justify-center px-4">
              <nav className={`
                lg:static lg:block lg:w-auto lg:max-w-none lg:bg-transparent lg:py-0 lg:shadow-none dark:bg-black dark:lg:bg-transparent
                ${navbarOpen ? 'translate-x-0' : 'translate-x-full'}
                fixed top-0 right-0 h-screen w-[280px] max-w-[80vw] bg-white px-6 py-6 shadow-2xl transition-transform duration-300 ease-out lg:transition-none lg:fixed lg:h-auto lg:w-auto lg:bg-transparent lg:translate-x-0 lg:shadow-none lg:py-0 z-40
              `}>
                <ul className="block lg:flex">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="menu-item">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`ud-menu-scroll text-gray-800 hover:text-primary dark:text-gray-400 flex py-2 text-sm lg:text-xs xl:text-base font-medium uppercase tracking-wide lg:ml-2 xl:ml-6 2xl:ml-8 lg:inline-flex lg:py-4 dark:hover:text-white lg:text-xs xl:text-base font-oswald ${
                              usePathName === menuItem.path ? "text-primary" : ""
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <div className="group relative">
                            <Link
                              href="#"
                              className="text-gray-800 hover:text-primary dark:text-gray-400 dark:hover:text-white relative flex items-center py-2 text-sm lg:text-xs xl:text-base font-medium uppercase tracking-wide lg:ml-2 xl:ml-4 lg:inline-flex lg:py-4 xl:pr-4 xl:pl-0 2xl:ml-8 lg:text-xs xl:text-sm 2xl:text-base font-oswald"
                              onClick={() => handleSubmenu(index)}
                            >
                              {menuItem.title}
                              <span className="pl-3">
                              <svg width="14" height="8" viewBox="0 0 14 8" className={`fill-red-500 transition-all duration-300 ease-in-out ${
                                openIndex === index ? 'rotate-0 xl:rotate-0' : 'rotate-180 xl:rotate-0'
                              } group-hover:fill-blue-500 xl:group-hover:rotate-180`}>
                                  <path d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z"></path>
                                </svg>
                              </span>
                            </Link>
                            <ul className={`submenu transition-all duration-300 lg:absolute lg:top-[115%] lg:w-[300px] lg:p-4 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:top-full lg:z-50 ${
                              openIndex === index ? "block lg:block" : "hidden lg:group-hover:block"
                            }`}>
                              <div className="p-2 lg:p-3 bg-gray-50 dark:bg-gray-800 lg:bg-white/90 lg:dark:bg-black/90 lg:backdrop-blur-md lg:rounded-lg lg:shadow-lg">
                              {menuItem.submenu?.map((submenuItem, subIndex) => (
                              <li key={subIndex} className="relative">
                                {submenuItem.submenu ? (
                                  <>
                                    <Link
                                      href={submenuItem.path || "#"}
                                      className="hover:text-red-600 dark:hover:text-red-400 flex items-center justify-between py-[8px] text-xs lg:text-sm text-gray-700 lg:px-3 dark:text-gray-300 font-outfit font-medium uppercase tracking-wide hover:border hover:border-l-4 hover:border-l-red-500 hover:border-t-gray-300 hover:border-r-gray-300 hover:border-b-gray-300 hover:ml-0 transition-all duration-200"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleSubSubmenu(subIndex);
                                      }}
                                    >
                                      {submenuItem.title}
                                      <span className="pl-2">
                                        <svg width="10" height="6" viewBox="0 0 10 6" className="fill-current">
                                          <path d="M5 5L0 0h10L5 5z"></path>
                                        </svg>
                                      </span>
                                    </Link>
                                    <ul className={`sub-submenu transition-all duration-300 lg:absolute lg:left-full lg:top-0 lg:w-[250px] lg:z-50 ${
                                      openSubIndex === subIndex ? "block lg:block" : "hidden lg:hidden"
                                    }`}>
                                      <div className="p-2 lg:p-3 bg-gray-50 dark:bg-gray-800 lg:bg-white/90 lg:dark:bg-black/90 lg:backdrop-blur-md lg:rounded-lg lg:shadow-lg">
                                      {submenuItem.submenu.map((subSubmenuItem, subSubIndex) => (
                                        <li key={subSubIndex}>
                                          <Link
                                            href={subSubmenuItem.path || "#"}
                                            className="hover:text-red-600 dark:hover:text-red-400 flex items-center py-1.5 px-2 lg:py-2.5 lg:px-4 text-xs lg:text-sm text-gray-700 dark:text-gray-300 font-outfit font-medium uppercase tracking-wide hover:border-l-4 hover:border-l-red-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-200 group w-full"
                                          >
                                            <span className="flex items-center hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200">
                                              {subSubmenuItem.icon && (
                                                <subSubmenuItem.icon className="w-4 h-4 mr-3 flex-shrink-0" />
                                              )}
                                              <span className="flex-1">{subSubmenuItem.title}</span>
                                            </span>
                                          </Link>
                                        </li>
                                      ))}
                                      </div>
                                    </ul>
                                  </>
                                ) : (
                                  <Link
                                      href={submenuItem.path || "#"}
                                      className="hover:text-red-600 dark:hover:text-red-400 flex items-center py-1.5 px-2 lg:py-3 lg:px-4 text-xs lg:text-sm text-gray-700 dark:text-gray-300 font-outfit font-medium uppercase tracking-wide hover:border-l-4 hover:border-l-red-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-200 group w-full"
                                  >
                                      <span className="flex items-center hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200">
                                        {submenuItem.icon && (
                                          <submenuItem.icon className="w-4 h-4 mr-2 flex-shrink-0" />
                                        )}
                                        <span className="flex-1">{submenuItem.title}</span>
                                      </span>
                                  </Link>
                                )}
                                </li>
                              ))}
                              </div>
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Dark Mode Toggle in Drawer - shown on small screens */}
                  {mounted && (
                    <div className="md:hidden mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-center">
                        <label htmlFor="darkTogglerDrawer" className="flex h-11 w-20 cursor-pointer items-center justify-center rounded-full bg-gray-100 dark:bg-[#1E2763]">
                          <input
                            id="darkTogglerDrawer"
                            className="sr-only"
                            aria-label="darkTogglerDrawer"
                            type="checkbox"
                            name="darkTogglerDrawer"
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                          />
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white dark:bg-transparent dark:text-body-color">
                            <Sun className="h-4 w-4" />
                          </span>
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-body-color-2 dark:bg-primary dark:text-white">
                            <Moon className="h-4 w-4" />
                          </span>
                        </label>
                      </div>
                    </div>
                  )}
                </nav>
              </div>

              {/* Right Side Actions */}
            <div className="flex items-center justify-center flex-1 pr-16 lg:pr-20 xl:pr-0 xl:pl-4 2xl:pl-6">
                {/* Search Button - hidden on small screens */}
              <button className="mr-1 xl:mr-2 2xl:mr-3 hidden md:flex h-8 w-8 sm:h-9 sm:w-9 xl:h-[38px] xl:w-[38px] items-center justify-center rounded-full bg-white text-body-color-2 border border-gray-200 dark:border-none dark:bg-black dark:text-gray-200">
                  <Search className="h-4 w-4 sm:h-4 sm:w-4 xl:h-5 xl:w-5" />
                </button>

                {/* Dark Mode Toggle - moved to be left of donate button */}
                {mounted && (
                <div className="ml-1 lg:ml-2 xl:ml-3 hidden md:block">
                    <label htmlFor="darkToggler" className="flex h-8 sm:h-9 lg:h-9 xl:h-11 w-16 sm:w-18 lg:w-16 xl:w-20 cursor-pointer items-center justify-center rounded-full bg-gray-100 dark:bg-[#1E2763] px-0.5 sm:px-1 lg:px-0">
                      <input
                        id="darkToggler"
                        className="sr-only"
                        aria-label="darkToggler"
                        type="checkbox"
                        name="darkToggler"
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                      />
                      <span className="flex h-6 w-6 sm:h-7 sm:w-7 lg:h-6 lg:w-6 xl:h-8 xl:w-8 items-center justify-center rounded-full bg-primary text-white dark:bg-transparent dark:text-body-color">
                        <Sun className="h-4 w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-4 xl:w-4" />
                      </span>
                      <span className="flex h-6 w-6 sm:h-7 sm:w-7 lg:h-6 lg:w-6 xl:h-8 xl:w-8 items-center justify-center rounded-full bg-transparent text-body-color-2 dark:bg-primary dark:text-white">
                        <Moon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-4 xl:w-4" />
                      </span>
                    </label>
                  </div>
                )}

              {/* Donate Button */}
 <div className="flex ml-2 mr-2 lg:mr-4 xl:ml-4 xl:mr-0 2xl:ml-6 relative z-30">
   <button
     className="donate-animated relative flex items-center justify-center rounded-full 
                px-3 py-1.5 sm:px-4 sm:py-2 lg:px-3 xl:px-5 h-8 sm:h-9 lg:h-9 xl:h-11
                shadow-lg text-xs sm:text-sm lg:text-xs xl:text-base font-semibold tracking-wide 
                transition-all duration-300 hover:scale-105 group overflow-hidden
                text-white"
    onClick={() => { setDonateRipple(true); setTimeout(() => setDonateRipple(false), 450); }}
   >
     {/* Glow Effect */}
    <span className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-2xl transition duration-500"></span>
 
     {/* Text */}
     <span className="relative z-10 donate-heart font-oswald">DONATE</span>

     {/* Icon */}
     <span className="relative ml-1 flex items-center justify-center">
       {donateRipple && (
         <span className="absolute h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-3 lg:w-3 xl:h-4 xl:w-4 rounded-full bg-blue-400/50 animate-ping" />
       )}
       <Heart
         className="relative z-10 h-3 w-3 sm:h-3 sm:w-3 lg:h-3 lg:w-3 xl:h-3.5 xl:w-3.5 
                    fill-white 
                    group-hover:fill-blue-200 
                    transition-transform duration-300 group-hover:scale-125 
                    animate-pulse"
       />
     </span>
   </button>
 </div>



                {/* Sign In Button - Commented Out */}
              {/* <div className="hidden sm:flex ml-2 xl:ml-4 2xl:ml-6">
                  <Link
                    href="/auth/signin"
                  className="hover:bg-primary dark:hover:bg-gray-100 text-gray-600 dark:text-white hover:text-white dark:hover:text-primary flex items-center justify-center rounded-full border border-gray-400 dark:border-white px-6 py-2 text-sm font-medium uppercase tracking-wide transition-all whitespace-nowrap lg:px-5 xl:px-6 lg:text-sm xl:text-base font-oswald"
                  >
                    Sign In
                  </Link>
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
