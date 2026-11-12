"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { SITE_CONFIG } from '@/config/site';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let prevScrollY = window.scrollY;
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > 50 && currentScrollY > prevScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b will-change-transform",
        hidden ? "-translate-y-full" : "translate-y-0",
        isScrolled 
          ? "bg-white/85 backdrop-blur-md border-zinc-200 shadow-sm" 
          : "bg-white border-zinc-100"
      )}
    >
      <div className="container mx-auto flex h-12 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Second Logo for Winev.png" alt="Winev Logo" width={80} height={32} className="h-8 w-auto object-contain" />
        </Link>
        <nav className="hidden lg:flex items-center gap-6 ml-auto mr-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs font-medium text-zinc-900 transition-colors hover:text-primary",
                pathname === link.href && "text-primary font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 text-xs font-medium text-zinc-900 hover:text-primary transition-colors">
                <Phone className="h-3.5 w-3.5 text-primary" />
                {SITE_CONFIG.phoneDisplay}
            </a>
          <Button asChild size="sm">
            <a href={buildWhatsAppUrl("Hello Winev! I would like to book an electric scooter rental.")} target="_blank" rel="noopener noreferrer">Book a Ride</a>
          </Button>
        </div>
        <div className="lg:hidden">
          {isMounted && (
            <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-zinc-900 hover:text-primary">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white border-zinc-200 text-zinc-900 mt-2">
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "w-full cursor-pointer text-zinc-900",
                        pathname === link.href && "text-primary font-semibold"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="bg-zinc-200" />
                <DropdownMenuItem asChild>
                  <a href={buildWhatsAppUrl("Hello Winev! I would like to book an electric scooter rental.")} target="_blank" rel="noopener noreferrer" className="w-full cursor-pointer text-primary font-semibold">
                    Book a Ride
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
}
