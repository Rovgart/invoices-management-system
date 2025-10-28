import {
  COLLECTED_DATA,
  SECURITY_MEASURES,
  CONTACT_INFO,
  DATA_RECIPIENTS,
  USER_RIGHTS,
  RETENTION_PERIODS,
  PROCESSING_PURPOSES,
} from ".";
export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm border border-border p-8 md:p-12">
      <h1 className="text-4xl font-bold text-foreground mb-8">
        Polityka Prywatności
      </h1>

      <div className="text-sm text-muted-foreground mb-8">
        <p>Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}</p>
      </div>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            1. Informacje ogólne
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Niniejsza Polityka Prywatności określa zasady przetwarzania i
            ochrony danych osobowych przekazanych przez Użytkowników w związku z
            korzystaniem przez nich z usług aplikacji do zarządzania fakturami
            (dalej: "Aplikacja").
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Administratorem danych osobowych zbieranych za pośrednictwem
            Aplikacji jest [Nazwa Firmy], z siedzibą w [Adres], NIP: [NIP],
            e-mail: [email kontaktowy].
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            2. Zakres zbieranych danych
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            W ramach korzystania z Aplikacji możemy zbierać następujące dane:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            {COLLECTED_DATA.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            3. Cel i podstawa prawna przetwarzania danych
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Dane przetwarzane są w celu:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                {PROCESSING_PURPOSES.map((purpose, index) => (
                  <li key={index}>{purpose}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            4. Okres przechowywania danych
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Dane osobowe przechowujemy przez okres:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
            {RETENTION_PERIODS.map((period, index) => (
              <li key={index}>{period}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            5. Udostępnianie danych osobowych
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Dane osobowe mogą być udostępniane:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            {DATA_RECIPIENTS.map((recipient, index) => (
              <li key={index}>{recipient}</li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Wszystkie podmioty przetwarzające dane w imieniu Administratora
            gwarantują stosowanie odpowiednich środków ochrony i bezpieczeństwa
            danych osobowych zgodnie z RODO.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            6. Prawa użytkownika
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Zgodnie z RODO, przysługują Ci następujące prawa:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            {USER_RIGHTS.map((right, index) => (
              <li key={index}>
                <strong className="text-foreground">{right.title}</strong> -{" "}
                {right.description}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            W celu skorzystania z powyższych praw, prosimy o kontakt pod
            adresem: [email kontaktowy]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            7. Bezpieczeństwo danych
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające
            bezpieczeństwo przetwarzanych danych, w tym:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            {SECURITY_MEASURES.map((measure, index) => (
              <li key={index}>{measure}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            8. Pliki cookies
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Aplikacja używa plików cookies w celu zapewnienia prawidłowego
            działania, analizy ruchu oraz personalizacji doświadczeń
            użytkownika. Użytkownik może w każdej chwili zmienić ustawienia
            cookies w swojej przeglądarce. Szczegółowe informacje znajdują się w
            naszej Polityce Cookies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            9. Zmiany w Polityce Prywatności
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Administrator zastrzega sobie prawo do wprowadzania zmian w
            niniejszej Polityce Prywatności. O wszelkich zmianach użytkownicy
            zostaną poinformowani poprzez powiadomienie w Aplikacji lub
            wiadomość e-mail. Zmiany wchodzą w życie w terminie wskazanym w
            powiadomieniu, nie krótszym niż 7 dni od jego opublikowania.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            10. Kontakt
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            W sprawach związanych z ochroną danych osobowych prosimy o kontakt:
          </p>
          <div className="bg-muted/50 border border-border p-6 rounded-lg mt-4">
            <p className="text-foreground">
              <strong>E-mail:</strong> {CONTACT_INFO.email}
            </p>
            <p className="text-foreground mt-2">
              <strong>Adres:</strong> {CONTACT_INFO.address}
            </p>
            <p className="text-foreground mt-2">
              <strong>Telefon:</strong> {CONTACT_INFO.phone}
            </p>
          </div>
        </section>

        <section className="border-t border-border pt-8 mt-12">
          <p className="text-sm text-muted-foreground italic">
            Niniejsza Polityka Prywatności została sporządzona zgodnie z
            Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia
            27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
            przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
            takich danych oraz uchylenia dyrektywy 95/46/WE (RODO) oraz ustawą o
            ochronie danych osobowych z dnia 10 maja 2018 r.
          </p>
        </section>
      </div>
    </div>
  );
}
