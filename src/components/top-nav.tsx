"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { Search, Sun, Moon, Menu, X } from 'lucide-react';

export function TopNav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		// Add your dark mode logic here
	};

	return (
		<header className="fixed top-0 z-50 flex w-full items-center shadow-sticky dark:bg-dark/80 bg-white/80 backdrop-blur-xs">
			<div className="container max-w-[1430px]">
				<div className="relative -mx-4 flex items-center justify-between">
					{/* Logo */}
					<div className="w-60 max-w-full px-4">
						<Link href="/" className="block w-full py-4 lg:py-2">
							<img 
								alt="Logo" 
								width="176" 
								height="46" 
								className="block w-full dark:hidden" 
								src="/images/logo/logo.svg" 
								style={{ color: 'transparent' }}
							/>
							<img 
								alt="Logo" 
								width="176" 
								height="46" 
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
								className="ring-primary absolute top-1/2 right-4 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 xl:hidden" 
								aria-label="navbarOpen" 
								name="navbarOpen"
								onClick={toggleMenu}
							>
								{isMenuOpen ? (
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
							<nav className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full right-4 w-full max-w-[250px] rounded-lg bg-white px-6 py-4 shadow-sm xl:static xl:block xl:w-full xl:max-w-full xl:bg-transparent xl:py-0 xl:shadow-none dark:bg-black dark:xl:bg-transparent`}>
								<ul className="block xl:flex">
									<li className="menu-item">
										<Link 
											href="/#home" 
											className="ud-menu-scroll text-body-color-2 hover:text-primary dark:text-body-color flex py-2 text-lg font-semibold lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12 dark:hover:text-white text-primary"
										>
											Home2
										</Link>
									</li>
									<li className="menu-item">
										<Link 
											href="/#features" 
											className="ud-menu-scroll text-body-color-2 hover:text-primary dark:text-body-color flex py-2 text-lg font-semibold lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12 dark:hover:text-white"
										>
											Features
										</Link>
									</li>
									<li className="menu-item">
										<Link 
											href="/#roadmap" 
											className="ud-menu-scroll text-body-color-2 hover:text-primary dark:text-body-color flex py-2 text-lg font-semibold lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12 dark:hover:text-white"
										>
											Roadmap
										</Link>
									</li>
									<li className="submenu-item group relative">
										<Link 
											href="#" 
											className="text-body-color-2 group-hover:text-primary dark:text-body-color relative flex items-center py-2 text-lg font-semibold lg:ml-7 lg:inline-flex lg:py-5 lg:pr-4 lg:pl-0 xl:ml-10 2xl:ml-12 dark:group-hover:text-white"
										>
											Pages
											<span className="pl-3">
												<svg width="14" height="8" viewBox="0 0 14 8" className="fill-current rotate-180 lg:rotate-0">
													<path d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z"></path>
												</svg>
											</span>
										</Link>
										<ul className="block submenu relative top-full left-0 rounded-lg bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[115%] lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full dark:bg-black">
											<li>
												<Link 
													href="/blog" 
													className="hover:text-primary dark:hover:text-primary block rounded-sm py-[10px] text-sm text-black lg:px-4 dark:text-white"
												>
													Blog Grid Page
												</Link>
											</li>
											<li>
												<Link 
													href="/token-sale" 
													className="hover:text-primary dark:hover:text-primary block rounded-sm py-[10px] text-sm text-black lg:px-4 dark:text-white"
												>
													Token Sale Page
												</Link>
											</li>
											<li>
												<Link 
													href="/support" 
													className="hover:text-primary dark:hover:text-primary block rounded-sm py-[10px] text-sm text-black lg:px-4 dark:text-white"
												>
													Support Page
												</Link>
											</li>
											<li>
												<Link 
													href="/auth/signin" 
													className="hover:text-primary dark:hover:text-primary block rounded-sm py-[10px] text-sm text-black lg:px-4 dark:text-white"
												>
													Signin Page
												</Link>
											</li>
											<li>
												<Link 
													href="/auth/signup" 
													className="hover:text-primary dark:hover:text-primary block rounded-sm py-[10px] text-sm text-black lg:px-4 dark:text-white"
												>
													Signup Page
												</Link>
											</li>
										</ul>
									</li>
									<li className="menu-item">
										<Link 
											href="/#contact" 
											className="ud-menu-scroll text-body-color-2 hover:text-primary dark:text-body-color flex py-2 text-lg font-semibold lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12 dark:hover:text-white"
										>
											Support
					</Link>
									</li>
								</ul>
							</nav>
						</div>

						{/* Right Side Actions */}
						<div className="flex items-center justify-end pr-16 xl:pr-0 xl:pl-12 2xl:pl-20">
							{/* Search Button (disabled per request) */}
							{/*
							<button className="mr-4 hidden h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-black sm:flex dark:bg-black dark:text-white">
								<Search className="h-5 w-5" />
							</button>
							*/}

							{/* Dark Mode Toggle */}
							<div className="mr-4">
								<label htmlFor="darkToggler" className="flex h-11 w-20 cursor-pointer items-center justify-center rounded-full bg-light-bg dark:bg-[#1E2763]">
									<input 
										id="darkToggler" 
										className="sr-only" 
										aria-label="darkToggler" 
										type="checkbox" 
										name="darkToggler"
										checked={isDarkMode}
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

							{/* Sign In Button */}
							<div className="hidden sm:flex">
								<Link 
									href="/auth/signin" 
									className="border-body-color-2 text-body-color-2 hover:border-primary hover:bg-primary dark:hover:text-primary flex items-center justify-center rounded-full border px-8 py-[9px] text-base font-semibold transition-all hover:text-white lg:px-4 xl:px-8 dark:border-white dark:text-white dark:hover:bg-white"
								>
									Sign In
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
