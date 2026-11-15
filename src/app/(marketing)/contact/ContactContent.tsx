
"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { QuickMessageChips } from "@/components/QuickMessageChips";
import { useToast } from "@/hooks/use-toast";
import { SITE_CONFIG } from "@/config/site";
import { openWhatsAppChat } from "@/lib/whatsapp";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactContent() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const watchedMessage = form.watch("message");

  function onSubmit(values: z.infer<typeof formSchema>) {
    const whatsappMessage = `Hello Winev! I'm ${values.name.trim()} (${values.email.trim()}).\n\nMessage: ${values.message.trim()}`;

    openWhatsAppChat(whatsappMessage);

    toast({
      title: "Opening WhatsApp...",
      description: "Your pre-filled message is ready to send on WhatsApp.",
    });
    form.reset();
  }

  return (
    <div className="pt-12 bg-white">
      <header className="py-5 md:py-6 text-center bg-zinc-50/80 border-b border-zinc-200">
        <div className="container">
          <h1 className="text-lg md:text-2xl font-semibold text-zinc-950">Contact <span className="text-primary">Us</span></h1>
          <p className="mt-1.5 text-xs text-zinc-600 max-w-2xl mx-auto">
            Have questions or need support? We're here to help.
          </p>
        </div>
      </header>
      
      <section className="py-6 md:py-8 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-base font-semibold text-zinc-950">Get in <span className="text-primary">Touch</span></h2>
              <p className="mt-2 text-xs text-zinc-600">Fill out the form and we'll get back to you as soon as possible.</p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-zinc-900">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-zinc-900">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <QuickMessageChips
                    currentMessage={watchedMessage}
                    onSelect={(msg) =>
                      form.setValue("message", msg, { shouldValidate: true, shouldDirty: true })
                    }
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-zinc-900">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tap a pre-ready message above or type how we can help you..." {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" variant="whatsapp" size="lg" className="w-full sm:w-auto">
                    <MessageCircle className="h-4 w-4" />
                    Send via WhatsApp
                  </Button>
                </form>
              </Form>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-zinc-950">Our <span className="text-primary">Location</span></h3>
                <div className="mt-4 space-y-3 text-xs sm:text-sm text-zinc-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{SITE_CONFIG.address.full}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-primary">{SITE_CONFIG.phoneDisplay}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-primary break-all">{SITE_CONFIG.email}</a>
                  </div>
                </div>
              </div>
              <div className="w-full aspect-video max-w-md rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
                <iframe
                  src={`https://www.google.com/maps?q=${SITE_CONFIG.coordinates.lat},${SITE_CONFIG.coordinates.lng}&z=17&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Winev Scooter Rental Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 bg-zinc-50/70 border-t border-zinc-200">
        <div className="container max-w-4xl">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-headline font-semibold text-zinc-950 tracking-tight">Frequently Asked <span className="text-primary">Questions</span></h2>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-600">Quick answers to common questions about our scooter rentals.</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="w-full border-none">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-zinc-200">
                  <AccordionTrigger className="text-left text-xs sm:text-sm text-zinc-950 hover:text-primary hover:no-underline py-3 font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-zinc-600 leading-relaxed pb-3">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}

const faqItems = [
    {
        question: "What documents are required to rent a scooter?",
        answer: "To rent a scooter, you must provide a valid original Driving License, an Aadhaar Card or PAN Card, and a valid local address proof (such as a utility bill or rental agreement)."
    },
    {
        question: "Is there a security deposit?",
        answer: "Yes, we maintain a minimal security deposit of ₹2,000 to ensure the safety and maintenance of our premium electric fleet. This is fully refundable upon the safe return of the vehicle."
    },
    {
        question: "What are the performance specs of the scooters?",
        answer: "Our premium EV fleet offers a range of up to 110km on a full charge and a top speed of 80kmh. Fast charging (up to 80%) is available in just 45 minutes."
    },
    {
        question: "Do you offer weekly or long-term rentals?",
        answer: "Absolutely! We offer special weekly rental rates starting at ₹2,199. This is perfect for commuters looking for an affordable and sustainable mobility solution."
    },
    {
        question: "What is the booking process?",
        answer: "You can book easily through WhatsApp. Just send us a message to our primary number (90148 27770), and our team will guide you through the instant booking process."
    }
];
