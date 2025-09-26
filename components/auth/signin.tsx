'use client';
import React, { useState } from 'react'
import Typography from '../shared/typography'
import googleIcon from "@/public/assets/images/google-logo.png"
import Image from 'next/image';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { PackagesModal } from '@/modal/packages-modal';

function SignIn() {
  const [isPass, setIsPass] = useState(false)
  const [openPackage, setOpenPackage] = useState(false);

  const form = useForm({
        defaultValues: {
          number: "",
          password: "",
          rememberMe: false,
        },
        mode: "onChange",
    });
  return (
    <div className='w-full h-screen overflow-hidden flex flex-col justify-center items-center bg-[#eeeeee]'>
      <section className='max-container 2xl:w-[85%] w-[95%] h-[90%] xl:max-h-[800px] max-h-[600px] mx-auto flex justify-between'>
        <div className='flex-1 h-full py-6 flex flex-col justify-center bg-white'>
          <div className='w-[80%] h-fit mx-auto flex flex-col justify-center items-center py-4'>
            <Typography
              typo="header-3-light"
            >
              Sign In
            </Typography>
            <div className='xl:w-[70%] md:w-[90%] sm:w-[75%] xs:w-[90%] w-full mx-auto pt-6 flex flex-col gap-8'>
              <div className='w-full flex flex-col gap-3'>
                <Typography
                  typo="header-6-light"
                  className='text-center'
                >Don&apos;t have an account? <Link href="/signup" className='text-blue-500 underline'>Sign up</Link></Typography>
                {/* <button className='w-full px-4 py-2.5 flex justify-start items-center gap-8 border border-gray-500 rounded-md'>
                  <Image 
                    src={googleIcon}
                    alt='Google icon'
                    className='w-5 h-fit'
                  />
                  <Typography
                    typo="body-medium-regular"
                  >
                    Sign in with Google
                  </Typography>
                </button> */}
              </div>
              {/* <div className='flex items-center gap-3 justify-center'>
                <span className='flex-1 border-b'></span>
                <Typography
                  typo="body-medium-light"
                >or</Typography>
                <span className='flex-1 border-b'></span>
              </div> */}
              <Form {...form}>
                  <form className='w-full flex flex-col md:gap-5 sm:gap-6 gap-8 text-gray-700'
                  >
                      <FormField
                          control={form?.control}
                          name="number"
                          render={({ field }) => (
                              <FormItem className='sm:flex-1 w-full md:pb-3 flex flex-col gap-0'>
                                  <FormControl className="py-">
                                      <div className='w-full h-full relative flex justify-between items-center'>
                                          <Input
                                              className="!py-6 !text-base text-gray-500 placeholder:text-gray-400 font-light rounded-md border-gray-300" 
                                              {...field} 
                                              type='text'
                                              placeholder='Customer number/email'
                                          />
                                      </div>
                                  </FormControl>
                              </FormItem>
                          )}
                      />
                      <div className='w-full flex flex-col gap-2'>
                          <FormField
                              control={form?.control}
                              name="password"
                              render={({ field }) => (
                                  <FormItem className='sm:flex-1 w-full flex flex-col gap-0'>
                                      <FormControl className="py-">
                                          <div className='w-full h-full relative flex justify-between items-center'>
                                              <Input 
                                                  type={isPass ? "text" : "password"}
                                                  className="!py-6 !text-base text-gray-500 placeholder:text-gray-400 font-light rounded-md border-gray-300" 
                                                  {...field} 
                                                  placeholder='Password'
                                              />
                                              <button
                                                  type='button'
                                                  onClick={() => setIsPass(!isPass)}
                                                  className='absolute right-4 text-gray-400'
                                              >
                                                  {isPass ? (
                                                      <Eye size={18} />

                                                  ) : (
                                                      <EyeOff size={18} />
                                                  )}

                                              </button>
                                          </div>
                                      </FormControl>
                                  </FormItem>
                              )}
                          />
                          
                      </div>
                      <Button
                          variant="primary"
                          type="submit"
                          className='w-full sm:mt-4 py-3 !px-8 text-base !font-light !rounded-sm bg-blue-500'
                      >
                          Sign me in
                      </Button>
                  </form>
              </Form>
            </div>
          </div>
        </div>
        <div className='login-bg ibm md:block hidden flex-1 h-full'>
          <div className='lg:w-[80%] w-[90%] h-full mx-auto py-12 flex flex-col justify-end gap-6 text-white'>
            <div className='flex flex-col items-center gap-8 text-black'>
                <div className='flex flex-col gap-3 text-center'>
                    <Typography
                    typo="header-5-medium"
                    >
                    Reliable Internet & ICT Solutions with DK Telecom
                    </Typography>
                    <Typography
                    typo="body-medium-regular"
                    >
                    Stay connected with fast, secure, and affordable internet services. 
                    DK Telecom empowers homes, businesses, and institutions with 
                    cutting-edge connectivity and ICT solutions.
                    </Typography>
                </div>
                <Button
                    variant="outline"
                    onClick={() => setOpenPackage(true)}
                    className='py-3 font-normal text-base rounded-md border-gray-500 bg-transparent'
                >
                    Discover Our Services
                </Button>
                </div>
          </div>
        </div>
      </section>
      <PackagesModal 
        open={openPackage}
        setOpen={setOpenPackage}
      />
    </div>
  )
}

export default SignIn