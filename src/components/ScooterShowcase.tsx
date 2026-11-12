"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/config/site";
import {
  BatteryCharging,
  Gauge,
  IndianRupee,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";

type ScooterColorVariant = {
  id: string;
  name: string;
  hex: string;
  imageUrl: string;
  accentNote: string;
};

const SCOOTER_COLORS: ScooterColorVariant[] = [
  {
    id: "cyan-blue",
    name: "Electric Cyan",
    hex: "#06B6D4",
    imageUrl: "/Bikes/Scooter png 1.jpg",
    accentNote: "Signature Dual-Tone Cyan",
  },
  {
    id: "crimson-red",
    name: "Crimson Red",
    hex: "#DC2626",
    imageUrl: "/Bikes/Scooter png 2.png",
    accentNote: "Sporty Gloss Red",
  },
  {
    id: "sunset-orange",
    name: "Sunset Orange",
    hex: "#EA580C",
    imageUrl: "/Bikes/Scooter png 3.png",
    accentNote: "Vibrant Street Orange",
  },
  {
    id: "royal-blue",
    name: "Cobalt Blue",
    hex: "#1D4ED8",
    imageUrl: "/Bikes/Scooter png 4.png",
    accentNote: "Deep Metallic Blue",
  },
  {
    id: "pearl-white",
    name: "Pearl White",
    hex: "#F4F4F5",
    imageUrl: "/Bikes/Scooter png 5.png",
    accentNote: "Classic Matte Pearl",
  },
  {
    id: "stealth-black",
    name: "Stealth Black",
    hex: "#18181B",
    imageUrl: "/Bikes/Scooter png 6.png",
    accentNote: "Graphite & Matte Black",
  },
];

const SCOOTER_SPECS = [
  { icon: Gauge, label: "Top Speed", value: "80 km/h" },
  { icon: Zap, label: "Battery Range", value: "100 km / Charge" },
  { icon: BatteryCharging, label: "Fast Charging", value: "45 min (0–80%)" },
  { icon: Smartphone, label: "Mobile Compatibility", value: "Android & iPhone" },
  { icon: ShieldCheck, label: "Safety & Tracking", value: "GPS Tracked · Disc Brake" },
  { icon: IndianRupee, label: "Security Deposit", value: `₹${SITE_CONFIG.stats.deposit} Refundable` },
];

type ScooterShowcaseProps = {
  onBookScooter: (scooterLabel: string) => void;
};

/** Home-page rental scooter showcase with interactive color selector and full specs. */
export function ScooterShowcase({ onBookScooter }: ScooterShowcaseProps) {
  const [selectedColor, setSelectedColor] = useState<ScooterColorVariant>(
    SCOOTER_COLORS[0]
  );

  const directWhatsAppUrl = `https://wa.me/${
    SITE_CONFIG.whatsapp
  }?text=${encodeURIComponent(
    `Hello Winev! I would like to rent the VIDA VX2 Plus (${selectedColor.name}). Please share availability and booking steps.`
  )}`;

  return (
    <section id="scooter-details" className="py-6 md:py-10 bg-white">
      <div className="container">
        <div className="mb-5 flex flex-col items-center text-center">
          <Badge
            variant="outline"
            className="mb-2 border-emerald-200 bg-emerald-50 text-emerald-700 py-1 px-4 text-[10px] tracking-widest uppercase font-bold"
          >
            Our Rental EV Scooter
          </Badge>
          <h2 className="text-xl md:text-3xl font-headline font-semibold text-zinc-950 tracking-tight">
            Meet the <span className="text-primary">VIDA VX2 Plus</span>
          </h2>
          <div className="h-1 w-12 bg-primary rounded-full mt-2" />
        </div>

        <Card className="border border-zinc-200 bg-white shadow-sm rounded-2xl overflow-hidden max-w-5xl mx-auto">
          <CardContent className="p-4 md:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left: Scooter visual preview + interactive color selector */}
              <div className="lg:col-span-6 flex flex-col gap-4 min-w-0">
                <div className="relative rounded-xl bg-zinc-50 border border-zinc-200/80 p-3.5 sm:p-5 flex flex-col items-center justify-center min-h-[210px] sm:min-h-[260px] md:min-h-[300px] overflow-hidden">
                  <div className="w-full flex flex-wrap items-center justify-between gap-2 z-10 mb-2">
                    <Badge
                      variant="outline"
                      className="bg-white border-zinc-200 text-zinc-900 text-[10px] font-semibold px-2.5 py-0.5 flex items-center gap-1.5"
                    >
                      <span
                        className="inline-block h-2.5 w-2.5 rounded-full border border-zinc-300"
                        style={{ backgroundColor: selectedColor.hex }}
                      />
                      {selectedColor.name}
                    </Badge>
                    <Badge className="bg-emerald-50 text-primary border border-emerald-200 hover:bg-emerald-50 text-[10px] font-bold px-2.5 py-0.5">
                      Available for Rent
                    </Badge>
                  </div>

                  <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] flex items-center justify-center">
                    {SCOOTER_COLORS.map((color, idx) => {
                      const isActive = color.id === selectedColor.id;
                      return (
                        <div
                          key={color.id}
                          aria-hidden={!isActive}
                          className={`absolute inset-0 transition-opacity duration-150 ${
                            isActive
                              ? "opacity-100 z-10"
                              : "opacity-0 z-0 pointer-events-none"
                          }`}
                        >
                          <Image
                            src={color.imageUrl}
                            alt={`VIDA VX2 Plus Electric Scooter in ${color.name}`}
                            fill
                            sizes="(max-width: 640px) 280px, 440px"
                            quality={75}
                            loading="eager"
                            priority={idx === 0}
                            className="object-contain mix-blend-multiply drop-shadow-md"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Color Change Options */}
                <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-900">
                      Color Options
                    </span>
                    <span className="text-[11px] font-semibold text-primary">
                      {selectedColor.name} — {selectedColor.accentNote}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {SCOOTER_COLORS.map((color) => {
                      const isActive = color.id === selectedColor.id;
                      return (
                        <button
                          key={color.id}
                          type="button"
                          onClick={() => setSelectedColor(color)}
                          aria-label={`Select ${color.name} color`}
                          aria-pressed={isActive}
                          className={`group flex flex-col items-center gap-1.5 rounded-lg p-2 border text-center transition-all ${
                            isActive
                              ? "bg-white border-primary shadow-sm ring-1 ring-primary"
                              : "bg-white/70 border-zinc-200 hover:border-zinc-300"
                          }`}
                        >
                          <span
                            className={`h-6 w-6 rounded-full border shadow-inner transition-transform ${
                              isActive ? "scale-110 border-primary" : "border-zinc-300 group-hover:scale-105"
                            }`}
                            style={{ backgroundColor: color.hex }}
                          />
                          <span
                            className={`text-[10px] leading-tight font-medium ${
                              isActive ? "text-primary font-bold" : "text-zinc-700"
                            }`}
                          >
                            {color.name.split(" ")[1] || color.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right: Scooter Details, Highlight Specs & Rental CTAs */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-4 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-zinc-200">
                  <div>
                    <h3 className="text-lg md:text-2xl font-headline font-bold text-zinc-950 tracking-tight">
                      VIDA VX2 Plus
                    </h3>
                    <p className="text-xs text-primary font-semibold mt-0.5">
                      Color: {selectedColor.name}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-zinc-500">
                      Rent Starts At
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-primary">
                      ₹35
                      <span className="text-xs font-medium text-zinc-600">
                        /hr
                      </span>
                    </p>
                  </div>
                </div>

                {/* Highlight Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SCOOTER_SPECS.map((spec) => (
                    <div
                      key={spec.label}
                      className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-3 flex items-center gap-3 min-w-0"
                    >
                      <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                        <spec.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                          {spec.label}
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-zinc-950">
                          {spec.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Rental Booking CTAs */}
                <div className="pt-1 flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="w-full sm:flex-1 shadow-md shadow-primary/20"
                    onClick={() =>
                      onBookScooter(`VIDA VX2 Plus (${selectedColor.name})`)
                    }
                  >
                    Rent in {selectedColor.name}
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="whatsapp"
                    className="w-full sm:flex-1 shadow-sm"
                  >
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Book via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

