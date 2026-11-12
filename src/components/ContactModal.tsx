"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { QuickMessageChips } from "@/components/QuickMessageChips";
import { normalizeIndianPhone, openWhatsAppChat } from "@/lib/whatsapp";
import { MessageCircle, Phone, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .refine((val) => /^\d{10}$/.test(normalizeIndianPhone(val)), {
      message: "Please enter a valid 10-digit phone number",
    }),
  message: z.string().min(5, "Please choose a quick message or enter your requirement"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const watchedMessage = form.watch("message");

  const onSubmit = (values: FormValues) => {
    const cleanPhone = normalizeIndianPhone(values.phone);
    const whatsappMessage = `Hello Winev! I'm ${values.name.trim()} (${cleanPhone}).\n\nEnquiry: ${values.message.trim()}`;

    openWhatsAppChat(whatsappMessage);

    toast({
      title: "Opening WhatsApp...",
      description: "Your pre-filled scooter rental enquiry is ready to send.",
    });

    onClose();
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[450px] border-zinc-200 bg-white text-zinc-950 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight text-zinc-950">Get in <span className="text-primary">Touch</span></DialogTitle>
          <DialogDescription className="text-zinc-600 italic">
            Thinking about a ride? Leave your details and we'll help you pick the perfect EV.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-zinc-900">
                    <User className="h-4 w-4 text-primary" />
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-zinc-900">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="98480 12345" {...field} />
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
                  <FormLabel className="flex items-center gap-2 text-zinc-900">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Your Enquiry Message
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tap a quick message above or type your rental requirement..." 
                      className="min-h-[96px] resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="whatsapp" className="w-full shadow-lg" size="lg">
              <MessageCircle className="h-4 w-4" />
              Send Enquiry on WhatsApp
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
