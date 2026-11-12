"use client";

import { PRE_READY_ENQUIRY_MESSAGES } from "@/lib/whatsapp";

type QuickMessageChipsProps = {
  currentMessage: string;
  onSelect: (message: string) => void;
};

/** Clickable pre-ready message pills that fill enquiry textareas cleanly on one tap. */
export function QuickMessageChips({
  currentMessage,
  onSelect,
}: QuickMessageChipsProps) {
  return (
    <div className="space-y-1.5">
      <p className="text-[11px] font-semibold text-zinc-600">
        Quick pre-ready messages (tap to fill):
      </p>
      <div className="flex flex-wrap gap-1.5">
        {PRE_READY_ENQUIRY_MESSAGES.map((preset) => {
          const isSelected = currentMessage.trim() === preset.message;
          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => onSelect(preset.message)}
              className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                isSelected
                  ? "border-primary bg-emerald-50 text-primary"
                  : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {preset.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

