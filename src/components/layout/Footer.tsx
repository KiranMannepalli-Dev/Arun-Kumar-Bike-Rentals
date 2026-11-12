"use client";

import Link from 'next/link';
import { Instagram, Youtube, Facebook, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import Image from 'next/image';
const logoSrc = '/Second Logo for Winev.png';
import { SITE_CONFIG } from '@/config/site';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const links = {
    quick: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/faq', label: 'FAQ' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms and Conditions' },
    ],
    services: [
      { href: '/#rental-plans', label: 'Hourly Rental' },
      { href: '/#rental-plans', label: 'Daily Rental' },
      { href: '/#rental-plans', label: 'Weekly Rental' },
      { href: '/#rental-plans', label: 'Monthly Rental' },
    ],
  };

  const social = [
    { name: 'instagram', href: SITE_CONFIG.instagram, icon: Instagram },
    { name: 'youtube', href: '#', icon: Youtube },
    { name: 'facebook', href: '#', icon: Facebook },
  ];

  return (
    <footer className="bg-zinc-50/80 border-t border-border/50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logoSrc} alt="Winev Logo" width={80} height={32} className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-black/70 text-xs max-w-xs leading-relaxed">
              {SITE_CONFIG.description.split('.')[0]}.
            </p>
            <div className="flex space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="text-black/60 hover:text-emerald-900 transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 min-w-0">
            <h3 className="font-bold text-emerald-900 tracking-wider text-xs sm:text-sm uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {links.quick.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-black/70 hover:text-primary transition-colors text-xs font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 min-w-0">
            <h3 className="font-bold text-emerald-900 tracking-wider text-xs sm:text-sm uppercase">Services</h3>
            <ul className="mt-4 space-y-2">
              {links.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-black/70 hover:text-primary transition-colors text-xs font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1 min-w-0">
            <h3 className="font-bold text-emerald-900 tracking-wider text-sm uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-xs">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-emerald-900 mr-3 shrink-0 mt-0.5" />
                <span className="text-black/70 font-medium">{SITE_CONFIG.address.full}</span>
              </li>
              <li className="flex flex-col space-y-1.5 pl-7">
                <div className="flex items-center -ml-7">
                  <Phone className="h-4 w-4 text-emerald-900 mr-3 shrink-0" />
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-black/70 hover:text-emerald-900 font-medium transition-colors">
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center">
                  <a href={`tel:${SITE_CONFIG.phone2}`} className="text-black/70 hover:text-emerald-900 font-medium transition-colors">
                    {SITE_CONFIG.phone2Display}
                  </a>
                  <Badge variant="outline" className="ml-2 text-[8px] h-3.5 px-1 bg-emerald-50 text-emerald-900 border-emerald-900/20">Secondary</Badge>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-emerald-900 mr-3 shrink-0 mt-0.5" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-black/70 hover:text-emerald-900 font-medium transition-colors break-all">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 text-emerald-900 mr-3 shrink-0 mt-0.5" />
                <span className="text-black/70 font-medium flex flex-wrap items-center gap-1.5 leading-relaxed">
                  <span>{SITE_CONFIG.hours.split('Busy Day')[0].trim()}</span>
                  <span className="px-1.5 py-0.5 rounded bg-red-50 text-red-600 text-[9px] font-bold border border-red-100 uppercase tracking-tight shadow-sm">
                    Busy Day
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-border/50 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-black/60">
          <p>&copy; {currentYear ? `${currentYear} ` : ''}{SITE_CONFIG.legalName}. All Rights Reserved.</p>
          <div className="mt-4 sm:mt-0 flex flex-col items-center sm:items-end gap-2">
            <p className="flex items-center gap-1.5 font-medium">
              Made with <Heart className="h-3.5 w-3.5 text-destructive fill-destructive" /> in Hyderabad
            </p>
            <a
              href="https://www.tekloria.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tekloria Solutions website"
              className="flex items-center gap-2 group opacity-90 hover:opacity-100 transition-opacity"
            >
              <span className="text-[10px] text-black/60">Designed &amp; Coded by</span>
              <span className="inline-flex items-center rounded-md bg-zinc-950 px-2.5 py-1 shadow-sm border border-zinc-800 group-hover:border-primary/60 transition-colors">
                <Image 
                  src="/Tekloria Logo.png" 
                  alt="Tekloria Solutions" 
                  width={96} 
                  height={22} 
                  className="h-3.5 sm:h-4 w-auto object-contain"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
