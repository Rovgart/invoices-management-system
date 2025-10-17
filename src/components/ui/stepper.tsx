"use client";

import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

type Step = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
};

const defaultSteps: Step[] = [
  {
    id: "onboarding",
    title: "Onboarding",
    subtitle: "Szybka konfiguracja",
    description:
      "Użytkownik tworzy konto i uzupełnia dane firmy. Numeracja faktur i ustawienia VAT gotowe do użycia w kilka minut.",
    image: "/images/step-onboarding.png",
  },
  {
    id: "import-xls",
    title: "Import XLS",
    subtitle: "Z Excel → Faktury",
    description:
      "Wrzuć arkusz XLS/CSV. System rozpozna kolumny i zasugeruje mapowanie (lub zrób to ręcznie).",
    image: "/images/step-import.png",
  },
  {
    id: "ai-parse",
    title: "AI parsing",
    subtitle: "Automatyzacja",
    description:
      "Sztuczna inteligencja wykrywa błędy, uzupełnia opisy pozycji i grupuje w faktury. Walidacja NIP, kursy walut i VAT.",
    image: "/images/step-ai.png",
  },
  {
    id: "review-send",
    title: "Review & Send",
    subtitle: "Wyślij w 1 klik",
    description:
      "Potwierdź wygenerowane faktury i wyślij PDF na e-mail klienta lub przekaż do KSeF. Automatyczne przypomnienia o płatnościach.",
    image: "/images/step-send.png",
  },
];

export default function CaseStudyStepper({
  steps = defaultSteps,
  initialIndex = 0,
}: {
  steps?: Step[];
  initialIndex?: number;
}) {
  const [index, setIndex] = useState(
    Math.max(0, Math.min(initialIndex, steps.length - 1)),
  );

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(steps.length - 1, i + 1));
  const goTo = (i: number) =>
    setIndex(Math.max(0, Math.min(i, steps.length - 1)));

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* STEPPER */}
        <div className="order-2 lg:order-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">
              Jak to działa — krok po kroku
            </h2>
            <div className="text-sm text-muted-foreground">
              {index + 1}/{steps.length}
            </div>
          </div>

          <ol className="relative">
            {steps.map((s, i) => {
              const active = i === index;
              const completed = i < index;

              return (
                <li key={s.id} className="mb-8 relative">
                  {/* Linia łącząca */}
                  {i !== steps.length - 1 && (
                    <span
                      aria-hidden
                      className={`absolute left-4 top-10 h-[calc(100%_-_2.5rem)] w-0.5 ${
                        completed ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}

                  <button
                    onClick={() => goTo(i)}
                    className="group w-full text-left flex items-start gap-4"
                    aria-current={active ? "step" : undefined}
                  >
                    {/* Numer / check */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium ring-1 transition-colors ${
                          active
                            ? "bg-primary text-primary-foreground ring-primary"
                            : completed
                              ? "bg-muted text-foreground ring-muted"
                              : "bg-background text-foreground ring-border"
                        }`}
                      >
                        {completed ? "✓" : i + 1}
                      </div>
                    </div>

                    {/* Treść */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-lg font-semibold ${
                            active ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {s.title}
                        </h3>
                        {s.subtitle && (
                          <span className="text-sm text-muted-foreground hidden md:inline">
                            {s.subtitle}
                          </span>
                        )}
                      </div>
                      <p
                        className={`mt-2 text-sm leading-relaxed ${
                          active
                            ? "text-muted-foreground"
                            : "text-muted-foreground/70"
                        }`}
                      >
                        {s.description}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Kontrolki */}
          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={prev}
              disabled={index === 0}
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border bg-background text-foreground shadow-sm disabled:opacity-50"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Poprzedni
            </button>

            <button
              onClick={next}
              disabled={index === steps.length - 1}
              className="ml-auto inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 disabled:opacity-50"
            >
              Następny
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* OBRAZ */}
        <div className="order-1 lg:order-2">
          <div className="rounded-xl overflow-hidden border bg-card text-card-foreground min-h-[240px] flex items-center justify-center">
            {steps[index]?.image ? (
              <img
                src={steps[index].image}
                alt={`${steps[index].title} screenshot`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="p-8 text-center">
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  Podgląd kroku
                </div>
                <div className="text-2xl font-semibold text-foreground">
                  {steps[index].title}
                </div>
                <div className="mt-3 text-sm text-muted-foreground">
                  {steps[index].subtitle}
                </div>
              </div>
            )}
          </div>

          {/* mini-nawigacja */}
          <div className="mt-4 hidden sm:flex gap-3">
            {steps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`flex-1 rounded-md border p-2 text-sm text-left transition ${
                  i === index
                    ? "ring-2 ring-primary/40 bg-muted"
                    : "hover:bg-muted/40"
                }`}
              >
                <div className="font-medium">{s.title}</div>
                <div className="text-xs text-muted-foreground">
                  {s.subtitle}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
