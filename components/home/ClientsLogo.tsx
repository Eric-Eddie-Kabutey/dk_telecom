import { ClientLogos } from '@/components/shared/marquee/ClientLogos';

export function ClientsLogo() {
	return (
		<section className='ibm bg-indigo-50 py-10 md:py-18 overflow-hidden'>
			<div className='container mx-auto px-6'>
				{/* Section Header */}
				<div className='text-center max-w-3xl mx-auto'>
					<div className='flex items-center justify-center gap-4 mb-6'>
						<div className='flex-grow h-px bg-indigo-200'></div>
						<div className='flex-shrink-0 rounded-full p-[1px] bg-gradient-to-br from-yellow-400 to-indigo-400'>
							<div className='flex justify-center items-center bg-white rounded-full px-4 py-[3px]'>
								<span className='py-[0.5px] text-[11px] font-medium uppercase tracking-widest text-indigo-900'>
									Our Clients
								</span>
							</div>
						</div>
						<div className='flex-grow h-px bg-indigo-200'></div>
					</div>
					<p className='text-xl text-indigo-900/80'>
						Trusted by the Millions Worldwide
					</p>
				</div>
      </div>
      
			{/* renders client logos in a marquee */}
			<ClientLogos />
		</section>
	)
}
