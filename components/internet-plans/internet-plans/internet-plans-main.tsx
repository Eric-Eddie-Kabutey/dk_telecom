'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PackagesModal } from '@/modal/packages-modal';
import { Play } from 'lucide-react';
import React, { useState } from 'react';

function InternetPlansMain() {
  const [openPackages, setOpenPackages] = useState(false);

  return (
    <div className='w-full py-12'>
      <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-6'>
        <div className='lg:w-[70%] mx-auto flex flex-col items-center gap-4'>
          <Typography
            typo="header-1-semibold"
            className='text-center font-bold uppercase bg-gradient-to-r from-app-primary to-app-deep-blue bg-clip-text text-transparent'
          >
            High-speed internet around the Gambia
          </Typography>
          <Typography
            typo="body-large-medium"
            className='text-center'
          >
            Connect at home or on the go. See speeds in your country.
          </Typography>
          <button className='flex justify-center items-center gap-3'>
            <Typography>Watch Now</Typography>
            <div className='p-1 border border-gray-500 rounded-full'>
              <Play size={16} />
            </div>
          </button> 
        </div>
        <div className='xl:w-[70%] w-[90%] mx-auto '>
          <div className='w-full py-6 flex md:flex-row flex-col justify-between items-stretch gap-6'>
            <Card className='flex-1 flex flex-col justify-between gap-6 border-gray-600'>
              <CardHeader className='flex flex-col'>
                <Typography 
                  typo="header-5-semibold"
                  className='uppercase'
                >Residential</Typography>
                <Typography
                  typo="body-medium-regular"
                  className='text-gray-600'
                >
                  Connect at home with your family and friends.
                </Typography>
              </CardHeader>
              <CardContent className='flex items-center gap-6'>
                <Select>
                    <SelectTrigger className="flex-1 py-5 border-app-primary ">
                        <SelectValue placeholder="Order now" className=' !text-white' />
                    </SelectTrigger>
                    <SelectContent className='border-black'>
                        <SelectGroup>
                            <SelectLabel>Select preferred price</SelectLabel>
                            <SelectItem value="first">1002.12 GB @ GHC 1000</SelectItem>
                            <SelectItem value="second">1002.12 GB @ GHC 1000</SelectItem>
                            <SelectItem value="third">1002.12 GB @ GHC 1000</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {/* <Button
                  variant="primary"
                  className='rounded-sm'
                >
                  Order now
                </Button> */}
                <Button
                  variant="primary"
                  onClick={() => setOpenPackages(true)}
                  className='flex-1 rounded-sm'
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
            <Card className='flex-1 flex flex-col justify-between gap-6 border-gray-600'>
              <CardHeader className='flex flex-col'>
                <Typography 
                  typo="header-5-semibold"
                  className='uppercase'
                >Business</Typography>
                <Typography
                  typo="body-medium-regular"
                  className='text-gray-600'
                >
                  Connect while traveling anywhere in over 100 markets
                </Typography>
              </CardHeader>
              <CardContent className='flex items-center gap-6'>
                <Select>
                    <SelectTrigger className="flex-1 py-5 border-app-primary ">
                        <SelectValue placeholder="Order now" className=' !text-white' />
                    </SelectTrigger>
                    <SelectContent className='border-black'>
                        <SelectGroup>
                            <SelectLabel>Select preferred price</SelectLabel>
                            <SelectItem value="first">1002.12 GB @ GHC 1000</SelectItem>
                            <SelectItem value="second">1002.12 GB @ GHC 1000</SelectItem>
                            <SelectItem value="third">1002.12 GB @ GHC 1000</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button
                  variant="primary"
                  className='flex-1 rounded-sm'
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className='pt-8 flex flex-col gap-3'>
            <Typography
              typo="header-4-semibold"
              className='uppercase text-center'
            >
              Satellites internet for business and power users
            </Typography>
            <Typography
              typo="body-large-medium"
              className='uppercase text-center'
            >
              Reliable high-speed internet designed to keep businesses connected.
            </Typography>
            <Button
              variant="primary"
              className='w-fit mx-auto mt-6 rounded-sm'
            >
              Learn more
            </Button>
          </div>
        </div>
      </section>
      <PackagesModal 
        open={openPackages}
        setOpen={setOpenPackages}
      />
    </div>
  )
}

export default InternetPlansMain