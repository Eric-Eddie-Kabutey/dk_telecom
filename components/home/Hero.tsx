import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import HeroSVG from './HeroSvg'
import Image from 'next/image'

export function CompanyHero() {
	return (
		<section className='relative w-full min-h-[75vh] lg:min-h-screen flex items-center justify-center text-white bg-[#130B54] pt-6 md:pt-10 px-6 overflow-hidden'>
			{/* svg of colored-lines */}
			<HeroSVG />
			<div className='max-container mt-auto md: flex flex-col gap-6 md:gap-12 z-10'>
				<div className='self-center'>

					{/* News Alert Banner */}
					<Link
						href='#'
						className='group inline-flex items-center gap-4 rounded-full border border-blue-400/30 bg-white/10 px-2 md:px-4 py-2 text-xs backdrop-blur-sm transition-colors hover:bg-white/20'
						aria-label='News Alert: Pay your internet bills with DK Pay. Learn More.'>
						<p className='text-[#87F4F9] text-xs'>NEWS ALERT!!!</p>
						<p className='font-medium text-blue-100'>
							PAY YOUR INTERNET BILLS WITH DK PAY.
						</p>
						<span className='hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#F8D653] group-hover:text-white transition-colors'>
							LEARN MORE
							<ArrowRight className='h-3 w-3' />
						</span>
					</Link>

					{/* Main Text Content */}
					<div className='space-y-4'>
						<h1 className='text-4xl md:text-7xl font-semibold tracking-tight leading-10'>
							Proudly Gambian Owned.
							<br />
							Committed to you.
						</h1>
						<p className='text-lg text-blue-200 max-w-2xl mx-auto'>
							Connecting Every Corner of The Gambia,
							<br className='hidden sm:block' />
							One Home, One Business, One Heart at a Time.
						</p>
					</div>
				</div>

				{/* Infographic image */}
				<div className='hidden lg:block  w-full max-container md:mt-10 border border-[#FBD956] rounded-lg'>
					<Image
						src='/assets/images/hero-image.png'
						alt='Abstract visual representing the flow of data from servers through the internet to users.'
						width={1920}
						height={480}
						className='w-full h-auto'
					/>
				</div>
			</div>
		</section>
	)
}
