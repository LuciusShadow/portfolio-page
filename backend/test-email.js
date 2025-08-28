import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '.env') });

console.log('Testing Gmail configuration...');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log(
  'EMAIL_PASS length:',
  process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 'undefined'
);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter
  .verify()
  .then(() => {
    console.log('✅ Gmail connection successful!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Gmail connection failed:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Response:', error.response);
    process.exit(1);
  });
