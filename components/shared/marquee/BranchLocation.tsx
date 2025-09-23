'use client';

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

// Company branch locations
const locations = [
	'Bakau',
	'Banjul',
	'Basse',
	'Brikama',
	'Brufut',
	'Brusub',
	'Bundung',
	'Faraba',
	'Busumbala',
	'Gunjur',
	'Kartong',
	'Kotu',
	'Kerewan',
	'Faraba',
	'Numuyel',
	'Yundum',
	'Nyofeleh',
	'Salagi',
	'Sanyang',
	'Serrekunda',
	'Sinchu',
	'Tanji',
	'Tippa',
	'Garage',
]

export function BranchLocation() {
	const infiniteLogos = [...locations, ...locations, ...locations, ...locations]
	return (
		<section className='pt-12'>
			<div className='max-container 2xl:w-[85%] md:w-[95%] w-[95%] overflow-hidden'>
				<Marquee items={infiniteLogos} />
			</div>
		</section>
	)
}

interface MarqueeProps {
	items: string[]
}


const Marquee = ({ items }: MarqueeProps) => {
	return (
		<div className='flex flex-col gap-4'>
			{/* row 1 -- running from left to right */}
			<motion.div
				className='flex space-x-16 w-max'
				animate={{ x: ['0%', '-50%'] }}
				transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}>
				{items.map((logo, index) => (
					<div key={index} className='flex-shrink-0 mx-2'>
						<div className='flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg shadow-sm'>
							<MapPin className='h-4 w-4 text-red-500' />
							<span className='font-medium'>{logo}</span>
						</div>
					</div>
				))}
			</motion.div>

			{/* row 2 -- running form right to left */}
			<motion.div
				className='flex space-x-16 w-max'
				animate={{ x: ['-50%', '-0%'] }}
				transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}>
				{items.map((logo, index) => (
					<div key={index} className='flex-shrink-0 mx-2'>
						<div className='flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg shadow-sm'>
							<MapPin className='h-4 w-4 text-red-500' />
							<span className='font-medium'>{logo}</span>
						</div>
					</div>
				))}
			</motion.div>

			{/* row 3 -- running from left to right */}
			<motion.div
				className='flex space-x-16 w-max'
				animate={{ x: ['0%', '-50%'] }}
				transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}>
				{items.map((logo, index) => (
					<div key={index} className='flex-shrink-0 mx-2'>
						<div className='flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg shadow-sm'>
							<MapPin className='h-4 w-4 text-red-500' />
							<span className='font-medium'>{logo}</span>
						</div>
					</div>
				))}
			</motion.div>
		</div>
	)
}
