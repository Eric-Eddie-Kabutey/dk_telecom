'use client';
import React, { useEffect, useRef } from 'react'
import Typography from '../shared/typography'
import logo from "@/public/assets/images/dk_logo.png";
import Image from 'next/image';
import { CircleCheck, Info } from 'lucide-react';
import qrCodeImg from "@/public/assets/images/qr_code_img.png";
import applestoreImg from "@/public/assets/icons/apple_store.png"
import playstoreImg from "@/public/assets/icons/playstore.png"
import mobileImg from "@/public/assets/images/home/mobile_app.png";
import mobilebackImg from "@/public/assets/images/home/mobile_back_1.png";
import SlidingCountries from '../reusable/sliding-countries';
import SlidingRight from '../reusable/sliding-right';
import * as THREE from 'three';

const features = [
  "Send Money", "Pay Bills", "Receive Payment", "Withdraw Money",
  "Buy Mobile Credits", "Buy Cash Power", "Link Bank Account", "and much more"
];

function DownloadWallet() {
  const globeEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeEl.current) return;

    // Dynamically import globe.gl only on client side
    import('globe.gl').then(({ default: Globe }) => {
      const earthTextureUrl =
        "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg";

      const world = new Globe(globeEl.current!, {
        waitForGlobeReady: true,
        animateIn: false,
      });

      const scene = world.scene();

      // Lights setup
      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(3, 2, 5);
      scene.add(directionalLight);

      const ambientLight = new THREE.AmbientLight(0xffffff, 3);
      scene.add(ambientLight);

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x555555, 1.5);
      scene.add(hemiLight);

      // Globe settings
      world
        .globeImageUrl(earthTextureUrl)
        .showAtmosphere(true)
        .atmosphereColor("rgba(0, 174, 239, 0.3)")
        .atmosphereAltitude(0.25)
        .width(250)
        .height(250)
        .backgroundColor("rgba(0,0,0,0)");

      world.globeMaterial(
        new THREE.MeshStandardMaterial({
          map: new THREE.TextureLoader().load(earthTextureUrl),
          transparent: true,
          opacity: 0.7,
          roughness: 0.4,
          metalness: 0.1,
          emissive: new THREE.Color(0x444444),
          emissiveIntensity: 0.7,
          side: THREE.DoubleSide,
        })
      );

      const controls = world.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1;
      controls.enableZoom = false;
      controls.enablePan = false;

      return () => {
        world._destructor();
      };
    });
  }, []);

  return (
    <div className='w-full pt-12'>
      <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex xl:flex-row flex-col justify-between items-stretch gap-16'>
        <div className='flex-1 flex flex-col gap-6 rounded-lg bg-white'>
          <div className='w-full pt-6 px-10 flex flex-col gap-2'>
            <div className='flex justify-between gap-3'>
              <Typography
                typo="header-1-semibold"
                className='lobster w-[75%] !leading-tight text-[#282781]'
              >
                Download <span className='text-[#00aeef]'>MyNafa</span> Wallet
              </Typography>
              <button className='sm:w-12 w-8 h-fit'>
                <Image src={logo} alt='Pay logo' className='w-full h-full' />
              </button>
            </div>
            <Typography
              typo="body-medium-medium"
              className='text-app-deep-blue'
            >
              What can you do with MyNafa Wallet?
            </Typography>
            <div className='w-full pt-6 grid xs:grid-cols-2 gap-3'>
              {features.map((data, i) => (
                <div key={i} className='flex items-center gap-2'>
                  <CircleCheck size={16} />
                  <Typography
                    typo="body-medium-medium"
                    className='text-gray-500'
                  >{data}</Typography>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full flex-1 flex flex-col justify-between gap- pt-4 pl-10 rounded-lg bg-[#00aeef]'>
            <div className='w-full md:px-6 px-4 flex justify-between items-center gap-4 '>
              <Typography
                typo="header-5-semibold"
                className='md:w-[65%] text-white !font-bold'
              >Where can I send money using with MyNafa?</Typography>
              <button className='p-1.5 bg-gray-100/20 rounded-full'>
                <div className='p-2 rounded-full bg-gray-100/30'>
                  <Info size={18} fill='#40a5dd' />
                </div>
              </button>
            </div>
            <div className='w-full py-5 flex justify-between items-end overflow-hidden'>
              <div className='xl:max-w-[400px] flex flex-col gap-8 w-auto overflow-x-auto'>
                <SlidingCountries />
                <SlidingRight />
              </div>
              <div
                className='w-44 h-44'
                ref={globeEl}
                aria-label="Interactive globe showing countries where you can send money"
              />
            </div>
          </div>
        </div>
        <div className='flex-1 flex flex-col gap-'>
          <div className='w-full px-8 sm:pt-24 pt-16 flex flex-col justify-end rounded-t-lg bg-app-deep-blue overflow-hidden'>
            <div className='sm:w-[90%] w-full mx-auto -mb-24 relative flex justify-between items-end'>
              <div className='w-[50%] h-fit mt-16'>
                <Image src={mobilebackImg} alt='Mobile back' className='w-full h-full' />
              </div>
              <div className='w-[50%] h-fit'>
                <Image src={mobilebackImg} alt='Mobile back' className='w-full h-full' />
              </div>
              <div className='w-[70%] h-fit absolute top-0 right-1/2 left-1/2 -translate-x-1/2'>
                <Image src={mobileImg} alt="Mobile app" className='w-full h-full' />
              </div>
            </div>
          </div>
          <div className='w-full py-12 px-12 flex xs:flex-row flex-col items-center gap-8 rounded-b-lg bg-[#19b5f0]'>
            <div className='w-44 h-fit bg-white rounded-lg'>
              <Image src={qrCodeImg} alt='QR code image' className='w-full h-full' />
            </div>
            <div className='w-full flex flex-col gap-4'>
              <Typography
                typo="body-large-regular"
                className='sm:w-[65%] w-full text-white'
              >
                Scan this QR code to download MyNafa Wallet.
              </Typography>
              <div className='flex justify-between items-center gap-4'>
                <div className='flex-1 w-fit px-6 py-2 bg-app-deep-blue rounded-lg'>
                  <Image src={applestoreImg} alt='Apple store' className='w-32 h-fit bg-app-deep-blue' />
                </div>
                <div className='flex-1 w-fit px-6 py-3 bg-white rounded-lg'>
                  <Image src={playstoreImg} alt='Apple store' className='w-32 h-fit bg-white' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DownloadWallet;
