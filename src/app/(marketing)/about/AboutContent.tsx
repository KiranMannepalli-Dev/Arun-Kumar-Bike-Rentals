"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Building, Target, Users, Bike as BikeIcon } from 'lucide-react';

const SCOOTER_COLORS = [
  {
    id: "cyan-blue",
    name: "Electric Cyan",
    hex: "#06B6D4",
    imageUrl: "/Bikes/Scooter png 1.jpg",
  },
  {
    id: "crimson-red",
    name: "Crimson Red",
    hex: "#DC2626",
    imageUrl: "/Bikes/Scooter png 2.png",
  },
  {
    id: "sunset-orange",
    name: "Sunset Orange",
    hex: "#EA580C",
    imageUrl: "/Bikes/Scooter png 3.png",
  },
  {
    id: "royal-blue",
    name: "Cobalt Blue",
    hex: "#1D4ED8",
    imageUrl: "/Bikes/Scooter png 4.png",
  },
  {
    id: "pearl-white",
    name: "Pearl White",
    hex: "#F4F4F5",
    imageUrl: "/Bikes/Scooter png 5.png",
  },
  {
    id: "stealth-black",
    name: "Stealth Black",
    hex: "#18181B",
    imageUrl: "/Bikes/Scooter png 6.png",
  },
];

export default function AboutContent() {
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveColorIndex((prev) => (prev + 1) % SCOOTER_COLORS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const teamMembers = [
    { name: 'Y. Arun Kumar', role: 'Founder', image: '/Arun 1.jpeg' },
    { name: 'D. Anil Kumar', role: 'Founder', avatar: 'AK' },
    { name: 'Vishnu', role: 'Operations', image: '/Vishnu Operation team winev.jpeg' },
    { name: 'Kiran', role: 'Operations', image: '/Core Team operations-1.jpeg' },
    { name: 'Ella', role: 'Customer Success', image: '/Ella Operation team winev.png' },
  ];

  return (
    <div className="pt-12 bg-white">
      <section className="relative w-full bg-white overflow-hidden border-b border-zinc-200">
        <div className="container max-w-6xl py-6 md:py-10 flex items-center md:min-h-[280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center w-full">
            {/* Left Side: Content */}
            <div className="relative z-10 min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 mb-3">
                <BikeIcon className="h-3.5 w-3.5 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">About Our Brand</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-headline font-semibold text-zinc-950 tracking-tight leading-tight mb-3">
                About <span className="text-primary italic">us</span>
              </h1>
              
              <p className="text-xs sm:text-sm md:text-base text-zinc-700 leading-relaxed text-left sm:text-justify tracking-tight max-w-2xl mb-5">
                Revolutionizing urban mobility in Hyderabad since 2025. We started with a mission to provide sustainable, premium electric transportation that makes city travel effortless, reliable, and eco-friendly for every citizen.
              </p>

              <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                  <div className="text-center">
                      <p className="text-xl font-bold text-zinc-950">2025</p>
                      <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Launched</p>
                  </div>
                  <div className="h-8 w-[1px] bg-zinc-200" />
                  <div className="text-center">
                      <p className="text-xl font-bold text-zinc-950">15+</p>
                      <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Fleet</p>
                  </div>
                  <div className="h-8 w-[1px] bg-zinc-200" />
                  <div className="text-left">
                      <div className="flex items-center gap-1.5">
                        <span 
                          className="h-2.5 w-2.5 rounded-full transition-colors duration-500 inline-block shadow-xs border border-zinc-200" 
                          style={{ backgroundColor: SCOOTER_COLORS[activeColorIndex].hex }}
                        />
                        <p className="text-xs sm:text-sm font-bold text-zinc-950 transition-all duration-300">
                          {SCOOTER_COLORS[activeColorIndex].name}
                        </p>
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-primary font-bold">6 Colors</p>
                  </div>
              </div>
            </div>

            {/* Mobile Scooter Visual with Stationary In-Place Color Transition */}
            <div className="flex md:hidden flex-col items-center justify-center mt-2">
              <div className="relative w-48 sm:w-60 h-36 sm:h-44">
                {SCOOTER_COLORS.map((color, idx) => (
                  <Image
                    key={color.id}
                    src={color.imageUrl}
                    alt={`Winev Scooter - ${color.name}`}
                    width={320}
                    height={240}
                    sizes="224px"
                    quality={75}
                    className={`absolute inset-0 w-full h-full object-contain mix-blend-multiply transition-opacity duration-700 ease-in-out ${
                      idx === activeColorIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                    priority={idx === 0}
                  />
                ))}
              </div>
              {/* Color dots */}
              <div className="flex items-center gap-1.5 mt-2">
                {SCOOTER_COLORS.map((color, idx) => (
                  <button
                    key={color.id}
                    type="button"
                    onClick={() => setActiveColorIndex(idx)}
                    aria-label={color.name}
                    className={`h-2 rounded-full transition-all duration-300 border border-zinc-300/40 ${
                      idx === activeColorIndex ? "w-5 scale-110 shadow-xs" : "w-2 opacity-60 hover:opacity-100"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Placeholder to maintain desktop grid spacing */}
            <div className="hidden md:block" />
          </div>
        </div>

        {/* Right Side: Image Fixed to Absolute Edge of Section with Stationary In-Place Color Transition */}
        <div className="absolute right-0 bottom-0 h-full w-1/2 hidden md:block pointer-events-none select-none">
          <div className="relative h-full w-full flex items-end justify-end overflow-visible">
            {SCOOTER_COLORS.map((color, idx) => (
              <Image
                key={color.id}
                src={color.imageUrl}
                alt={`Winev Scooter - ${color.name}`}
                width={800}
                height={600}
                sizes="480px"
                quality={75}
                className={`absolute bottom-0 right-0 w-auto h-[85%] lg:h-[95%] object-contain object-bottom mix-blend-multiply mr-24 md:mr-48 lg:mr-56 transition-opacity duration-700 ease-in-out ${
                  idx === activeColorIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
                priority={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-6 md:py-10 bg-white">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content Side */}
            <div className="flex flex-col justify-center space-y-3">
              <div className="h-[1.5px] w-8 bg-primary rounded-full" />
              <h2 className="text-xl md:text-2xl font-headline font-semibold text-zinc-950 tracking-tight leading-tight">
                Our Journey <span className="text-primary">and Story</span>
              </h2>
              
              <div className="space-y-3 text-zinc-700">
                <p className="text-xs sm:text-sm leading-relaxed text-left sm:text-justify tracking-tight">
                  Founded in 2025, Winev Scooter Rental started with a mission to provide affordable, sustainable transportation in Hyderabad. We saw growing congestion and knew there had to be a better way to get around.
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-left sm:text-justify tracking-tight">
                  From ten scooters, we've grown into a trusted local name with a fleet of 15+ premium EVs, dedicated to exceptional service and a greener future for urban mobility.
                </p>
              </div>
              
              <div className="pt-1 flex items-center gap-6">
                  <div>
                      <p className="text-lg font-bold text-zinc-950">2025</p>
                      <p className="text-[10px] uppercase tracking-wider text-primary font-bold">Launched</p>
                  </div>
                  <div className="h-6 w-[1px] bg-zinc-200" />
                  <div>
                      <p className="text-lg font-bold text-zinc-950">15+</p>
                      <p className="text-[10px] uppercase tracking-wider text-primary font-bold">Scooters</p>
                  </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="flex justify-center md:justify-end">
              <div className="relative group w-full max-w-[260px] sm:max-w-[300px] md:max-w-md">
                <div className="hidden sm:block absolute -bottom-2 -right-2 w-full h-full border border-primary/25 pointer-events-none" />
                
                <div className="relative overflow-hidden rounded-2xl shadow-xl border border-zinc-200 bg-zinc-50">
                  <Image
                    src="/Arun 1.jpeg"
                    alt="Arun - Founder"
                    width={500}
                    height={600}
                    sizes="(max-width: 768px) 300px, 448px"
                    quality={75}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                  />
                  
                  {/* Targeted Bottom Overlay for Contrast */}
                  <div className="absolute bottom-0 inset-x-0 h-[24%] bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-4 right-4">
                      <p className="text-white font-medium text-sm tracking-tight leading-tight">Y. Arun Kumar & D. Anil Kumar</p>
                      <p className="text-emerald-300 text-[9px] uppercase tracking-widest font-bold">Founders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-6 md:py-10 bg-zinc-50/70 border-y border-zinc-200">
        <div className="container max-w-4xl px-2 sm:px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-headline font-semibold text-zinc-950 tracking-tight">Our Mission <span className="text-primary">&amp; Values</span></h2>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-600">
              Guided by a core set of values that define our service.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-3 md:grid-cols-3 gap-2 sm:gap-3 md:gap-5 text-center">
            <div className="p-2 sm:p-2.5 md:p-3 bg-white/80 md:bg-transparent rounded-xl md:rounded-none border border-zinc-200/80 md:border-0 shadow-xs md:shadow-none flex flex-col items-center h-full">
              <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 mx-auto rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                <Target className="h-4 w-4 md:h-5 md:w-5 text-primary"/>
              </div>
              <h3 className="mt-2 md:mt-2.5 text-[11px] sm:text-sm font-bold text-zinc-950 leading-tight md:leading-normal">Our Mission</h3>
              <p className="mt-1 text-[10px] sm:text-xs leading-snug md:leading-relaxed text-zinc-600 text-center">To provide seamless urban travel solutions that enhance our city's health.</p>
            </div>
            <div className="p-2 sm:p-2.5 md:p-3 bg-white/80 md:bg-transparent rounded-xl md:rounded-none border border-zinc-200/80 md:border-0 shadow-xs md:shadow-none flex flex-col items-center h-full">
              <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 mx-auto rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                <Building className="h-4 w-4 md:h-5 md:w-5 text-primary"/>
              </div>
              <h3 className="mt-2 md:mt-2.5 text-[11px] sm:text-sm font-bold text-zinc-950 leading-tight md:leading-normal">Our Vision</h3>
              <p className="mt-1 text-[10px] sm:text-xs leading-snug md:leading-relaxed text-zinc-600 text-center">To be Hyderabad's leading micro-mobility provider with accessible EVs.</p>
            </div>
            <div className="p-2 sm:p-2.5 md:p-3 bg-white/80 md:bg-transparent rounded-xl md:rounded-none border border-zinc-200/80 md:border-0 shadow-xs md:shadow-none flex flex-col items-center h-full">
              <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 mx-auto rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                <Users className="h-4 w-4 md:h-5 md:w-5 text-primary"/>
              </div>
              <h3 className="mt-2 md:mt-2.5 text-[11px] sm:text-sm font-bold text-zinc-950 leading-tight md:leading-normal">Our Values</h3>
              <p className="mt-1 text-[10px] sm:text-xs leading-snug md:leading-relaxed text-zinc-600 text-center">Customer-centricity, Sustainability, Reliability, and Innovation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 bg-white">
        <div className="container max-w-4xl px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl font-headline font-semibold text-center text-zinc-950 mb-6 tracking-tight">Core <span className="text-primary">Team</span></h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 max-w-4xl mx-auto gap-2 sm:gap-3 md:gap-4">
            {teamMembers.slice(2).map((member) => (
              <div
                key={member.name}
                className="transition-transform duration-200 hover:-translate-y-1 h-full"
              >
                <Card className="text-center rounded-xl md:rounded-2xl border border-zinc-200 bg-white shadow-xs md:shadow-sm hover:border-primary/40 transition-colors h-full">
                  <CardContent className="p-2.5 sm:p-4 md:p-6 flex flex-col items-center justify-center h-full">
                    <Avatar className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 mx-auto border-2 border-emerald-100 shadow-inner">
                      <Image
                        src={member.image || `https://picsum.photos/seed/${member.avatar}/80/80`}
                        alt={member.name}
                        width={80}
                        height={80}
                        quality={75}
                        className="h-full w-full object-cover"
                      />
                      <AvatarFallback className="bg-emerald-50 text-primary text-xs font-bold">{member.avatar}</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm font-semibold text-zinc-950 tracking-tight leading-tight">{member.name}</h3>
                    <p className="text-[10px] sm:text-[11px] text-primary font-semibold mt-0.5 sm:mt-1">{member.role}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
