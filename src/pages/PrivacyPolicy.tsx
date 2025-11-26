import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function PrivacyPolicy() {
  const { texts: allTexts } = useLanguage();
  const texts = allTexts.privacyPolicy;

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
    <div className="privacy-policy" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>{texts.title}</h1>
      <p><strong>{texts.lastUpdated}</strong></p>

      <h2>{texts.introTitle}</h2>
      <p>{texts.introText}</p>

      <h2>{texts.dataCollectionTitle}</h2>
      <p>{texts.dataCollectionText}</p>
      <ul>
        {texts.dataCollectionList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>{texts.webhostingTitle}</h2>
      <p>{texts.webhostingText}</p>
      <p>
        <strong>{texts.webhostingProvider}</strong><br />
        {texts.webhostingProviderName}<br />
        {texts.webhostingProviderAddress}<br />
        <a href={texts.webhostingProviderWebsite} target="_blank" rel="noopener noreferrer">
          {texts.webhostingProviderWebsite}
        </a>
      </p>

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
    </div>
  );
}