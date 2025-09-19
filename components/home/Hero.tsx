import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import HeroSVG from './HeroSvg'
import Image from 'next/image'

export function CompanyHero() {
	return (
		<section className='relative w-full min-h-screen flex items-center justify-center text-white bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#130B54] via-[#130B64] to-black/95 py-20 px-6 overflow-hidden'>
			{/* svg of colored-lines */}
			<HeroSVG />
			<div className='flex flex-col items-center text-center gap-12 z-10'>
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
					<h1 className='text-5xl md:text-7xl font-semibold tracking-tight'>
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

				{/* Infographic image */}
				<div className='w-full max-w-7xl mt-8 md:mt-12 lg:mt-20'>
					<Image
						src='/assets/images/infographic-hero.png'
						alt='Abstract visual representing the flow of data from servers through the internet to users.'
						width={1920}
                        height={480}                        
						className='w-full h-auto rounded-lg'
					/>
				</div>
			</div>
		</section>
	)
}
