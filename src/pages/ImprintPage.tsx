import { useEffect } from 'react';
import { personalConfig } from '../config/personal';
import { getTexts } from '../config/texts';

export default function ImprintPage() {
  const { texts: allTexts } = useLanguage();
  const texts = allTexts.imprint;

  useEffect(() => {
    // Prevent indexing of this page
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    // Cleanup on unmount
    return () => {
      const existingMeta = document.querySelector('meta[name="robots"]');
      if (existingMeta) {
        existingMeta.remove();
      }
    };
  }, []);

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
              {texts.contentLiabilityText.map((text) => (
                <p key={text.substring(0, 50)} className="imprint-page__text">
                  {text}
                </p>
              ))}
            </div>

            <div className="imprint-page__subsection">
              <h3 className="imprint-page__subsection-title">{texts.copyrightTitle}</h3>
              {texts.copyrightText.map((text) => (
                <p key={text.substring(0, 50)} className="imprint-page__text">
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div className="imprint-page__section">
            <h2 className="imprint-page__section-title">{texts.privacyTitle}</h2>
            <div className="imprint-page__info">
              <p>{texts.privacyText}</p>
            </div>
          </div>

          <div className="imprint-page__section">
            <h2 className="imprint-page__section-title">{texts.detailedPrivacyPolicy.title}</h2>
            <div className="imprint-page__privacy-content">

              {/* Introduction */}
              <div className="imprint-page__privacy-section">
                <p className="imprint-page__privacy-text">{texts.detailedPrivacyPolicy.introduction}</p>
              </div>

              {/* Responsible for Data Processing */}
              <div className="imprint-page__privacy-section">
                <h3 className="imprint-page__privacy-subtitle">{texts.detailedPrivacyPolicy.responsibleTitle}</h3>
                <p className="imprint-page__privacy-text">{texts.detailedPrivacyPolicy.responsibleText}</p>
                <div className="imprint-page__contact-info">
                  {texts.detailedPrivacyPolicy.responsibleContact.split('\n').map((line) => (
                    <p key={line.trim() || 'empty-line'} className="imprint-page__contact-line">{line}</p>
                  ))}
                </div>
              </div>

              {/* Data Protection Officer */}
              <div className="imprint-page__privacy-section">
                <h3 className="imprint-page__privacy-subtitle">{texts.detailedPrivacyPolicy.dataProtectionOfficerTitle}</h3>
                <p className="imprint-page__privacy-text">{texts.detailedPrivacyPolicy.dataProtectionOfficerText}</p>
              </div>

              {/* Rights under GDPR */}
              <div className="imprint-page__privacy-section">
                <h3 className="imprint-page__privacy-subtitle">{texts.detailedPrivacyPolicy.rightsTitle}</h3>
                <p className="imprint-page__privacy-text">{texts.detailedPrivacyPolicy.rightsIntro}</p>
                <ul className="imprint-page__rights-list">
                  {texts.detailedPrivacyPolicy.rights.map((right) => (
                    <li key={right.title} className="imprint-page__rights-item">
                      <strong>{right.title}:</strong> {right.text}
                    </li>
                  ))}
                </ul>

                <h4 className="imprint-page__privacy-subsubtitle">{texts.detailedPrivacyPolicy.revocationTitle}</h4>
                <p className="imprint-page__privacy-text">{texts.detailedPrivacyPolicy.revocationText}</p>

                <h4 className="imprint-page__privacy-subsubtitle">{texts.detailedPrivacyPolicy.objectionTitle}</h4>
                <p className="imprint-page__privacy-text">{texts.detailedPrivacyPolicy.objectionText}</p>
                <p className="imprint-page__privacy-highlight">{texts.detailedPrivacyPolicy.objectionHighlight}</p>
                <p className="imprint-page__privacy-text">{texts.detailedPrivacyPolicy.objectionContact}</p>
              </div>

              {/* Data Deletion */}
              <div className="imprint-page__privacy-section">
                <h3 className="imprint-page__privacy-subtitle">{texts.detailedPrivacyPolicy.dataDeletionTitle}</h3>
                <p className="imprint-page__privacy-text">{texts.detailedPrivacyPolicy.dataDeletionIntro}</p>
                <ul className="imprint-page__deletion-list">
                  {texts.detailedPrivacyPolicy.dataDeletionReasons.map((reason) => (
                    <li key={reason.substring(0, 50)} className="imprint-page__deletion-item">{reason}</li>
                  ))}
                </ul>
                <p className="imprint-page__privacy-text">{texts.detailedPrivacyPolicy.retentionText}</p>
              </div>

              {/* Webhosting */}
              <div className="imprint-page__privacy-section">
                <h3 className="imprint-page__privacy-subtitle">{texts.detailedPrivacyPolicy.webhostingTitle}</h3>
                <p className="imprint-page__privacy-text">
                  {texts.detailedPrivacyPolicy.webhostingText}
                </p>
                <ul className="imprint-page__webhosting-list">
                  {texts.detailedPrivacyPolicy.webhostingDataTypes.map((dataType) => (
                    <li key={dataType} className="imprint-page__webhosting-item">{dataType}</li>
                  ))}
                </ul>
                <p className="imprint-page__privacy-text">{texts.detailedPrivacyPolicy.webhostingPurpose}</p>

                <div className="imprint-page__data-categories">
                  <p className="imprint-page__category-title">
                    <strong>{texts.detailedPrivacyPolicy.webhostingDataCategories.affectedData}</strong>
                  </p>
                  <ul className="imprint-page__category-list">
                    {texts.detailedPrivacyPolicy.webhostingDataCategories.affectedDataList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p><strong>{texts.detailedPrivacyPolicy.webhostingDataCategories.affectedPersons}</strong></p>
                  <p><strong>{texts.detailedPrivacyPolicy.webhostingDataCategories.processingPurpose}</strong></p>
                  <p><strong>{texts.detailedPrivacyPolicy.webhostingDataCategories.legalBasis}</strong></p>
                  <p><strong>{texts.detailedPrivacyPolicy.webhostingDataCategories.provider}</strong></p>
                </div>

                <div className="imprint-page__hosting-provider">
                  <p><strong>{texts.detailedPrivacyPolicy.hostingProvider.name}</strong></p>
                  <p>{texts.detailedPrivacyPolicy.hostingProvider.address}</p>
                  <p>
                    Datenschutzerklärung: {' '}
                    <a
                      href={texts.detailedPrivacyPolicy.hostingProvider.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="imprint-page__external-link"
                    >
                      {texts.detailedPrivacyPolicy.hostingProvider.website}
                    </a>
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="imprint-page__privacy-section">
                <h3 className="imprint-page__privacy-subtitle">{texts.detailedPrivacyPolicy.contactTitle}</h3>
                <p className="imprint-page__privacy-text">{texts.detailedPrivacyPolicy.contactText}</p>

                <div className="imprint-page__data-categories">
                  <p className="imprint-page__category-title"><strong>Betroffene Daten:</strong></p>
                  <ul className="imprint-page__category-list">
                    {texts.detailedPrivacyPolicy.contactDataCategories.affectedData.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p><strong>Betroffene Personen: </strong>{texts.detailedPrivacyPolicy.contactDataCategories.affectedPersons}</p>
                  <p><strong>Verarbeitungszweck: </strong>{texts.detailedPrivacyPolicy.contactDataCategories.processingPurpose}</p>
                  <p><strong>Rechtsgrundlage: </strong>{texts.detailedPrivacyPolicy.contactDataCategories.legalBasis}</p>
                </div>
              </div>

              {/* Security Measures */}
              <div className="imprint-page__privacy-section">
                <h3 className="imprint-page__privacy-subtitle">{texts.detailedPrivacyPolicy.securityTitle}</h3>
                <p className="imprint-page__privacy-text">{texts.detailedPrivacyPolicy.securityText}</p>
              </div>

              {/* Changes to Privacy Policy */}
              <div className="imprint-page__privacy-section">
                <h3 className="imprint-page__privacy-subtitle">{texts.detailedPrivacyPolicy.changesTitle}</h3>
                <p className="imprint-page__privacy-text">{texts.detailedPrivacyPolicy.changesText}</p>
                <p className="imprint-page__disclaimer">
                  <strong>{texts.detailedPrivacyPolicy.disclaimer}</strong>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}