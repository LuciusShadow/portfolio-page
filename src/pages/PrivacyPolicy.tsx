export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy (GDPR/DSGVO)</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>Data Collection</h2>
      <p>We collect only the information you provide through our contact form:</p>
      <ul>
        <li>Name (first and last)</li>
        <li>Email address</li>
        <li>Message content</li>
      </ul>

      <h2>Purpose</h2>
      <p>Your data is used solely to respond to your inquiry.</p>

      <h2>Data Retention</h2>
      <p>Your data is not stored permanently. Email content is processed and forwarded immediately.</p>

      <h2>Your Rights</h2>
      <p>You have the right to access, rectify, or delete your personal data. Contact: info@sascha-bach.de</p>
    </div>
  );
}