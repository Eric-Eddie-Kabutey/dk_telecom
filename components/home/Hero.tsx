'use client';
import Link from 'next/link'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Building2, House, Landmark, UserRound } from 'lucide-react'
import HeroSVG from './HeroSvg'
import GlowingRotatingBorder from '../svg/gloming-rotation'
import Typography from '../shared/typography'

export function CompanyHero() {
	return (
		<div className='ibm pt-10 flex flex-col gap-6 bg-[#130B54] '>
			<section className='relative w-full flex items-center justify-center text-white bg-[#130B54] pt-6 md:pt-12 pb-6 px-6 overflow-hidden'>
				{/* svg of colored-lines */}
				<svg width="0" height="0">
					<defs>
					<linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="#ffb923">
						<animate attributeName="stop-color" values="#ffb923; #3538ff; #ffb923" dur="4s" repeatCount="indefinite" />
						</stop>
						<stop offset="100%" stopColor="#3538ff">
						<animate attributeName="stop-color" values="#3538ff; #ffb923; #3538ff" dur="4s" repeatCount="indefinite" />
						</stop>
					</linearGradient>
					</defs>
				</svg>
				
				<div className='max-container mt-auto md:flex flex-col gap-6 md:gap-12 z-10'>
					<div className='text-center space-y-4'>

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
						<div className='space-y-6'>
							<h1 className='text-4xl md:text-7xl font-regular tracking-tight leading-10 mt-6'>
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

					{/* Infographic image: border border-[#FBD956] rounded-lg */}
					{/* <div className='hidden lg:block  w-full max-w-4xl md:mt-10 '>
						<GlowingRotatingBorder className='w-full h-full rounded-[6xp]'>
							<Image
								src='/assets/images/hero-image.png'
								alt='Abstract visual representing the flow of data from servers through the internet to users.'
								width={1920}
								height={480}
								className='w-full h-auto rounded-[6xp]'
							/>
						</GlowingRotatingBorder>
					</div> */}
				</div>
			</section>
			<div className='w-full relative min-h-[45vh] flex flex-col justify-center'>
				<HeroSVG />
				<div className='max-container 2xl:w-[85%] w-[95%] relative mx-auto flex md:flex-row flex-col justify-between items-center'>
					<GlowingRotatingBorder className='lg:w-[35%] md:w-[50%] w-full'>
						<div className='w-full h-[300px] p-1 ibm'>
							<div className='w-full h-full p-3 flex flex-col justify-between gap-8 bg-[#130B54] rounded-xl text-white	'>
								<div className='h-[50%] flex justify-between items-center gap-3'>
									<div className='h-full flex-1 flex xs:flex-row flex-col items-center justify-center gap-2 text-center p-3 border border-[#f5bc36] rounded-lg'>
										<House />
										<Typography
											typo="header-6-medium"
										>
											Home
										</Typography>
									</div>
									<div className='h-full flex-1 flex xs:flex-row flex-col items-center justify-center gap-2 text-center p-3 border border-[#f5bc36] rounded-lg'>
										<Landmark />
										<Typography
											typo="header-6-medium"
										>
											Government
										</Typography>
									</div>
								</div>
								<div className='h-[50%] flex justify-between items-center gap-3'>
									<div className='h-full flex-1 flex xs:flex-row flex-col items-center justify-center gap-2 text-center p-3 border border-[#f5bc36] rounded-lg'>
										<Building2 />
										<Typography
											typo="header-6-medium"
										>
											Companies
										</Typography>
									</div>
									<div className='h-full flex-1 flex xs:flex-row flex-col items-center justify-center gap-2 text-center p-3 border border-[#f5bc36] rounded-lg'>
										<UserRound />
										<Typography
											typo="header-6-medium"
										>
											Individuals
										</Typography>
									</div>
								</div>
								
							</div>
						</div>
					</GlowingRotatingBorder>
					<div className='flex-1 h-4 '>
						<div className='flex md:flex-row flex-col justify-between items-center '>
							<ArrowLeft className="w-6 h-6 md:block hidden" stroke="url(#glow-gradient)" />
							<ArrowUp className="w-6 h-6 md:hidden block" stroke="url(#glow-gradient)" />

							<GlowingRotatingBorder className='md:w-full w-[3px]'>
							<div className='md:h-1 h-20 flex-1'></div>
							</GlowingRotatingBorder>

							<ArrowDown className="w-6 h-6 md:hidden block" stroke="url(#glow-gradient)" />
							<ArrowRight className="w-6 h-6 md:block hidden" stroke="url(#glow-gradient)" />
						</div>
					</div>
					<GlowingRotatingBorder className='lg:w-[35%] md:w-[50%] w-full'>
						<div className='w-full h-[300px] p-1'>
							<div className='w-full h-full p-3 flex flex-col justify-between gap-8 bg-[#130B54] rounded-xl text-white	'>
								<div className='h-[50%] flex justify-between items-center gap-3'>
									<div className='h-full flex-1 flex xs:flex-row flex-col items-center justify-center gap-2 text-center p-3 border border-[#f5bc36] rounded-lg'>
										<House />
										<Typography
											typo="header-6-medium"
										>
											Netflix 
										</Typography>
									</div>
									<div className='h-full flex-1 flex xs:flex-row flex-col items-center justify-center gap-2 text-center p-3 border border-[#f5bc36] rounded-lg'>
										<Landmark />
										<Typography
											typo="header-6-medium"
										>
											Social Media
										</Typography>
									</div>
								</div>
								<div className='h-[50%] flex justify-between items-center gap-3'>
									<div className='h-full flex-1 flex xs:flex-row flex-col items-center justify-center gap-2 text-center p-3 border border-[#f5bc36] rounded-lg'>
										<Building2 />
										<Typography
											typo="header-6-medium"
										>
											Infrastructure
										</Typography>
									</div>
									<div className='h-full flex-1 flex xs:flex-row flex-col items-center justify-center gap-2 text-center p-3 border border-[#f5bc36] rounded-lg'>
										<UserRound />
										<Typography
											typo="header-6-medium"
										>
											Communication
										</Typography>
									</div>
								</div>
								
							</div>
						</div>
					</GlowingRotatingBorder>
				</div>
			</div>
		</div>
	)
}
