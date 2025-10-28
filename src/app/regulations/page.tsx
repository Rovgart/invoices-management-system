import {
  DEFINITIONS,
  REGISTRATION_REQUIREMENTS,
  SERVICE_FEATURES,
  USER_OBLIGATIONS,
  PROHIBITED_ACTIVITIES,
  USŁUGODAWCA_RIGHTS,
  ACCOUNT_TERMINATION_REASONS,
  LIABILITY_LIMITATIONS,
  CONTACT_INFO,
} from ".";

export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm border border-border p-8 md:p-12">
      <h1 className="text-4xl font-bold text-foreground mb-8">Regulamin</h1>

      <div className="text-sm text-muted-foreground mb-8">
        <p>Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}</p>
      </div>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            1. Postanowienia ogólne
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Niniejszy Regulamin określa zasady korzystania z Aplikacji do
            zarządzania fakturami, warunki świadczenia usług oraz prawa i
            obowiązki Użytkowników oraz Usługodawcy.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Korzystanie z Aplikacji jest równoznaczne z akceptacją niniejszego
            Regulaminu. Użytkownik zobowiązany jest do zapoznania się z jego
            treścią przed rozpoczęciem korzystania z Usługi.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            2. Definicje
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Pojęcia użyte w Regulaminie oznaczają:
          </p>
          <dl className="space-y-4">
            {DEFINITIONS.map((item, index) => (
              <div key={index} className="ml-4">
                <dt className="font-semibold text-foreground">{item.term}</dt>
                <dd className="text-muted-foreground mt-1">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            3. Rejestracja i Konto Użytkownika
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Aby korzystać z pełnej funkcjonalności Aplikacji, Użytkownik musi
            utworzyć Konto. Warunki utworzenia Konta:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            {REGISTRATION_REQUIREMENTS.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Użytkownik może w każdej chwili usunąć swoje Konto, przesyłając
            odpowiednie żądanie na adres kontaktowy Usługodawcy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            4. Zakres Usługi
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Aplikacja umożliwia:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            {SERVICE_FEATURES.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Usługodawca zastrzega sobie prawo do modyfikacji zakresu Usługi,
            wprowadzania nowych funkcjonalności oraz czasowego wyłączenia części
            funkcji w celach konserwacyjnych.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            5. Obowiązki Użytkownika
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Użytkownik zobowiązuje się do:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            {USER_OBLIGATIONS.map((obligation, index) => (
              <li key={index}>{obligation}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            6. Działania zabronione
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Zabrania się:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            {PROHIBITED_ACTIVITIES.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Naruszenie powyższych zasad skutkuje natychmiastowym zawieszeniem
            lub usunięciem Konta oraz może prowadzić do działań prawnych.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            7. Prawa Usługodawcy
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Usługodawca ma prawo do:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            {USŁUGODAWCA_RIGHTS.map((right, index) => (
              <li key={index}>{right}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            8. Rozwiązanie umowy i usunięcie Konta
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Konto Użytkownika może zostać zawieszone lub usunięte w
            następujących przypadkach:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            {ACCOUNT_TERMINATION_REASONS.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            W przypadku usunięcia Konta, dane Użytkownika zostaną usunięte lub
            zanonimizowane zgodnie z Polityką Prywatności i obowiązującymi
            przepisami prawa.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            9. Odpowiedzialność
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            {LIABILITY_LIMITATIONS.map((limitation, index) => (
              <li key={index}>{limitation}</li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Użytkownik ponosi pełną odpowiedzialność za treści umieszczane w
            Aplikacji oraz za zgodność wystawianych faktur z obowiązującymi
            przepisami prawa.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            10. Ochrona danych osobowych
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Zasady przetwarzania danych osobowych Użytkowników zostały określone
            w Polityce Prywatności dostępnej w Aplikacji. Korzystanie z Usługi
            wymaga akceptacji Polityki Prywatności.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            11. Własność intelektualna
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Wszelkie prawa autorskie i prawa własności intelektualnej do
            Aplikacji, w tym kod źródłowy, grafika, interfejs użytkownika i
            dokumentacja, należą do Usługodawcy lub jego licencjodawców.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Użytkownik nabywa jedynie prawo do korzystania z Aplikacji zgodnie z
            Regulaminem, bez prawa do jej kopiowania, modyfikowania lub
            rozpowszechniania.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            12. Zmiany Regulaminu
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Usługodawca zastrzega sobie prawo do wprowadzania zmian w
            Regulaminie. O planowanych zmianach Użytkownicy zostaną
            poinformowani z co najmniej 14-dniowym wyprzedzeniem poprzez
            powiadomienie w Aplikacji lub wiadomość e-mail.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Kontynuowanie korzystania z Aplikacji po wejściu w życie zmian
            oznacza akceptację nowego Regulaminu. Użytkownik, który nie
            akceptuje zmian, ma prawo do usunięcia Konta.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            13. Postanowienia końcowe
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            W sprawach nieuregulowanych w niniejszym Regulaminie stosuje się
            przepisy prawa polskiego, w szczególności Kodeksu Cywilnego oraz
            ustawy o świadczeniu usług drogą elektroniczną.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Wszelkie spory wynikłe w związku z korzystaniem z Aplikacji będą
            rozstrzygane przez sądy powszechne właściwe dla siedziby
            Usługodawcy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            14. Kontakt
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            W sprawach związanych z Regulaminem lub działaniem Aplikacji prosimy
            o kontakt:
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
            Niniejszy Regulamin obowiązuje od dnia{" "}
            {new Date().toLocaleDateString("pl-PL")}i został sporządzony zgodnie
            z obowiązującymi przepisami prawa polskiego.
          </p>
        </section>
      </div>
    </main>
  );
}
