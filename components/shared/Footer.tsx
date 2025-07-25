'use client';
import white_logo from "@/public/assets/images/dk_logo_white.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, Facebook, Instagram, Linkedin, X } from "lucide-react";
import Typography from "./typography";
import { payment_methods } from "@/constants";


export default function Footer() {
    return (
        <div className="w-full bg-app-black-bg">
            <section className="max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col gap-6">
                <div className="w-full py-20 flex lg:flex-row flex-col justify-between gap-16 border-b border-gray-500">
                    <div className="xl:w-[30%] lg:w-[35%] xs:w-[60%] flex flex-col gap-12 ">
                        <div className="w-fit h-16">
                            <Image 
                                src={white_logo}
                                alt="White logo"
                                className="w-full h-full"
                            />
                        </div>
                        <div className="px-3 py-2 flex justify-between items-center bg-[#383838] rounded-full">
                            <input 
                                type="text"
                                placeholder="Enter your email"
                                className="flex-1 placeholder:text-gray-500 text-gray-500 bg-[#383838] outline-none focus:outline-none focus:ring-0"
                            />
                            <Button
                                variant="primary"
                                className='w-fit py-2 px-5 font-medium'
                            >
                                <span>Subscribe</span>
                                <ArrowRight />
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 grid sm:grid-cols-6 xs:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-6 w-32 flex-none col-span-1">
                            <Typography
                                typo="body-large-regular"
                                className="text-white"
                            >Company</Typography>
                            <ul className="flex flex-col gap-3">
                                <li className="text-sm text-gray-300">Home</li>
                                <li className="text-sm text-gray-300">Company</li>
                                <li className="text-sm text-gray-300">Insights</li>
                                <li className="text-sm text-gray-300">Careers</li>
                                <li className="text-sm text-gray-300">i-Academy</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6 col-span-2 sm:col-span-2">
                            <Typography
                                typo="body-large-regular"
                                className="text-white"
                            >Our Service</Typography>
                            <ul className="flex flex-col gap-3">
                                <li className="text-sm text-gray-300">Business Transformation & Consulting</li>
                                <li className="text-sm text-gray-300">Managed services</li>
                                <li className="text-sm text-gray-300">Licensing and Renewals</li>
                                <li className="text-sm text-gray-300">FAQs</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6 col-span-3 sm:col-span-3">
                            <div className="w-full grid grid-cols-3 gap-6">
                                {payment_methods.map((data, index) => (
                                    <div key={index+1} className="max-w-20 w-full h-fit">
                                        <Image 
                                            src={data}
                                            alt={`Payment ${index+1}`}
                                            className="w-full h-full"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full pt-3 pb-8 flex sm:flex-row flex-col justify-between items-center gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-white">© 2025, Heirs Technologies Ltd. All Rights Reserved.</span>
                        <div className="flex items-center gap-3 text-gray-300 text-[13px]">
                            <span>Cookie Policy</span>
                            <span>|</span>
                            <span>Terms of Use</span>
                            <span>|</span>
                            <span>Privacy Policy</span>
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-4">
                        <div>
                            <Facebook color="white" size={22} />
                        </div>
                        <div>
                            <Instagram color="white" size={20} />
                        </div>
                        <div>
                            <Linkedin color="white" size={20} />
                        </div>
                        <div>
                            <X color="white" size={22} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
