'use client';
import React, { useEffect, useRef } from 'react'
import about_map from "@/public/assets/images/home/map-bac-2.png";
import Image from 'next/image';
import Typography from '../shared/typography';
import * as THREE from 'three';


function HomeAbout() {
    const globeEl = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        if (!globeEl.current) return;

        import('globe.gl').then(({ default: Globe }) => {
            const earthTextureUrl =
            "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg";

            const world = new Globe(globeEl.current!, {
            waitForGlobeReady: true,
            animateIn: false,
            });

            const scene = world.scene();

            // Lights
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
            .width(globeEl.current!.offsetWidth)
            .height(globeEl.current!.offsetHeight)
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
    <div className='w-full py-16 bg-[#F6F6F6]'>
        <section className='lg:block flex flex-col relative max-container 2xl:w-[85%] w-[95%] lg:h-[500px] mx-auto'>
            {/* <div className="absolute top-0 left-0 w-full h-full bg-white/60 z-10 rounded-[1.2rem]"></div> */}
            <div className='w-full flex justify-end'>
                <div className=' xl:w-[70%] lg:w-[55%] md:h-[500px] h-[350px] flex justify-end'>
                    {/* <Image 
                        src={about_map}
                        alt='About map'
                        className='w-full h-full object-cover'
                    /> */}
                    <div
                        className='w-full h-full '
                        ref={globeEl}
                        aria-label="Interactive globe showing countries where you can send money"
                    />
                </div>
            </div>
            <div className='pops lg:absolute inset-0 md:max-w-[550px] flex flex-col justify-center gap-6 z-[10]'>
                <Typography
                    typo="body-medium-regular"
                    className='text-app-primary'
                >
                    About Us
                </Typography>
                <Typography
                    typo="header-3-medium"
                    className='text-gray-600 md:!text-[2.2rem]  !leading-snug'
                >
                    Innovating Today for Africa’s Digital Future
                </Typography>
                <Typography
                    typo="body-medium-regular"
                    className='w-[90%] !font-extralight'
                >
                    Heirs Technologies is Africa&apos;s premier technology company dedicated to delivering cutting-edge solutions tailored for the African market. We are revolutionising the technology landscape with a strong pipeline of technical engineers to support Africa’s digital transformation.
                </Typography>
            </div>
        </section>
    </div>
  )
}

export default HomeAbout