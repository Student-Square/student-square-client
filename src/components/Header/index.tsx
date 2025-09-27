"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Search, Sun, Moon, X } from "lucide-react";
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

  // Dark mode toggle using next-themes
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
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
        <div className="container max-w-[1430px] ">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <Link href="/" className="block w-full py-4 lg:py-4">
                
                <Image
                  alt="Logo"
                  width={176}
                  height={46}
                  className="block w-full dark:hidden"
                  src="/images/logo/logo.svg"
                  style={{ color: 'transparent' }}
                />
                <Image
                  alt="Logo"
                  width={176}
                  height={46}
                  className="hidden w-full dark:block"
                  src="/images/logo/logo-white.svg"
                  style={{ color: 'transparent' }}
                />
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex w-full items-center justify-end px-4">
              <div>
                {/* Mobile Menu Button */}
                <button
                  onClick={navbarToggleHandler}
                  className="ring-primary absolute top-1/2 right-4 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 xl:hidden"
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

                {/* Navigation Menu */}
                <nav className={`${navbarOpen ? 'block' : 'hidden'} absolute top-full right-4 w-full max-w-[250px] rounded-lg bg-white px-6 py-4 shadow-sm xl:static xl:block xl:w-full xl:max-w-full xl:bg-transparent xl:py-0 xl:shadow-none dark:bg-black dark:xl:bg-transparent`}>
                  <ul className="block xl:flex">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="menu-item">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`ud-menu-scroll text-body-color-2 hover:text-primary dark:text-gray-400 flex py-2 text-lg font-semibold lg:ml-7 lg:inline-flex lg:py-4 xl:ml-10 2xl:ml-12 dark:hover:text-white ${
                              usePathName === menuItem.path ? "text-primary" : ""
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <div className="submenu-item group relative">
                            <Link
                              href="#"
                              className="text-body-color-2 group-hover:text-primary dark:text-gray-400 dark:group-hover:text-white relative flex items-center py-2 text-lg font-semibold lg:ml-7 lg:inline-flex lg:py-4 lg:pr-4 lg:pl-0 xl:ml-10 2xl:ml-12"
                              onClick={() => handleSubmenu(index)}
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="14" height="8" viewBox="0 0 14 8" className="fill-current rotate-180 lg:rotate-0">
                                  <path d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z"></path>
                                </svg>
                              </span>
                            </Link>
                            <ul className={`block submenu relative top-full left-0 rounded-lg bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[115%] lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full dark:bg-black ${
                              openIndex === index ? "block" : "hidden"
                            }`}>
                              {menuItem.submenu?.map((submenuItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    href={submenuItem.path}
                                    className="hover:text-blue-600 dark:hover:text-blue-400 block rounded-sm py-[10px] text-sm text-gray-700 lg:px-4 dark:text-gray-300"
                                  >
                                    {submenuItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center justify-end pr-16 xl:pr-0 xl:pl-12 2xl:pl-20">
                {/* Search Button */}
                <button className="mr-4 hidden h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-body-color-2 border border-gray-200 dark:border-none sm:flex dark:bg-black dark:text-gray-200">
                  <Search className="h-5 w-5" />
                </button>

                {/* Dark Mode Toggle */}
                {mounted && (
                  <div className="mr-4">
                    <label htmlFor="darkToggler" className="flex h-11 w-20 cursor-pointer items-center justify-center rounded-full bg-gray-100 dark:bg-[#1E2763]">
                      <input
                        id="darkToggler"
                        className="sr-only"
                        aria-label="darkToggler"
                        type="checkbox"
                        name="darkToggler"
                        checked={theme === "dark"}
                        onChange={toggleDarkMode}
                      />
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white dark:bg-transparent dark:text-body-color">
                        <Sun className="h-4 w-4" />
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-body-color-2 dark:bg-primary dark:text-white">
                        <Moon className="h-4 w-4" />
                      </span>
                    </label>
                  </div>
                )}

                {/* Sign In Button */}
                <div className="hidden sm:flex">
                  <Link
                    href="/auth/signin"
                    className=" hover:bg-primary dark:hover:bg-gray-100 text-gray-600 dark:text-white hover:text-white dark:hover:text-primary flex items-center justify-center rounded-full border border-gray-400 dark:border-white px-8 py-2 lg:py-2 text-base font-semibold transition-all lg:px-4 xl:px-8"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
