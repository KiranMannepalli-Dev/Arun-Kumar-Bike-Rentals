"use client";

import { useState } from "react";
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
import { Button } from "@/components/ui/button";
import {
  RENTAL_PLAN_OPTIONS,
  normalizeIndianPhone,
  openWhatsAppChat,
} from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .refine((val) => /^\d{10}$/.test(normalizeIndianPhone(val)), {
      message: "Please enter a valid 10-digit phone number",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export function LeadCaptureModal({
  isOpen,
  onClose,
  bikeName,
}: {
  isOpen: boolean;
  onClose: () => void;
  bikeName: string;
}) {
  const [selectedPlan, setSelectedPlan] = useState<string>(RENTAL_PLAN_OPTIONS[1]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    const cleanPhone = normalizeIndianPhone(values.phone);
    const message = `Hi Winev! I'm ${values.name.trim()} (${cleanPhone}). I would like to book the ${bikeName} on the ${selectedPlan} plan. Please share availability.`;

    openWhatsAppChat(message);
    onClose();
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[400px] border-zinc-200 bg-white text-zinc-950 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-zinc-950">Complete Your <span className="text-primary">Booking</span></DialogTitle>
          <DialogDescription className="text-sm text-zinc-600">
            Enter your details below to continue booking the <span className="font-semibold text-primary">{bikeName}</span> on WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
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
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="98480 12345" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-1.5">
              <p className="text-xs font-medium text-zinc-900">Select Rental Plan</p>
              <div className="grid grid-cols-2 gap-2">
                {RENTAL_PLAN_OPTIONS.map((plan) => {
                  const isActive = selectedPlan === plan;
                  return (
                    <button
                      key={plan}
                      type="button"
                      onClick={() => setSelectedPlan(plan)}
                      className={`rounded-xl border px-3 py-2 text-xs font-medium text-left transition-colors ${
                        isActive
                          ? "border-primary bg-emerald-50 text-primary font-semibold"
                          : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-primary/50"
                      }`}
                    >
                      {plan}
                    </button>
                  );
                })}
              </div>
            </div>
            <Button type="submit" variant="whatsapp" className="w-full mt-2" size="lg">
              <MessageCircle className="h-4 w-4" />
              Continue to WhatsApp
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
