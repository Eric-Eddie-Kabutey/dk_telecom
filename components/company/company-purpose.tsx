'use client';
import React, { useEffect, useRef } from 'react'
import Typography from '../shared/typography';
import { Separator } from '../ui/separator';
import * as THREE from 'three';


function CompanyPurpose() {
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
    <div className='w-full md:py-20 py-12 bg-[#F4F4F4]'>
      <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex lg:flex-row flex-col justify-between lg:gap-20 gap-5'>
        <div className='xs:block hidden lg:w-1/2 sm:w-full'>
            {/* <Image 
              src={africanMap}
              alt='African map'
              className='w-full h-full'
            /> */}
            <div
                  className=' w-full h-[550px]'
                  ref={globeEl}
                  aria-label="Interactive globe showing countries where you can send money"
              />
        </div>
        <div className='flex-1 lg:pt-6'>
          <div className='xl:w-[90%] lg:w-[80%] flex flex-col xl:gap-8 md:gap-4 gap-8'>
            <Typography
              typo="body-medium-regular"
              className='!leading-relaxed text-gray-600'
            >
              At DK Telecom, we believe that the future of The Gambia lies in its ability to stay connected — not just to the 
              world, but to opportunity, progress, and each other. As a proudly Gambian-owned company, our work goes beyond 
              business. It’s about creating access, building digital bridges, and supporting the people and enterprises shaping 
              tomorrow’s Gambia. Our commitment is simple: technology that empowers, service that delivers, and solutions 
              designed for the real needs of our communities.
            </Typography>
            <Separator />
            <div className='flex flex-col gap-4'>
              <Typography
                typo="header-5-semibold"
                className='text-gray-600'
              >
                Our Purpose
              </Typography>
              <Typography
                typo="body-medium-regular"
                className='!leading-relaxed text-gray-600'
              >
                To connect communities, grow businesses, and support national progress through accessible, reliable 
                technology made for The Gambia.
              </Typography>
            </div>
            <Separator />
            <div className='flex flex-col gap-4'>
              <Typography
                typo="header-5-semibold"
                className='text-gray-600'
              >
                Our Promise
              </Typography>
              <Typography
                typo="body-medium-regular"
                className='!leading-relaxed text-gray-600'
              >
                We deliver dependable internet, practical ICT solutions, and responsive support because our customers 
                deserve connections they can count on, and service that puts them first.
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CompanyPurpose