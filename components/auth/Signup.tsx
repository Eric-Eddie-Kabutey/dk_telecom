'use client';
import React, { useState } from 'react'
import Typography from '../shared/typography'
import googleIcon from "@/public/assets/images/google-logo.png"
import Image from 'next/image';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Check, Eye, EyeOff } from 'lucide-react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import Link from 'next/link';
import { signup_includes } from '@/constants';

function Signup() {
  const [isPass, setIsPass] = useState(false)
  const form = useForm({
        defaultValues: {
          name: "",
          email: "",
          password: "",
          rememberMe: false,
        },
        mode: "onChange",
    });
  return (
    <div className='w-full h-screen overflow-hidden flex flex-col justify-center items-center bg-[#eeeeee]'>
      <section className='max-container 2xl:w-[85%] w-[95%] h-[90%] xl:max-h-[800px] max-h-[600px] mx-auto flex justify-between'>
        <div className='flex-1 h-full py-6 bg-white'>
          <div className='lg:w-[80%] md:w-[90%] xs:w-[80%] w-[90%] mx-auto flex flex-col items-center xl:py-4 py-2'>
            <Typography
              typo="header-3-light"
            >
              Create a FREE Account
            </Typography>
            <div className='xl:w-[70%] xs:w-[90%] w-full mx-auto pt-6 flex flex-col gap-4'>
              <div className='w-full flex flex-col gap-3'>
                <Typography
                  typo="header-6-light"
                  className='text-center'
                >Already have an account? <Link href="/signin" className='text-blue-500 underline'>Sign in</Link></Typography>
                <button className='w-full px-4 py-2.5 flex justify-start items-center gap-8 border border-gray-500 rounded-md'>
                  <Image 
                    src={googleIcon}
                    alt='Google icon'
                    className='w-5 h-fit'
                  />
                  <Typography
                    typo="body-medium-regular"
                  >
                    Sign up with Google
                  </Typography>
                </button>
              </div>
              <div className='flex items-center gap-3 justify-center'>
                <span className='flex-1 border-b'></span>
                <Typography
                  typo="body-medium-light"
                >or</Typography>
                <span className='flex-1 border-b'></span>
              </div>
              <Form {...form}>
                  <form className='w-full flex flex-col xl:gap-5 md:gap-3 gap-6 text-gray-700'
                  >
                      <FormField
                          control={form?.control}
                          name="name"
                          render={({ field }) => (
                              <FormItem className='sm:flex-1 w-full md:pb-3 flex flex-col gap-0'>
                                  <FormControl className="py-">
                                      <div className='w-full h-full relative flex justify-between items-center'>
                                          <Input
                                              className="!py-6 !text-base text-gray-500 placeholder:text-gray-400 font-light rounded-md border-gray-300" 
                                              {...field} 
                                              placeholder='Full name'
                                          />
                                      </div>
                                  </FormControl>
                              </FormItem>
                          )}
                      />
                      <FormField
                          control={form?.control}
                          name="email"
                          render={({ field }) => (
                              <FormItem className='sm:flex-1 w-full md:pb-3 flex flex-col gap-0'>
                                  <FormControl className="py-">
                                      <div className='w-full h-full relative flex justify-between items-center'>
                                          <Input
                                              className="!py-6 !text-base text-gray-500 placeholder:text-gray-400 font-light rounded-md border-gray-300" 
                                              {...field} 
                                              type='email'
                                              placeholder='Business Email'
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
                      <div className="flex items-start gap-3">
                        <Checkbox id="toggle" className='' />
                        <Label htmlFor="toggle"
                          className='text-xs font-light'
                        >
                          I agree to BrowserStack&apos;s <Link href="/signup" className='text-blue-600'>Terms of Service </Link> and <Link href="/signup" className='text-blue-600'>Privacy Policy</Link> .
                        </Label>
                      </div>
                      <Button
                          variant="primary"
                          type="submit"
                          className='w-full sm:mt-4 py-3 !px-8 text-base !font-light !rounded-sm bg-blue-500'
                      >
                          Sign me up
                      </Button>
                  </form>
              </Form>
            </div>
          </div>
        </div>
        <div className='md:block hidden flex-1 h-full bg-[#130b54]'>
          <div className='xl:w-[80%] w-[90%] mx-auto py-12 flex flex-col gap-6 text-white'>
            <Typography
              typo="header-6-medium"
            >What&apos;s include</Typography>
            <div className='w-full flex flex-col lg:gap-4 gap-2'>
              {signup_includes.map((data, index) => (
                <div key={`what include ${index+1}`} className='flex items-center gap-3 text-white'>
                  <Check size={18} />
                  <Typography
                    typo="body-medium-light"
                  >{data}</Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup