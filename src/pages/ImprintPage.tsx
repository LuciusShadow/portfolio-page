import { personalConfig } from '../config/personal';
import { getTexts } from '../config/texts';

export default function ImprintPage() {
  const texts = getTexts().imprint;
  return (
    <section className="imprint-page">
      <div className="imprint-page__container">
        <div className="imprint-page__header">
          <h1 className="imprint-page__title">{texts.title}</h1>
          <p className="imprint-page__subtitle">{texts.subtitle}</p>
        </div>

        <div className="imprint-page__content">
          <div className="imprint-page__section">
            <h2 className="imprint-page__section-title">{texts.companyInfoTitle}</h2>
            <div className="imprint-page__info">
              <p><strong>Name:</strong> {personalConfig.name}</p>
              <p><strong>Adresse:</strong></p>
              <p>{texts.address.street}</p>
              <p>{texts.address.city}</p>
              <p>{texts.address.country}</p>
            </div>
          </div>

          <div className="imprint-page__section">
            <h2 className="imprint-page__section-title">{texts.contactTitle}</h2>
            <div className="imprint-page__info">
              <p><strong>E-Mail:</strong> {personalConfig.email.full}</p>
              <p><strong>Telefon:</strong> {texts.contact.phone}</p>
            </div>
          </div>

          <div className="imprint-page__section">
            <h2 className="imprint-page__section-title">{texts.responsibilityTitle}</h2>
            <div className="imprint-page__info">
              <p>{personalConfig.name}</p>
              <p>{texts.address.street}</p>
              <p>{texts.address.city}</p>
            </div>
          </div>

          <div className="imprint-page__section">
            <h2 className="imprint-page__section-title">{texts.disclaimerTitle}</h2>

            <div className="imprint-page__subsection">
              <h3 className="imprint-page__subsection-title">{texts.contentLiabilityTitle}</h3>
              {texts.contentLiabilityText.map((text, index) => (
                <p key={index} className="imprint-page__text">
                  {text}
                </p>
              ))}
            </div>

            <div className="imprint-page__subsection">
              <h3 className="imprint-page__subsection-title">{texts.linksLiabilityTitle}</h3>
              {texts.linksLiabilityText.map((text, index) => (
                <p key={index} className="imprint-page__text">
                  {text}
                </p>
              ))}
            </div>

            <div className="imprint-page__subsection">
              <h3 className="imprint-page__subsection-title">{texts.copyrightTitle}</h3>
              {texts.copyrightText.map((text, index) => (
                <p key={index} className="imprint-page__text">
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div className="imprint-page__section">
            <h2 className="imprint-page__section-title">{texts.privacyTitle}</h2>
            <div className="imprint-page__info">
              <p className="imprint-page__text">
                {texts.privacyText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
