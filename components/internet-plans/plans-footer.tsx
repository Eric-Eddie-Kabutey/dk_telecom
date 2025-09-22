'use client'

import React from 'react'
import Typography from '../shared/typography'
import Image from 'next/image'
import { socialLinks } from '@/data/footer'
import Link from 'next/link'

function PlansFooter() {
	return (
		<div className='w-full pt-16 pb-4 lg:pb-2 bg-black'>
			<section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-4 '>
				{/* Divider */}
				<hr className='-mb-10 border-indigo-800' />

				<div className='flex items-center justify-center gap-4'>
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

				<div className='flex flex-col-reverse md:flex-row items-center justify-between gap-y-4 text-sm text-gray-400 text-center mt-4'>
					<div>
						Copyright &copy; {new Date().getFullYear()} DK Telecoms. All rights
						reserved.
					</div>
					<div className='flex justify-center items-center gap-4 text-white'>
						<Typography typo='body-small-medium'>Terms & Conditions</Typography>
						<Typography typo='body-small-medium'>Help Center</Typography>
					</div>
				</div>
			</section>
		</div>
	)
}

export default PlansFooter
