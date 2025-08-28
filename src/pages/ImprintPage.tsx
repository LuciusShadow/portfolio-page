import { personalConfig } from '../config/personal';

export default function ImprintPage() {
  return (
    <section className="imprint-page">
      <div className="imprint-page__container">
        <div className="imprint-page__header">
          <h1 className="imprint-page__title">Impressum</h1>
          <p className="imprint-page__subtitle">Legal Information</p>
        </div>

        <div className="imprint-page__content">
          <div className="imprint-page__section">
            <h2 className="imprint-page__section-title">Angaben gemäß § 5 TMG</h2>
            <div className="imprint-page__info">
              <p><strong>Name:</strong> {personalConfig.name}</p>
              <p><strong>Adresse:</strong></p>
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
              <p>Deutschland</p>
            </div>
          </div>

          <div className="imprint-page__section">
            <h2 className="imprint-page__section-title">Kontakt</h2>
            <div className="imprint-page__info">
              <p><strong>E-Mail:</strong> {personalConfig.email.full}</p>
              <p><strong>Telefon:</strong> +49 (0) 123 456789</p>
            </div>
          </div>

          <div className="imprint-page__section">
            <h2 className="imprint-page__section-title">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="imprint-page__info">
              <p>{personalConfig.name}</p>
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
            </div>
          </div>

          <div className="imprint-page__section">
            <h2 className="imprint-page__section-title">Haftungsausschluss</h2>

            <div className="imprint-page__subsection">
              <h3 className="imprint-page__subsection-title">Haftung für Inhalte</h3>
              <p className="imprint-page__text">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="imprint-page__text">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div className="imprint-page__subsection">
              <h3 className="imprint-page__subsection-title">Haftung für Links</h3>
              <p className="imprint-page__text">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="imprint-page__text">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div className="imprint-page__subsection">
              <h3 className="imprint-page__subsection-title">Urheberrecht</h3>
              <p className="imprint-page__text">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                bzw. Erstellers.
              </p>
              <p className="imprint-page__text">
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>

          <div className="imprint-page__section">
            <h2 className="imprint-page__section-title">Datenschutz</h2>
            <div className="imprint-page__info">
              <p className="imprint-page__text">
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.
                Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder
                E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
                Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
              </p>
              <p className="imprint-page__text">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per
                E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
                Dritte ist nicht möglich.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
