"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Building, Target, Users, Bike as BikeIcon } from 'lucide-react';

export default function AboutContent() {
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

              <div className="flex items-center gap-6 sm:gap-8">
                  <div className="text-center">
                      <p className="text-xl font-bold text-zinc-950">2025</p>
                      <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Launched</p>
                  </div>
                  <div className="h-8 w-[1px] bg-zinc-200" />
                  <div className="text-center">
                      <p className="text-xl font-bold text-zinc-950">15+</p>
                      <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Fleet</p>
                  </div>
              </div>
            </div>

            {/* Mobile Scooter Visual */}
            <div className="flex md:hidden justify-center">
              <Image
                src="/Bikes/Scooter png 1.jpg"
                alt="Premium Winev Scooter"
                width={320}
                height={240}
                sizes="224px"
                quality={75}
                className="w-44 sm:w-56 h-auto object-contain mix-blend-multiply"
                priority
              />
            </div>

            {/* Placeholder to maintain desktop grid spacing */}
            <div className="hidden md:block" />
          </div>
        </div>

        {/* Right Side: Image Fixed to Absolute Edge of Section */}
        <div className="absolute right-0 bottom-0 h-full w-1/2 hidden md:block pointer-events-none select-none">
          <div className="relative h-full w-full flex items-end justify-end overflow-visible">
            <Image
              src="/Bikes/Scooter png 1.jpg"
              alt="Premium Winev Scooter"
              width={800}
              height={600}
              sizes="480px"
              quality={75}
              className="w-auto h-[85%] lg:h-[95%] object-contain object-bottom z-10 mix-blend-multiply mr-24 md:mr-48 lg:mr-56" 
              priority
            />
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
        <div className="container max-w-4xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-headline font-semibold text-zinc-950 tracking-tight">Our Mission <span className="text-primary">&amp; Values</span></h2>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-600">
              Guided by a core set of values that define our service.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
            <div className="p-2">
              <div className="h-10 w-10 mx-auto rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <Target className="h-5 w-5 text-primary"/>
              </div>
              <h3 className="mt-2.5 text-sm font-bold text-zinc-950">Our Mission</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-600 text-center">To provide seamless urban travel solutions that enhance our city's health.</p>
            </div>
            <div className="p-2">
              <div className="h-10 w-10 mx-auto rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <Building className="h-5 w-5 text-primary"/>
              </div>
              <h3 className="mt-2.5 text-sm font-bold text-zinc-950">Our Vision</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-600 text-center">To be Hyderabad's leading micro-mobility provider with accessible EVs.</p>
            </div>
            <div className="p-2">
              <div className="h-10 w-10 mx-auto rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary"/>
              </div>
              <h3 className="mt-2.5 text-sm font-bold text-zinc-950">Our Values</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-600 text-center">Customer-centricity, Sustainability, Reliability, and Innovation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-headline font-semibold text-center text-zinc-950 mb-6 tracking-tight">Core <span className="text-primary">Team</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto gap-4">
            {teamMembers.slice(2).map((member) => (
              <div
                key={member.name}
                className="transition-transform duration-200 hover:-translate-y-1"
              >
                <Card className="text-center rounded-2xl border border-zinc-200 bg-white shadow-sm hover:border-primary/40 transition-colors">
                  <CardContent className="p-5 sm:p-6">
                    <Avatar className="h-20 w-20 mx-auto border-2 border-emerald-100 shadow-inner">
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
                    <h3 className="mt-4 text-sm font-semibold text-zinc-950 tracking-tight">{member.name}</h3>
                    <p className="text-[11px] text-primary font-semibold mt-1">{member.role}</p>
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
