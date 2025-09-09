import { getTexts } from '../config/texts';

export default function PrivacyPolicy() {
  const texts = getTexts().privacyPolicy;
  return (
    <div className="privacy-policy" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>{texts.title}</h1>
      <p><strong>{texts.lastUpdated}</strong> {new Date().toLocaleDateString()}</p>

      <h2>{texts.dataCollectionTitle}</h2>
      <p>{texts.dataCollectionText}</p>
      <ul>
        {texts.dataCollectionList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>{texts.purposeTitle}</h2>
      <p>{texts.purposeText}</p>

      <h2>{texts.providerTitle}</h2>
      <p>{texts.providerText}</p>

      <h2>{texts.retentionTitle}</h2>
      <p>{texts.retentionText}</p>

      <h2>{texts.rightsTitle}</h2>
      <p>{texts.rightsText}</p>
      <ul>
        {texts.rightsList.map((right, index) => (
          <li key={index}>{right}</li>
        ))}
      </ul>

      <h2>{texts.contactTitle}</h2>
      <p>{texts.contactText}</p>
      <p><strong>Email:</strong> {texts.contactEmail}</p>

      <h2>{texts.legalBasisTitle}</h2>
      <p>{texts.legalBasisText}</p>
    </div>
  );
}