
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { SITE_CONFIG } from '@/config/site';
import { HOME_FAQ_ITEMS } from '@/lib/seo';
import { ShieldCheck, Star, Bike as BikeIcon, ArrowRight, CreditCard, UserCheck, GraduationCap, Leaf, Search, IndianRupee } from 'lucide-react';
import { motion } from "framer-motion";
import { ScooterShowcase } from '@/components/ScooterShowcase';

const LeadCaptureModal = dynamic(
    () => import('@/components/LeadCaptureModal').then((m) => m.LeadCaptureModal),
    { ssr: false }
);
const ContactModal = dynamic(
    () => import('@/components/ContactModal').then((m) => m.ContactModal),
    { ssr: false }
);

const whyChooseUsItems = [
    {
        icon: IndianRupee,
        title: "Affordable EV Rentals",
        description: "Premium rides that fit your budget, starting as low as ₹35 per hour."
    },
    {
        icon: UserCheck,
        title: "Flexible Rental Plans",
        description: "From hourly errands to monthly commutes, we have a plan for every need."
    },
    {
        icon: Search,
        title: "Easy Online Booking",
        description: "Hassle-free booking instantly via WhatsApp and smooth documentation."
    },
    {
        icon: Leaf,
        title: "Eco-Friendly Electric Bikes",
        description: "Zero emissions, 100% sustainable. Join the green revolution in Hyderabad."
    },
    {
        icon: ShieldCheck,
        title: "Smooth and Reliable Rides",
        description: "Well-maintained, sanitized, and GPS-tracked fleet for your absolute safety."
    }
];

const rentalPlans = [
    {
        id: "hourly",
        title: "Hourly Rentals",
        subtitle: "Perfect for short rides around the city.",
        price: "₹35",
        unit: "per hour",
        details: [
            { label: "Minimum Booking", value: "12 hours" },
            { label: "Ideal for", value: "Quick trips, errands & short commutes" }
        ],
        highlight: false
    },
    {
        id: "daily",
        title: "Daily Rentals",
        subtitle: "Best option for full-day usage and city travel.",
        price: "₹449",
        unit: "per day",
        details: [
            { label: "Hourly Rate", value: "₹18.75 /hr" },
            { label: "Ideal for", value: "Daily commuting & city exploration" }
        ],
        highlight: false
    },
    {
        id: "weekly",
        title: "Weekly Rentals",
        subtitle: "Great for longer usage with better savings.",
        price: "₹2,199",
        unit: "per week",
        details: [
            { label: "Per Day", value: "₹366" },
            { label: "Per Hour", value: "₹35" },
            { label: "Ideal for", value: "Work commute & extended usage" }
        ],
        highlight: true
    },
    {
        id: "monthly",
        title: "Monthly Rentals",
        subtitle: "Most economical option for regular riders.",
        price: "₹8,799",
        unit: "per month",
        details: [
            { label: "Weekly Equivalent", value: "₹2,199" },
            { label: "Ideal for", value: "Daily commuters & maximum savings" }
        ],
        highlight: false
    }
];

const howItWorksSteps = [
    {
        step: 1,
        title: "Choose Your Color & Plan",
        description: "Preview the VIDA VX2 Plus in your favorite shade and pick an hourly, daily, weekly, or monthly rental plan."
    },
    {
        step: 2,
        title: "Book via WhatsApp",
        description: `Send a message to ${SITE_CONFIG.phoneDisplay} to confirm your rental instantly.`
    },
    {
        step: 3,
        title: "Pick Up & Ride",
        description: "Visit our location, pick up your sanitized scooter, and start your journey."
    }
];

const testimonials = [
    {
        name: "Mothilal Dharavath",
        role: "Verified Rider",
        avatar: "MD",
        image: "/indian_man_customer_1_1773649197608.png",
        text: "The best service in Hyderabad. Really good response and great communication with customers. Highly recommended! ❤️"
    },
    {
        name: "Pavanchowdary",
        role: "Daily Commuter",
        avatar: "P",
        image: "/indian_man_customer_3_1773649257654.png",
        text: "Smooth ride, low cost, best EV rental experience in the city. Truly value for money. 👍"
    },
    {
        name: "PASUNURI RAMU",
        role: "Frequent User",
        avatar: "PR",
        image: "/indian_man_customer_2_1773649217238.png",
        text: "My friend took a scooty on rent here. They have all new scooties and they even provided free charging! Excellent service."
    },
    {
        name: "Lala",
        role: "Verified Rider",
        avatar: "L",
        image: "/indian_woman_customer_1_1773649236229.png",
        text: "Great experience with Winev. Their services are very professional and the cost is very friendly for students and professionals alike."
    },
    {
        name: "Santosh P",
        role: "Local Guide",
        avatar: "SP",
        image: "/indian_man_customer_4_1773649277389.png",
        text: "Good rental service available all over Hyderabad and Telangana. The bikes are well-maintained and reliable."
    },
    {
        name: "Dharavath Anil",
        role: "Verified Rider",
        avatar: "DA",
        image: "/indian_woman_customer_2_1773649297395.png",
        text: "The best and most friendly service in Hyderabad. The staff is very cooperative and helpful throughout the process."
    }
];

export default function HomeContent() {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [leadBikeName, setLeadBikeName] = useState("VIDA VX2 Plus");

    const openLeadModal = (bikeName?: string) => {
        setLeadBikeName(bikeName || "VIDA VX2 Plus");
        setIsLeadModalOpen(true);
    };

    const openContactModal = () => {
        setIsContactModalOpen(true);
    };

    return (
        <div className="pt-12 bg-white">
            <HeroSection onWhatsAppClick={() => openLeadModal("VIDA VX2 Plus Rental")} />
            <StatsSection />
            <ScooterShowcase onBookScooter={(scooterLabel) => openLeadModal(scooterLabel)} />
            <RentalPlansSection />
            <WhyChooseUs />
            <HowItWorks />
            <VideoSection />
            <DocumentsSection />
            <Testimonials />
            <FaqSection />
            <CtaSection onCtaClick={openContactModal} />
            
            {isLeadModalOpen && (
                <LeadCaptureModal 
                    isOpen={isLeadModalOpen} 
                    onClose={() => setIsLeadModalOpen(false)} 
                    bikeName={leadBikeName} 
                />
            )}
            
            {isContactModalOpen && (
                <ContactModal 
                    isOpen={isContactModalOpen} 
                    onClose={() => setIsContactModalOpen(false)} 
                />
            )}
        </div>
    );
}

function HeroHeadline() {
    return (
        <span className="inline-block">
            <span className="md:hidden">
                Premium EV Scooter{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-primary to-emerald-500">
                    Rentals
                </span>
            </span>
            <span className="hidden md:inline">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-primary to-emerald-500">
                    Premium Rides
                </span>{" "}
                for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-primary to-emerald-500">
                    Every Journey
                </span>
                .
            </span>
        </span>
    );
}

function HeroSection({ onWhatsAppClick }: { onWhatsAppClick: () => void }) {
    return (
        <section className="relative md:min-h-[400px] text-zinc-950 overflow-hidden bg-white flex items-center py-6 md:py-8">
            <div className="container relative z-10 px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                    <div className="w-full max-w-xl z-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 mb-3">
                            <BikeIcon className="h-3.5 w-3.5 text-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">Premium Mobility</span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-bold tracking-tight text-zinc-950 leading-[1.2] mb-2">
                            <HeroHeadline />
                        </h1>
                        <p className="mt-2 text-xs sm:text-sm md:text-[15px] text-zinc-700 max-w-md leading-relaxed font-medium">
                            Rent from our fleet of 15+ premium electric scooters in Hyderabad from ₹35/hr. <br className="hidden md:block" />
                            Minimal deposit, GPS tracked &amp; cleaned fleet. Book on WhatsApp instantly.
                        </p>
                        <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-start">
                            <Button 
                                size="lg" 
                                className="w-full sm:w-auto sm:min-w-[168px] shadow-lg shadow-primary/25 hover:scale-[1.02] bg-primary text-white border-none group" 
                                onClick={onWhatsAppClick}
                            >
                                <span>Book Now</span>
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto sm:min-w-[168px] border-zinc-300 text-zinc-900 hover:border-primary hover:text-primary"
                            >
                                <Link href="#scooter-details">Scooter &amp; Colors</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative flex justify-center md:justify-end items-center z-10 mt-2 md:mt-0">
                        <div className="relative w-full max-w-[160px] sm:max-w-[200px] md:max-w-[210px] lg:max-w-[230px]">
                            <Image
                                src={'/Bikes/Hero BG web and Tab home page.png'}
                                alt="Premium Winev Scooter"
                                width={480}
                                height={360}
                                sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 230px"
                                quality={75}
                                className="w-full h-auto object-contain drop-shadow-[0_12px_25px_rgba(22,136,70,0.2)] z-10"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatsSection() {
    return (
        <section className="bg-zinc-50/80 border-y border-zinc-200">
            <div className="container py-3 md:py-2.5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0 md:gap-2 text-center items-center">
                    <div className="p-2 sm:p-2.5 border-r border-zinc-200">
                        <p className="text-lg sm:text-xl font-bold text-primary tracking-tight">{SITE_CONFIG.stats.range}</p>
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-zinc-700 font-semibold mt-0.5">Top Range</p>
                    </div>
                    <div className="p-2 sm:p-2.5 md:border-r border-zinc-200">
                        <p className="text-lg sm:text-xl font-bold text-primary tracking-tight">{SITE_CONFIG.stats.speed}</p>
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-zinc-700 font-semibold mt-0.5">Top Speed</p>
                    </div>
                    <div className="p-2 sm:p-2.5 border-r border-t md:border-t-0 border-zinc-200">
                        <p className="text-lg sm:text-xl font-bold text-primary tracking-tight">₹{SITE_CONFIG.stats.weeklyRent}</p>
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-zinc-700 font-semibold mt-0.5">Weekly Rent</p>
                    </div>
                    <div className="p-2 sm:p-2.5 border-t md:border-t-0 border-zinc-200">
                        <p className="text-lg sm:text-xl font-bold text-primary tracking-tight">₹{SITE_CONFIG.stats.deposit}</p>
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-zinc-700 font-semibold mt-0.5">Minimal Deposit</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WhyChooseUs() {
    return (
        <section className="py-6 md:py-10 bg-white overflow-hidden">
            <div className="container relative">
                <div className="text-center max-w-2xl mx-auto mb-6">
                    <Badge variant="outline" className="mb-2 border-emerald-200 bg-emerald-50 text-emerald-700 py-1 px-4 text-[10px] tracking-widest uppercase font-bold">The Winev Advantage</Badge>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-headline font-semibold text-zinc-950 tracking-tight">Why Choose <span className="text-primary">Winev?</span></h2>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-600 max-w-lg mx-auto leading-relaxed">
                        We don't just rent bikes; we provide a seamless, sustainable, and premium mobility experience tailored for Hyderabad.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
                    {whyChooseUsItems.map((item) => (
                        <div key={item.title}>
                            <Card className="h-full rounded-2xl border border-zinc-200 bg-white hover:border-primary/40 shadow-sm transition-colors group">
                                <CardContent className="p-4 sm:p-5 text-center flex flex-col items-center">
                                    <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
                                        <item.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-1.5">{item.title}</h3>
                                    <p className="text-xs text-zinc-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function RentalPlansSection() {
    return (
        <section id="rental-plans" className="py-6 md:py-10 bg-zinc-50/70 border-y border-zinc-200 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center max-w-5xl mx-auto mb-7">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-headline font-semibold text-zinc-950 tracking-tight">Our <span className="text-primary">Rental Plans</span></h2>
                    <div className="h-1 w-14 bg-primary mx-auto my-3 rounded-full" />
                    <p className="mt-2 text-xs sm:text-sm md:text-[13px] lg:text-sm text-zinc-600 leading-relaxed md:whitespace-nowrap">
                        At Winev Bike Rentals, we provide flexible rental options so you can ride when you want and for as long as you need.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                    {rentalPlans.map((plan) => (
                        <div key={plan.id}>
                            <Card className={`h-full rounded-2xl relative overflow-hidden transition-colors duration-200 ${
                                plan.highlight 
                                ? 'bg-white border-2 border-primary shadow-[0_8px_30px_rgba(22,136,70,0.12)] lg:scale-[1.02] z-20' 
                                : 'bg-white border-zinc-200 hover:border-emerald-300 shadow-sm z-10'
                            }`}>
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0">
                                        <Badge className="rounded-none rounded-bl-lg bg-primary text-white text-[10px] font-bold py-1 px-3">Most Popular</Badge>
                                    </div>
                                )}
                                
                                <CardHeader className="p-4 sm:p-5 pb-2">
                                    <h3 className={`text-sm sm:text-base font-bold mb-1 ${plan.highlight ? 'text-primary' : 'text-zinc-950'}`}>{plan.title}</h3>
                                    <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">{plan.subtitle}</p>
                                </CardHeader>

                                <CardContent className="p-4 sm:p-5 pt-2">
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className={`text-2xl font-bold ${plan.highlight ? 'text-primary' : 'text-zinc-950'}`}>{plan.price}</span>
                                        <span className="text-xs text-zinc-600">{plan.unit}</span>
                                    </div>
                                    
                                    <div className="space-y-2.5 border-t border-zinc-200 pt-4">
                                        {plan.details.map((detail, dIdx) => (
                                            <div key={dIdx} className="flex flex-col gap-0.5">
                                                <span className="text-[10px] uppercase tracking-widest text-emerald-700 font-bold">{detail.label}</span>
                                                <span className={`text-xs font-medium ${plan.highlight ? 'text-zinc-900' : 'text-zinc-700'}`}>
                                                    {detail.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function HowItWorks() {
    return (
        <section className="py-6 md:py-8 bg-zinc-50/70 border-y border-zinc-200">
             <div className="container">
                <div className="text-center max-w-xl mx-auto">
                    <h2 className="text-xl sm:text-2xl font-headline font-semibold text-zinc-950 tracking-tight">Get Rolling in <span className="text-primary">3 Simple Steps</span></h2>
                    <p className="mt-1.5 text-xs sm:text-sm text-zinc-600">
                        Renting an electric scooter has never been easier.
                    </p>
                </div>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {howItWorksSteps.map((step) => (
                        <div key={step.step} className="text-center p-3">
                            <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 text-primary mx-auto">
                                <span className="text-base font-bold">{step.step}</span>
                            </div>
                            <h3 className="mt-2.5 text-sm sm:text-base font-bold text-zinc-950">{step.title}</h3>
                            <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    );
}

function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-6 md:py-10 bg-white overflow-hidden border-b border-zinc-200">
            <div className="container relative">
                <div className="text-center max-w-2xl mx-auto mb-6">
                    <Badge variant="outline" className="mb-2 border-emerald-200 bg-emerald-50 text-emerald-700 py-1 px-4 text-[10px] tracking-widest uppercase font-bold">Experience the Ride</Badge>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-headline font-semibold text-zinc-950 tracking-tight italic">See Winev in <span className="text-primary not-italic">Action</span></h2>
                </div>
                
                <div className="relative max-w-5xl mx-auto group">
                    <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-zinc-200 bg-zinc-100">
                        {!isPlaying ? (
                            <div className="absolute inset-0 cursor-pointer" onClick={() => setIsPlaying(true)}>
                                <Image
                                    src="https://img.youtube.com/vi/z0WOvmLNTN4/maxresdefault.jpg"
                                    alt="Winev Video Experience"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 1024px"
                                    quality={75}
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300" />
                                
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(22,136,70,0.45)] group-hover:scale-105 active:scale-95 transition-transform duration-200">
                                        <div className="w-0 h-0 border-t-[12px] md:border-t-[14px] border-t-transparent border-l-[20px] md:border-l-[24px] border-l-white border-b-[12px] md:border-b-[14px] border-b-transparent ml-1.5 md:ml-2" />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <iframe 
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/z0WOvmLNTN4?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1" 
                                title="Winev Bike Rental Experience"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function DocumentsSection() {
    const docs = [
        { icon: UserCheck, title: "License & ID", description: "Valid Driving License and Aadhaar Card or PAN Card (Original)." },
        { icon: CreditCard, title: "Address Proof", description: "Proof of local address (Electricity bill, rental agreement, or similar)." },
        { icon: GraduationCap, title: "Student ID (Optional)", description: "College ID for students to unlock exclusive discount rates." }
    ];

    return (
        <section className="py-6 md:py-8 bg-zinc-50/70 border-b border-zinc-200">
            <div className="container">
                <div className="text-center max-w-xl mx-auto mb-5">
                    <h2 className="text-xl sm:text-2xl font-headline font-semibold text-zinc-950 tracking-tight">Required <span className="text-primary">Documents</span></h2>
                    <p className="mt-1.5 text-xs sm:text-sm text-zinc-600">Please bring the following original documents for a quick and easy pickup.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {docs.map((doc, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-3">
                            <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-3">
                                <doc.icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-1.5">{doc.title}</h3>
                            <p className="text-xs text-zinc-600 leading-relaxed">{doc.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Testimonials() {
    return (
        <section id="reviews" className="py-6 md:py-10 bg-white border-b border-zinc-200">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-6">
                    <Badge variant="outline" className="mb-2 border-zinc-200 bg-white shadow-sm py-1 px-3 text-zinc-900">
                        <span className="mr-2 inline-flex">
                            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                        </span>
                        <span className="font-bold text-zinc-950 mr-1">4.9/5</span> Google Rating
                    </Badge>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-headline font-semibold text-zinc-950 tracking-tight">What Our <span className="text-primary">Riders Say</span></h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name} className="relative rounded-2xl overflow-hidden group bg-white border-zinc-200 hover:border-primary/40 shadow-sm transition-all duration-300">
                            <CardContent className="p-4 sm:p-5">
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-10 w-10 border border-emerald-200 shadow-sm">
                                        <Image src={testimonial.image} alt={testimonial.name} width={40} height={40} quality={75} className="h-full w-full object-cover" />
                                        <AvatarFallback className="bg-emerald-50 text-primary text-xs font-bold">{testimonial.avatar}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-bold text-sm text-zinc-950 tracking-tight">{testimonial.name}</p>
                                        <p className="text-[10px] uppercase tracking-widest text-primary font-semibold">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="mt-3 flex gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />)}
                                </div>
                                <p className="mt-3 text-xs sm:text-sm text-zinc-700 leading-relaxed italic">"{testimonial.text}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <Button variant="ghost" size="sm" asChild className="text-zinc-700 hover:text-primary">
                        <a href={SITE_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <span>Read all reviews on Google</span>
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}

function FaqSection() {
    return (
        <section className="py-6 md:py-8 bg-zinc-50/70">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="max-w-md">
                    <h2 className="text-xl sm:text-2xl font-headline font-semibold text-zinc-950 tracking-tight">Common <span className="text-primary">Questions</span></h2>
                    <p className="mt-1.5 text-xs sm:text-sm text-zinc-600">Have a question? We've got answers.</p>
                     <Button asChild size="sm" variant="outline" className="mt-3 border-zinc-300 text-zinc-900 hover:bg-primary hover:text-white hover:border-primary">
                        <Link href="/faq">See All FAQs</Link>
                    </Button>
                </div>
                <div>
                     <Accordion type="single" collapsible className="w-full">
                        {HOME_FAQ_ITEMS.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-zinc-200">
                                <AccordionTrigger className="text-left text-xs sm:text-sm text-zinc-950 hover:text-primary hover:no-underline py-3 font-medium">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-xs sm:text-sm text-zinc-600 pb-3 leading-relaxed">{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

function CtaSection({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="py-6 md:py-8 border-t border-zinc-200 bg-white overflow-hidden">
       <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-left">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-3 border border-emerald-200">
                      <BikeIcon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-zinc-950 mb-2 tracking-tight">Start Your <span className="text-primary italic">Electric</span> Adventure</h2>
                  <p className="text-xs sm:text-sm text-zinc-600 mb-4 leading-relaxed max-w-sm">Join thousands of happy riders in Hyderabad. Experience the future of eco-friendly urban travel with Winev.</p>
                  <div className="flex justify-start">
                      <Button size="lg" className="w-full sm:w-auto sm:min-w-[168px] shadow-md bg-primary text-white hover:scale-[1.02]" onClick={onCtaClick}>Enquire Now &amp; Book</Button>
                  </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative hidden md:flex justify-end items-center">
                <div className="relative z-10 max-w-[280px]">
                    <div className="absolute -right-6 bottom-6 z-0 pointer-events-none">
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 0, y: 0, scale: 0.7 }}
                                animate={{
                                    opacity: [0, 0.42, 0.24, 0],
                                    x: [0, 28 + i * 6, 72 + i * 8],
                                    y: [0, -6 - i * 3, -18 - i * 4],
                                    scale: [0.7, 1.5, 2.6],
                                    filter: ["blur(8px)", "blur(18px)", "blur(30px)"],
                                }}
                                transition={{
                                    duration: 2.8,
                                    repeat: Infinity,
                                    delay: i * 0.65,
                                    ease: "easeOut",
                                }}
                                className="absolute right-0 bottom-0 w-20 h-12 rounded-full bg-gradient-to-r from-zinc-950/80 via-zinc-900/60 to-transparent"
                                style={{ bottom: `${i * 7}px`, right: `${i * -4}px` }}
                            />
                        ))}
                    </div>
                    <Image src="/CTA Section bike png.png" alt="Winev Electric Bike" width={320} height={220} className="w-full h-auto drop-shadow-xl relative z-10" />
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-zinc-950/25 blur-2xl rounded-[100%] pointer-events-none" />
                </div>
              </motion.div>
          </div>
       </div>
    </section>
  )
}