import { useState } from 'react';
import Logo from './../../../assets/logo.svg';
import CloseIcon from '../../../assets/close-icon.svg';
import HamburgerIcon from '../../../assets/hamburger-icon.svg';

function NavBar() {
	const [navbar, setNavbar] = useState(false);
	return (
		<div>
			<nav className='w-full  bg-[#6B3CC9]'>
				<div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
					<div>
						<div className='flex items-center justify-between py-3 md:py-5 md:block'>
							<img src={Logo} width={239} height={37} alt='logo' />
							<div className='md:hidden'>
								<button
									className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
									onClick={() => setNavbar(!navbar)}
								>
									{navbar ? (
										<img
											src={CloseIcon}
											width={30}
											height={30}
											alt='close-icon'
										/>
									) : (
										<img
											src={HamburgerIcon}
											width={30}
											height={30}
											alt='hamburger-icon'
											className='focus:border-none active:border-none'
										/>
									)}
								</button>
							</div>
						</div>
					</div>
					<div>
						<div
							className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
								navbar ? 'p-12 md:p-0 block' : 'hidden'
							}`}
						>
							<ul className='h-screen md:h-auto items-center justify-center md:flex '>
								<li className='nav-font'>SERVICES</li>
								<li className='nav-font'>ABOUT US</li>
								<li className='nav-font'>CONTACT US</li>
								<li className='nav-font'>CAREERS</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
