/**
 * Main text configuration file
 * 
 * This file re-exports the localized text configurations and provides
 * backward compatibility with the existing API.
 * 
 * For multi-language support, add new locale imports and update the
 * getTexts() function to select the appropriate language based on
 * user preference or browser settings.
 */

import { type TextConfig, en } from './locales/en';

// Re-export the TextConfig type for backward compatibility
export type { TextConfig };

// Re-export English texts as default for backward compatibility
export const defaultTexts: TextConfig = en;

/**
 * Get the current text configuration based on locale
 * 
 * @param _locale - Optional locale string (e.g., 'en', 'de') - Reserved for future use
 * @returns TextConfig object with all localized strings
 * 
 * Future implementation:
 * - Accept locale parameter
 * - Check localStorage/sessionStorage for user preference
 * - Fall back to browser language
 * - Return corresponding locale configuration
 */
export const getTexts = (_locale?: string): TextConfig => {
  // For now, return English texts
  // Future: implement language switching logic here
  // Example:
  // const userLocale = _locale || localStorage.getItem('locale') || navigator.language.split('-')[0];
  // switch (userLocale) {
  //   case 'de': return de;
  //   case 'en':
  //   default: return en;
  // }
  
  return en;
};
