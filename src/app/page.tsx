import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CaseStudyStepper from "@/components/ui/stepper";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import heroBanner2 from "../../public/hero-img2.png";

type CardContentT = {
  title: string;
  desc: string;
};
import Image from "next/image";
type BusinessPlanT = "Free" | "Pro" | "Business";
type BusinessPlansContentT = Record<BusinessPlanT, string[]>;

const CARD_CONTENTS: CardContentT[] = [
  {
    title: "⚡ Błyskawiczne faktury",
    desc: "Wystaw fakturę sprzedaży w 3 prostych krokach — klient, kwota,opis — i gotowe. System sam nada numer, policzy VAT i wygeneruje PDF.",
  },
  {
    title: "📥 Import z Excela w 1 klik ",
    desc: " Masz dane w arkuszu? Wrzuć XLS lub CSV — a nasz system: rozpozna kolumny automatycznie, połączy pozycje w faktury, przeliczy waluty i uzupełni NIP-y, a Ty tylko zatwierdzisz i wyślesz PDF-y do klientów.",
  },
  {
    title: "🧠 AI, które pracuje za Ciebie",
    desc: "Nasza sztuczna inteligencja wykrywa błędy w danych i podpowiada poprawki, generuje profesjonalne opisy usług, dopasowuje formaty faktur do Twoich klientów (PL / UE / zagranica).",
  },
];
const BUSINESS_PLANS_CONTENTS: BusinessPlansContentT = {
  Free: [
    "Do 5 faktur miesięcznie",
    "Generowanie PDF i wysyłka email",
    "Podstawowy panel faktur",
    "Podstawowe raporty przychodów",
  ],
  Pro: [
    "Nielimitowane faktury",
    "Uzupełnianie opisów przez AI",
    "Branding faktur (logo, kolory)",
    "Przypomnienia o płatnościach",
    "Eksport PDF, CSV, JPK",
  ],
  Business: [
    "Wszystko z planu Pro",
    "Integracja z KSeF 2026",
    "Integracja z kontami bankowymi",
    "Faktury cykliczne / subskrypcyjne",
    "API i integracje z systemami księgowymi",
    "Zaawansowane raporty i analizy",
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        <section className="grid md:grid-cols-2 grid-cols-1  place-items-center gap-6 py-12 ">
          <div className="flex flex-col space-y-8">
            <h1 className="text-5xl text-primary sm:text-6xl font-extrabold tracking-tight ">
              Witaj w Fakturek!
            </h1>
            <p className="text-xl  text-muted-foreground max-w-2xl  leading-relaxed">
              Panel do obsługi dokumentów księgowych. Zacznij już dziś i uprość
              zarządzanie swoimi fakturami i wydatkami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="default" size="lg" asChild>
                <Link href="/register">Zacznij teraz</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Dowiedz się więcej</Link>
              </Button>
            </div>
          </div>
          <picture className="relative overflow-hidden rounded-2xl shadow-xl group">
            <Image
              className="size-full object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-110"
              src={heroBanner2}
              alt="hero-banner"
            />
            {/* półprzezroczysty gradient jako overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          </picture>
        </section>
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary">
              Wszystko czego potrzebujesz
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CARD_CONTENTS.map((cardContent) => (
              <>
                <div
                  key={cardContent.title}
                  className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow "
                >
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {cardContent.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed ">
                    {cardContent.desc}
                  </p>
                </div>
              </>
            ))}
          </div>
        </section>
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl text-primary font-bold">Cennik</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="flex flex-col border">
              <CardHeader className="space-y-2 pb-4">
                <CardTitle className="text-3xl text-foreground">Free</CardTitle>
                <CardDescription className="text-base">
                  Cena 0 zł / miesiąc
                </CardDescription>
                <CardDescription>
                  Dla freelancerów, którzy chcą wypróbować aplikację.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  {BUSINESS_PLANS_CONTENTS["Free"].map(
                    (plan_content, index) => (
                      <>
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">
                            {plan_content}
                          </span>
                        </li>
                      </>
                    ),
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Wybieram plan FREE
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col border md:ring-2 md:ring-primary">
              <CardHeader className="space-y-2 pb-4">
                <CardTitle className="text-3xl">Pro</CardTitle>
                <CardDescription className="text-base">
                  Cena 29 zł / miesiąc
                </CardDescription>
                <CardDescription>
                  Dla aktywnych freelancerów — więcej automatyzacji i AI.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  {BUSINESS_PLANS_CONTENTS["Pro"].map((plan_content, index) => (
                    <>
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">
                          {plan_content}
                        </span>
                      </li>
                    </>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Wybieram plan PRO</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col border">
              <CardHeader className="space-y-2 pb-4">
                <CardTitle className="text-3xl text-foreground">
                  Business
                </CardTitle>
                <CardDescription className="text-base">
                  Cena 59 zł / miesiąc
                </CardDescription>
                <CardDescription>
                  Dla freelancerów i firm, które potrzebują pełnej
                  automatyzacji.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <ul className="space-y-2 text-sm">
                    {BUSINESS_PLANS_CONTENTS["Business"].map(
                      (plan_content, index) => (
                        <>
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">
                              {plan_content}
                            </span>
                          </li>
                        </>
                      ),
                    )}
                  </ul>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Wybieram plan BUSINESS
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section>
          <CaseStudyStepper />
        </section>
      </main>

      <Footer />
    </div>
  );
}
