import Image from 'next/image'
import Link from 'next/link'

// --- Data for Footer Links ---
const companyLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/company', label: 'Company' },
	{ href: '/insights', label: 'Insights' },
	{ href: '/careers', label: 'Careers' },
]

const serviceLinks = [
	{ href: '/internet-services', label: 'DK Internet' },
	{ href: '/digital-solutions', label: 'Digital Solutions' },
	{ href: '/talent-hub', label: 'DK TalentHub' },
]

const legalLinks = [
	{ href: '/privacy-policy', label: 'Privacy Policy' },
	{ href: '/terms-of-use', label: 'Terms of Use' },
]

const socialLinks = [
	{ href: '#', label: 'X', iconSrc: '/assets/logos/x.png' },
	{
		href: '#',
		label: 'LinkedIn',
		iconSrc: '/assets/logos/linkedin.png',
	},
	{
		href: '#',
		label: 'Instagram',
		iconSrc: '/assets/logos/instagram.png',
	},
	{ href: '#', label: 'GitHub', iconSrc: '/assets/logos/github.png' },
]

export function Footer() {
	return (
		<footer>
			{/* top footer */}
			<div className='bg-[#130B54] text-white'>
				<div className='max-container px-6 lg:px-8 py-6'>
					{/* Top Section */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 md:py-16 lg:py-32'>
						{/* Column 1: Logo & Tagline */}
						<div className='col-span-1 md:col-span-2 lg:col-span-1 lg:-mt-14'>
							<Image
								src='/assets/images/dk_logo_white.png'
								alt='DK Telecom Ltd. Logo'
								width={180}
								height={40}
							/>
							<p className='mt-4 text-indigo-200/80'>
								Connecting Every Corner of The Gambia, One Home, One Business,
								One Heart at a Time.
							</p>
						</div>
						{/* Column 2: Company */}
						<div>
							<h3 className='font-semibold mb-4'>Company</h3>
							<ul className='space-y-3'>
								{companyLinks.map((link) => (
									<li key={link.label}>
										<Link
											href={link.href}
											className='text-indigo-200/80 hover:text-white transition-colors'>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
						{/* Column 3: Service */}
						<div>
							<h3 className='font-semibold mb-4'>Our Service</h3>
							<ul className='space-y-3'>
								{serviceLinks.map((link) => (
									<li key={link.label}>
										<Link
											href={link.href}
											className='text-indigo-200/80 hover:text-white transition-colors'>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
						
						<div>
							<h3 className='font-semibold mb-4'>Legal</h3>
							<ul className='space-y-3'>
								{legalLinks.map((link) => (
									<li key={link.label}>
										<Link
											href={link.href}
											className='text-indigo-200/80 hover:text-white transition-colors'>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Divider */}
					<hr className='-mb-10 border-indigo-800' />

					{/* Middle Section: Socials & Contacts */}
					<div className='flex flex-col items-center justify-center gap-8 py-4'>						

						<div className='flex items-center gap-4'>
							{socialLinks.map((social) => (
								<Link
									key={social.label}
									href={social.href}
									aria-label={social.label}
									className='rounded-full p-[2px] bg-gradient-to-br from-yellow-400 to-indigo-400 transition-transform hover:scale-110'>
									<div className='bg-indigo-900 rounded-full p-2'>
										<Image
											src={social.iconSrc}
											alt={`${social.label} icon`}
											width={24}
											height={24}
											className='h-6 w-6'
										/>
									</div>
								</Link>
							))}
						</div>

            <div className="flex items-center justify-center gap-4">
              <Link
							href='/contact-us'
							className='text-lg font-medium hover:text-yellow-300 transition-colors'>
							Contact Us
						</Link>
						<Link
							href='#'
							className='text-lg font-medium hover:text-yellow-300 transition-colors'>
							Follow Us
						</Link>
            </div>
					</div>
				</div>
			</div>

			{/* Bottom Section: Copyright */}
			<div className='py-4 px-2 bg-white text-sm text-black border-t border-indigo-800'>
				Copyright &copy; {new Date().getFullYear()} DK Telecoms. All rights
				reserved.
			</div>
		</footer>
	)
}
